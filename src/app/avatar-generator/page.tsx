'use client';

import { useState } from 'react';

export default function AvatarGenerator() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateAvatar = async () => {
    setLoading(true);
    setError(null);
    setImageUrl('');

    try {
      const response = await fetch('/api/avatar/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate avatar');
      }

      const data = await response.json();
      setImageUrl(data.imageUrl);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600">
            Avatar Generator
          </h1>
          <p className="text-gray-400 mt-2">Describe the avatar you want to create</p>
        </header>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg">
          <div className="space-y-4">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., a futuristic robot with glowing blue eyes, set against a cyberpunk city skyline"
              className="w-full h-32 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleGenerateAvatar}
              disabled={loading || !prompt.trim()}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              {loading ? 'Generating...' : 'Generate Avatar'}
            </button>
          </div>
        </div>

        {loading && (
          <div className="flex justify-center mt-8">
            <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-teal-500"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-900 border border-red-700 text-white p-4 rounded-lg mt-8">
            <p className="font-bold">Error:</p>
            <p>{error}</p>
          </div>
        )}

        {imageUrl && (
          <div className="mt-8 bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Generated Avatar</h2>
            <img src={imageUrl} alt="Generated Avatar" className="rounded-lg w-full" />
          </div>
        )}
      </div>
    </main>
  );
}
