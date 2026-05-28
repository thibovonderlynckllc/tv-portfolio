'use client';
import { useState } from 'react';
import Image from 'next/image';

interface ProjectImageProps {
  src: string;
  alt: string;
  sizes: string;
}

export default function ProjectImage({ src, alt, sizes }: ProjectImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full rounded-xl overflow-hidden">
      <div
        className={`absolute inset-0 z-10 rounded-xl transition-opacity duration-700 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="w-full h-full shimmer-bg" />
      </div>
      <Image
        src={src}
        alt={alt}
        className="w-full rounded-xl"
        width={1200}
        height={1600}
        sizes={sizes}
        priority
        quality={85}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
