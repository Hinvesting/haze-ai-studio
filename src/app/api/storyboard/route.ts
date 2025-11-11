import { NextResponse } from 'next/server';
import { generateStoryboard } from '@/lib/genkit';

export async function POST(request: Request) {
  try {
    const { topic, sceneCount } = await request.json();
    const storyboard = await generateStoryboard({ topic, sceneCount });
    return NextResponse.json(storyboard);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}