"use client";

import { useState } from 'react';

interface IdeaPhaseProps {
  setStoryboard: (storyboard: any) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export default function IdeaPhase({ setStoryboard, setLoading, setError }: IdeaPhaseProps) {
  const [topic, setTopic] = useState('');
  const [sceneCount, setSceneCount] = useState(3);

  const handleGenerateTopic = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/topic');
      if (!response.ok) {
        throw new Error('Failed to fetch topic');
      }
      const data = await response.json();
      setTopic(data.topic);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateStoryboard = async () => {
    if (!topic) {
      setError('Please generate a topic first.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/storyboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, sceneCount }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate storyboard');
      }
      const data = await response.json();
      setStoryboard(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">1. The Idea Phase</h2>
      <div className="space-y-4">
        <button
          onClick={handleGenerateTopic}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Generate Content for Today
        </button>
        {topic && <p className="text-gray-300 text-center">Topic: <span className="font-semibold text-white">{topic}</span></p>}
        <div>
          <label htmlFor="sceneCount" className="block text-sm font-medium text-gray-300 mb-2">
            Number of Scenes
          </label>
          <input
            type="number"
            id="sceneCount"
            value={sceneCount}
            onChange={(e) => setSceneCount(Number(e.target.value))}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="1"
            max="10"
          />
        </div>
        <button
          onClick={handleGenerateStoryboard}
          disabled={!topic}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Generate Storyboard
        </button>
      </div>
    </div>
  );
}
