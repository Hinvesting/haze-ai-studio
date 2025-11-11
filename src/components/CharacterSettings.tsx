"use client";

import { useState } from 'react';

export default function CharacterSettings() {
  const [hazeImage, setHazeImage] = useState<string | null>(null);
  const [francisImage, setFrancisImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, character: 'haze' | 'francis') => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    try {
      const response = await fetch(`/api/upload?filename=${file.name}`, {
        method: 'POST',
        body: file,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'File upload failed');
      }

      const { url } = await response.json();
      if (character === 'haze') {
        setHazeImage(url);
      } else {
        setFrancisImage(url);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Character & Image Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">HAZE Reference Image</label>
          <input
            type="file"
            onChange={(e) => handleFileUpload(e, 'haze')}
            className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
          />
          {hazeImage && <img src={hazeImage} alt="HAZE reference" className="mt-4 rounded-lg w-full" />}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">FRANCIS Reference Image</label>
          <input
            type="file"
            onChange={(e) => handleFileUpload(e, 'francis')}
            className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
          />
          {francisImage && <img src={francisImage} alt="FRANCIS reference" className="mt-4 rounded-lg w-full" />}
        </div>
        {uploading && <p className="text-blue-400">Uploading...</p>}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}
