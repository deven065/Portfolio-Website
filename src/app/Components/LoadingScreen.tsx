"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const text = textRef.current;

    if (!loader || !text) return;

    // Animate loader
    const tl = gsap.timeline();

    // Pulsing animation
    gsap.to(loader, {
      scale: 1.2,
      opacity: 0.8,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    // Text reveal
    gsap.fromTo(
      text,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );

    // Simulate loading completion
    const timer = setTimeout(() => {
      // Fade out animation
      tl.to([loader, text], {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        ease: "power2.in",
      }).to(
        ".loading-screen",
        {
          opacity: 0,
          duration: 0.3,
          onComplete: () => setIsLoading(false),
        },
        "-=0.2"
      );
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-screen fixed inset-0 z-[10000] bg-blue-700 flex items-center justify-center">
      <div className="text-center">
        <div
          ref={loaderRef}
          className="w-20 h-20 border-4 border-white border-t-transparent rounded-full mx-auto mb-6"
          style={{
            animation: "spin 1s linear infinite",
          }}
        />
        <div ref={textRef} className="text-white text-2xl font-bold">
          Deven Digital Labs
        </div>
      </div>
      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
