"use client";

import SceneCard from './SceneCard';

interface StoryboardGridProps {
  storyboard: any;
  setStoryboard: (storyboard: any) => void;
}

export default function StoryboardGrid({ storyboard, setStoryboard }: StoryboardGridProps) {
  if (!storyboard || !storyboard.scenes || storyboard.scenes.length === 0) {
    return null;
  }

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">2. The Scriptwriting Phase</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {storyboard.scenes.map((scene: any, index: number) => (
          <SceneCard key={scene.id || index} scene={scene} setStoryboard={setStoryboard} storyboard={storyboard} />
        ))}
      </div>
    </div>
  );
}
