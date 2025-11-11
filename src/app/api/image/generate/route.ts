import { NextResponse } from 'next/server';
import { generateSceneImage } from '@/lib/genkit';

export async function POST(request: Request) {
  try {
    const { sceneId } = await request.json();
    const imageUrl = await generateSceneImage({ sceneId });
    return NextResponse.json({ imageUrl });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}