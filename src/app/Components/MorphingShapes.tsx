"use client";

import { useEffect, useRef } from "react";

export default function MorphingShapes() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const paths = svgRef.current.querySelectorAll<SVGPathElement>("path");
    
    const shapes = [
      // Circle-ish
      "M50,10 Q90,10 90,50 Q90,90 50,90 Q10,90 10,50 Q10,10 50,10",
      // Square-ish
      "M20,20 L80,20 L80,80 L20,80 Z",
      // Star-ish
      "M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z",
      // Diamond
      "M50,10 L90,50 L50,90 L10,50 Z",
      // Organic blob
      "M30,50 Q10,30 30,20 Q50,10 70,20 Q90,30 70,50 Q90,70 70,80 Q50,90 30,80 Q10,70 30,50",
    ];

    let currentShapeIndex = 0;

    function morphShape() {
      paths.forEach((path, index) => {
        const nextIndex = (currentShapeIndex + index) % shapes.length;
        path.setAttribute("d", shapes[nextIndex]);
      });

      currentShapeIndex = (currentShapeIndex + 1) % shapes.length;
    }

    const interval = setInterval(morphShape, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        ref={svgRef}
        className="absolute w-full h-full opacity-5 dark:opacity-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        <path
          d="M50,10 Q90,10 90,50 Q90,90 50,90 Q10,90 10,50 Q10,10 50,10"
          fill="url(#grad1)"
          style={{
            transition: "d 4s cubic-bezier(0.45, 0.05, 0.55, 0.95)",
          }}
        />
        
        <path
          d="M30,50 Q10,30 30,20 Q50,10 70,20 Q90,30 70,50 Q90,70 70,80 Q50,90 30,80 Q10,70 30,50"
          fill="url(#grad2)"
          opacity="0.5"
          style={{
            transition: "d 4s cubic-bezier(0.45, 0.05, 0.55, 0.95)",
            transform: "scale(0.7)",
            transformOrigin: "center",
          }}
        />
      </svg>
    </div>
  );
}
