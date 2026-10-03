"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLang}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-brand-card border border-slate-200 dark:border-brand-border hover:border-slate-400 dark:hover:border-slate-600 text-xs font-mono font-bold text-slate-800 dark:text-slate-200 shadow-sm transition-all backdrop-blur-md"
      aria-label="Toggle language"
    >
      <Globe className="w-3.5 h-3.5 text-cyan-600 dark:text-brand-cyan" />
      <span>{lang === "vi" ? "🇻🇳 VI" : "🇬🇧 EN"}</span>
    </motion.button>
  );
}
