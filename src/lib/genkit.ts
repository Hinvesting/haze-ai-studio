import { configure, defineFlow, run } from '@genkit-ai/core';
import { googleAI } from '@genkit-ai/google-genai';
import { perplexity } from 'genkitx-perplexity';
import { anthropic } from 'genkitx-anthropic';
import * as z from 'zod';
import { v4 as uuidv4 } from 'uuid';
import dbConnect from './db';
import User from './models/User';
import Storyboard from './models/Storyboard';
import Scene from './models/Scene';
import Shot from './models/Shot';
import Image from './models/Image';

// Helper function to read prompts from markdown files
async function getPrompt(promptId: string): Promise<string> {
  const content = await run('readFile', () => default_api.read_file({ path: 'llm-prompts.md' }));
  const prompts = content.read_file_response.result.split('##');
  const prompt = prompts.find(p => p.trim().startsWith(promptId));
  if (!prompt) {
    throw new Error(`Prompt with ID ${promptId} not found.`);
  }
  return prompt.substring(prompt.indexOf(']') + 1).trim();
}

configure({
  plugins: [
    googleAI({ apiKey: process.env.GOOGLE_API_KEY }),
    perplexity({ apiKey: process.env.PERPLEXITY_API_KEY }),
    anthropic({ apiKey: process.env.ANTHROPIC_API_KEY }),
  ],
  logLevel: 'debug',
  enableTracing: true,
});

export const getTodayTopic = defineFlow(
  {
    name: 'getTodayTopic',
    inputSchema: z.void(),
    outputSchema: z.string(),
  },
  async () => {
    const prompt = await getPrompt('P-01: [CHANNEL MANAGER]');

    const llmResponse = await run('call-perplexity', () =>
      perplexity.generate({
        model: 'llama-3-sonar-large-32k-online',
        prompt,
        output: {
          format: 'text'
        }
      })
    );

    const topic = llmResponse.text();
    // Simplified parsing for the topic.
    const match = topic.match(/HIGH PRIORITY.*\n1\. \[(.+)\]/);
    return match ? match[1] : 'No topic found';
  }
);

export const generateStoryboard = defineFlow(
  {
    name: 'generateStoryboard',
    inputSchema: z.object({ topic: z.string(), sceneCount: z.number() }),
    outputSchema: z.any(), // Should be a Zod schema for the Storyboard model
  },
  async ({ topic, sceneCount }) => {
    await dbConnect();

    const scriptWriterPrompt = await getPrompt('P-02: [SCRIPT WRITER]');
    const sceneDesignerPrompt = await getPrompt('P-03: [SCENE/STUDIO DESIGNER]');

    // Step 1: Call Anthropic API to get the script
    const scriptResponse = await run('call-anthropic', () =>
      anthropic.generate({
        model: 'claude-3-haiku-20240307',
        prompt: `${scriptWriterPrompt}\n\nTopic: ${topic}\nScene Count: ${sceneCount}`,
        output: {
            format: 'text'
        }
      })
    );
    const script = scriptResponse.text();

    // Step 2: Call Gemini API to get the structured JSON
    const jsonResponse = await run('call-gemini', () =>
        googleAI.generate({
            model: 'gemini-1.5-flash',
            prompt: `${sceneDesignerPrompt}\n\nScript:\n${script}`,
            output: {
                format: 'json'
            }
        })
    );
    const storyboardData = jsonResponse.json();


    // Step 3: Save to MongoDB
    const newStoryboard = new Storyboard({
      storyboardId: uuidv4(),
      userId: null, // This will be assigned to a user later
      title: topic,
      description: script,
      status: 'draft',
    });

    await newStoryboard.save();

    // This is a simplified representation. In a real scenario, you would parse the JSON and create Scene and Shot objects as well.
    const scenes = storyboardData.scenes.map(sceneData => {
      const newScene = new Scene({
        sceneId: uuidv4(),
        storyboardId: newStoryboard._id,
        sceneNumber: sceneData.sceneNumber,
        title: sceneData.title,
        description: sceneData.description,
      });
      newScene.save();
      return newScene;
    });


    return newStoryboard;
  }
);


export const generateSceneImage = defineFlow(
    {
      name: 'generateSceneImage',
      inputSchema: z.object({ sceneId: z.string() }),
      outputSchema: z.string(),
    },
    async ({ sceneId }) => {
      await dbConnect();

      const scene = await Scene.findOne({ sceneId });
      if (!scene) {
        throw new Error('Scene not found');
      }

      const storyboard = await Storyboard.findById(scene.storyboardId);
      if (!storyboard) {
          throw new Error('Storyboard not found');
      }

      // This is a placeholder for the actual prompt generation logic
      const prompt = `Create an image for the following scene: ${scene.description}`;


      const imageResponse = await run('call-google-image', () =>
        googleAI.generate({
          model: 'gemini-1.5-flash',
          prompt: prompt,
          output: {
              format: 'text' // Assuming the API returns a URL in text format
          }
        })
      );
      const imageUrl = imageResponse.text();

      // In a real implementation, you would save this to an Image model and associate it with a Shot.
      // For now, let's just update the scene with the image URL.
      scene.imageUrl = imageUrl;
      await scene.save();


      return imageUrl;
    }
  );
