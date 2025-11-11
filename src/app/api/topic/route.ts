import { NextResponse } from 'next/server';
import { getTodayTopic } from '@/lib/genkit';

export async function GET() {
  try {
    const topic = await getTodayTopic();
    return NextResponse.json({ topic });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}