"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => {
        const isDark = document.documentElement.classList.contains("dark");
        setTheme(isDark ? "light" : "dark");
      }}
      aria-label="Toggle theme"
      className="p-2.5 rounded-xl border border-slate-200 dark:border-brand-border bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 hover:border-cyan-500 dark:hover:border-brand-cyan transition-all backdrop-blur-md shadow-sm"
    >
      <Sun className="w-4 h-4 text-amber-500 hidden dark:block" />
      <Moon className="w-4 h-4 text-slate-700 block dark:hidden" />
    </button>
  );
}
