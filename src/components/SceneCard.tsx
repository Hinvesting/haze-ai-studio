"use client";

import { useState } from 'react';
import ImageEditModal from './ImageEditModal';

interface SceneCardProps {
  scene: any;
  setStoryboard: (storyboard: any) => void;
  storyboard: any;
}

export default function SceneCard({ scene, setStoryboard, storyboard }: SceneCardProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGenerateImage = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/image/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sceneId: scene.id }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate image');
      }

      const data = await response.json();

      const updatedScenes = storyboard.scenes.map((s: any) =>
        s.id === scene.id ? { ...s, imageUrl: data.imageUrl } : s
      );
      setStoryboard({ ...storyboard, scenes: updatedScenes });

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-md flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Scene {scene.sceneNumber}</h3>
          {scene.imageUrl ? (
            <img
              src={scene.imageUrl}
              alt={`Scene ${scene.sceneNumber}`}
              className="rounded-lg w-full mb-4 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setIsModalOpen(true)}
            />
          ) : (
            <div className="w-full h-48 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
              <p className="text-gray-400">No Image</p>
            </div>
          )}
          <p className="text-sm text-gray-300"><span className="font-bold">Visuals:</span> {scene.description}</p>
          <p className="text-sm text-gray-300 mt-2"><span className="font-bold">Dialogue:</span> {scene.dialogue || 'No dialogue'}</p>
        </div>
        <button
          onClick={handleGenerateImage}
          disabled={loading}
          className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 disabled:bg-gray-500"
        >
          {loading ? 'Generating...' : 'Generate Image (Gemini Flash)'}
        </button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
      {isModalOpen && (
        <ImageEditModal
          scene={scene}
          storyboard={storyboard}
          setStoryboard={setStoryboard}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
