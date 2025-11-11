"use client";

import { useState, useEffect } from 'react';

interface ImageEditModalProps {
  scene: any;
  storyboard: any;
  setStoryboard: (storyboard: any) => void;
  onClose: () => void;
}

export default function ImageEditModal({ scene, storyboard, setStoryboard, onClose }: ImageEditModalProps) {
  const [prompt, setPrompt] = useState(scene.description || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setPrompt(scene.description || '');
  }, [scene]);

  const handleRegenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      // Note: The prompt isn't directly used by this API route in the backend setup, 
      // it uses the sceneId to find the original prompt. 
      // A potential improvement would be to allow overriding the prompt here.
      const response = await fetch('/api/image/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sceneId: scene.id }), // Sending potentially edited prompt is not supported by the current backend
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to regenerate image');
      }

      const data = await response.json();

      const updatedScenes = storyboard.scenes.map((s: any) =>
        s.id === scene.id ? { ...s, imageUrl: data.imageUrl, description: prompt } : s
      );
      setStoryboard({ ...storyboard, scenes: updatedScenes });
      onClose();

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateNext = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/image/next', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, previousImageUrl: scene.imageUrl }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate next image');
      }

      const data = await response.json();
      const nextSceneIndex = storyboard.scenes.findIndex((s: any) => s.id === scene.id) + 1;

      if (nextSceneIndex < storyboard.scenes.length) {
        const updatedScenes = [...storyboard.scenes];
        updatedScenes[nextSceneIndex].imageUrl = data.imageUrl;
        setStoryboard({ ...storyboard, scenes: updatedScenes });
      }
      onClose();

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-white mb-4">Edit Scene</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src={scene.imageUrl} alt={`Scene ${scene.sceneNumber}`} className="rounded-lg w-full mb-4" />
          <div className='flex flex-col justify-between'>
            <div>
              <label htmlFor="prompt" className="block text-sm font-medium text-gray-300 mb-2">Prompt</label>
              <textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full h-32 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2 mt-4">
                <button
                    onClick={handleRegenerate}
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 disabled:bg-gray-500"
                >
                    {loading ? 'Regenerating...' : 'Regenerate'}
                </button>
                <button
                    onClick={handleGenerateNext}
                    disabled={loading || !scene.imageUrl}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 disabled:bg-gray-500"
                >
                    {loading ? 'Generating...' : 'Generate Next Image'}
                </button>
            </div>
          </div>
        </div>
        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
        <button onClick={onClose} className="mt-6 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
          Close
        </button>
      </div>
    </div>
  );
}
