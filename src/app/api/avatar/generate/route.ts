import { NextResponse } from 'next/server';
import { googleAI } from '@genkit-ai/google-genai';
import { run } from '@genkit-ai/core';
import { readFileSync } from 'fs';

// Helper function to read prompts from markdown files
async function getPrompt(promptId: string): Promise<string> {
    const content = readFileSync('llm-prompts.md', 'utf-8');
    const prompts = content.split('##');
    const prompt = prompts.find(p => p.trim().startsWith(promptId));
    if (!prompt) {
        throw new Error(`Prompt with ID ${promptId} not found.`);
    }
    return prompt.substring(prompt.indexOf(']') + 1).trim();
}

export async function POST(request: Request) {
    try {
        const { prompt } = await request.json();
        const stylingPrompt = await getPrompt('P-03: [SCENE/STUDIO DESIGNER]');

        const imageResponse = await run('call-google-avatar', () =>
            googleAI.model('gemini-1.5-flash').generate({
                prompt: `${stylingPrompt}\n\nCreate an avatar with the following description: ${prompt}`,
                output: {
                    format: 'text'
                }
            })
        );

        const imageUrl = imageResponse.text();

        return NextResponse.json({ imageUrl });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
