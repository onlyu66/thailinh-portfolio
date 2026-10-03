"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import { useEffect, useState } from "react";

export default function Typewriter() {
  const { lang } = useLanguage();
  const [text, setText] = useState("");

  const words = lang === "en" ? [
    "Frontend Developer (React.js / Next.js)",
    "Growing into Fullstack (Java / Spring Boot)",
    "Rich-Text Editor & Stripe Payment Specialist",
    "AI Vibe-Coder x Clean Architecture",
  ] : [
    "Frontend Developer (React.js / Next.js)",
    "Định hướng Fullstack (Java / Spring Boot)",
    "Rich-Text Editor & Stripe Payment Specialist",
    "AI Vibe-Coder x Clean Architecture",
  ];

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      const currentWord = words[wordIndex] || words[0];

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
          wordIndex = (wordIndex + 1) % words.length;
        }
        timer = setTimeout(tick, 40);
      }
    }

    timer = setTimeout(tick, 80);
    return () => clearTimeout(timer);
  }, [lang]);

  return (
    <div className="font-mono text-sm sm:text-xl text-cyan-600 dark:text-brand-cyan min-h-[32px] flex items-center font-bold flex-wrap">
      <span>{text}</span>
      <span className="animate-pulse">|</span>
    </div>
  );
}
