import { NextResponse } from 'next/server';
import { googleAI } from '@genkit-ai/google-genai';
import { run } from '@genkit-ai/core';

export async function POST(request: Request) {
  try {
    const { prompt, previousImageUrl } = await request.json();

    // The Google AI API doesn't directly support providing a previous image URL in the same way some other models do.
    // Instead, we can include the image as part of the prompt. How you do this depends on the model.
    // For multimodal models, you can often provide a list of content blocks, including text and images.
    // As a simple workaround, we can include the URL in the text prompt itself, though this is less effective.

    const imageResponse = await run('call-google-image-next', () =>
        googleAI.generate({
            model: 'gemini-1.5-flash',
            prompt: `${prompt}\n\nReference Image: ${previousImageUrl}`,
            output: {
                format: 'text'
            }
        })
    );

    const imageUrl = imageResponse.text();

    return NextResponse.json({ imageUrl });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
