"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroImageProps {
  src: string;
  alt: string;
}

export default function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <section className="flex justify-center items-center py-12 md:py-16 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-7xl rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300"
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={700}
          className="w-full h-auto object-cover rounded-2xl"
          priority
        />
      </motion.div>
    </section>
  );
}
