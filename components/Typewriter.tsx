"use client";

import { useEffect, useState } from "react";

const WORDS = [
  "Frontend Engineer",
  "React 18 & Next.js Specialist",
  "AI Vibe-Coder",
  "UI/UX & Performance Enthusiast",
];

export default function Typewriter() {
  const [text, setText] = useState("");

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      const currentWord = WORDS[wordIndex];

      if (!deleting) {
        charIndex++;
        setText(currentWord.slice(0, charIndex));
        if (charIndex === currentWord.length) {
          timer = setTimeout(() => {
            deleting = true;
            tick();
          }, 2000);
          return;
        }
        timer = setTimeout(tick, 80);
      } else {
        charIndex--;
        setText(currentWord.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % WORDS.length;
        }
        timer = setTimeout(tick, 40);
      }
    }

    timer = setTimeout(tick, 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-mono text-sm sm:text-xl text-cyan-600 dark:text-brand-cyan min-h-[32px] flex items-center font-bold flex-wrap">
      <span>{text}</span>
      <span className="animate-pulse">|</span>
    </div>
  );
}
