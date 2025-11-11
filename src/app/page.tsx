"use client";

import { useState } from 'react';
import IdeaPhase from '@/components/IdeaPhase';
import CharacterSettings from '@/components/CharacterSettings';
import StoryboardGrid from '@/components/StoryboardGrid';
import FinalPackage from '@/components/FinalPackage';

export default function Home() {
  const [storyboard, setStoryboard] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            HAZE AI Storyboard Studio
          </h1>
          <p className="text-gray-400 mt-2">Your AI-powered video creation pipeline</p>
        </header>

        {loading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-900 border border-red-700 text-white p-4 rounded-lg mb-6">
            <p className="font-bold">Error:</p>
            <p>{error}</p>
            <button onClick={() => setError(null)} className="mt-2 text-sm font-semibold hover:underline">Dismiss</button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-8">
            <IdeaPhase setStoryboard={setStoryboard} setLoading={setLoading} setError={setError} />
            <CharacterSettings />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
            <StoryboardGrid storyboard={storyboard} setStoryboard={setStoryboard} />
            <FinalPackage />
          </div>
        </div>
      </div>
    </main>
  );
}
