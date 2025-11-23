"use client";

import Image from 'next/image';

interface HeroImageProps {
  src: string;
  alt: string;
}

export default function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <section className="flex justify-center items-center py-12 md:py-16 px-6">
      <div className="w-full max-w-7xl rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={700}
          className="w-full h-auto object-cover rounded-2xl"
          priority
          quality={90}
          loading="eager"
        />
      </div>
    </section>
  );
}
