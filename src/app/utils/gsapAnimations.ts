import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Magnetic button effect - buttons follow cursor
 */
export const magneticEffect = (element: HTMLElement) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(element, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  element.addEventListener("mousemove", handleMouseMove);
  element.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
};

/**
 * Smooth reveal animation with 3D transforms
 */
export const reveal3D = (element: HTMLElement, options = {}) => {
  const defaults = {
    duration: 1,
    delay: 0,
    start: "top 80%",
    ease: "power3.out",
  };

  const settings = { ...defaults, ...options };

  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 100,
      rotationX: -45,
      transformPerspective: 1000,
    },
    {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: settings.duration,
      delay: settings.delay,
      ease: settings.ease,
      scrollTrigger: {
        trigger: element,
        start: settings.start,
        toggleActions: "play none none none",
      },
    }
  );
};

/**
 * Parallax scroll effect
 */
export const parallaxEffect = (element: HTMLElement, speed = 0.5) => {
  gsap.to(element, {
    y: () => ScrollTrigger.maxScroll(window) * speed,
    ease: "none",
    scrollTrigger: {
      start: 0,
      end: "max",
      invalidateOnRefresh: true,
      scrub: 0,
    },
  });
};

/**
 * Stagger fade in animation
 */
export const staggerFadeIn = (elements: HTMLElement[], options = {}) => {
  const defaults = {
    stagger: 0.1,
    duration: 0.8,
    delay: 0,
    start: "top 80%",
  };

  const settings = { ...defaults, ...options };

  gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      stagger: settings.stagger,
      duration: settings.duration,
      delay: settings.delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elements[0],
        start: settings.start,
        toggleActions: "play none none none",
      },
    }
  );
};

/**
 * Typing effect animation
 */
export const typeWriter = (element: HTMLElement, text: string, speed = 50) => {
  element.innerHTML = "";
  const chars = text.split("");
  
  chars.forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.opacity = "0";
    element.appendChild(span);
  });

  gsap.to(element.children, {
    opacity: 1,
    stagger: speed / 1000,
    ease: "none",
  });
};

/**
 * Smooth scale on scroll
 */
export const scaleOnScroll = (element: HTMLElement, options = {}) => {
  const defaults = {
    scaleFrom: 0.8,
    scaleTo: 1,
    start: "top 80%",
    end: "top 20%",
  };

  const settings = { ...defaults, ...options };

  gsap.fromTo(
    element,
    { scale: settings.scaleFrom },
    {
      scale: settings.scaleTo,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: settings.start,
        end: settings.end,
        scrub: true,
      },
    }
  );
};

/**
 * Rotation animation on hover
 */
export const rotateOnHover = (element: HTMLElement, rotation = 360) => {
  element.addEventListener("mouseenter", () => {
    gsap.to(element, {
      rotation: rotation,
      duration: 0.6,
      ease: "power2.out",
    });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(element, {
      rotation: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  });
};

/**
 * Wave text animation
 */
export const waveText = (element: HTMLElement) => {
  const text = element.textContent || "";
  const chars = text.split("");
  element.innerHTML = "";

  chars.forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.display = "inline-block";
    element.appendChild(span);
  });

  gsap.to(element.children, {
    y: -20,
    stagger: {
      each: 0.05,
      repeat: -1,
      yoyo: true,
    },
    duration: 0.5,
    ease: "sine.inOut",
  });
};

/**
 * Counter animation
 */
export const animateCounter = (
  element: HTMLElement,
  from: number,
  to: number,
  duration = 2,
  options = {}
) => {
  const obj = { val: from };
  
  gsap.to(obj, {
    val: to,
    duration: duration,
    ease: "power2.out",
    onUpdate: function () {
      element.textContent = Math.round(obj.val).toString();
    },
    ...options,
  });
};
