import { useState } from 'react';

interface StaticPhotoTileProps {
  src: string;
  alt: string;
}

export function StaticPhotoTile({ src, alt }: StaticPhotoTileProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-32 bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl flex items-center justify-center">
        <span className="text-2xl">💖</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-32 object-cover rounded-xl"
      onError={() => setHasError(true)}
    />
  );
}
