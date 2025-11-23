"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    // Direct DOM manipulation for instant cursor response
    const moveCursor = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      // Instant cursor update
      gsap.set(cursor, {
        left: x,
        top: y,
      });

      // Smooth follower with delay
      gsap.to(follower, {
        left: x,
        top: y,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = () => {
      gsap.to([cursor, follower], {
        scale: 1.5,
        duration: 0.3,
        ease: "back.out(1.7)",
      });
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, follower], {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Add event listeners
    window.addEventListener("mousemove", moveCursor, { passive: true });

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll("a, button, input, textarea");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="hidden lg:block fixed w-3 h-3 bg-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ 
          transform: "translate(-50%, -50%) translateZ(0)",
          willChange: "transform",
          backfaceVisibility: "hidden"
        }}
      />
      <div
        ref={followerRef}
        className="hidden lg:block fixed w-8 h-8 border-2 border-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ 
          transform: "translate(-50%, -50%) translateZ(0)",
          willChange: "transform",
          backfaceVisibility: "hidden"
        }}
      />
    </>
  );
}
