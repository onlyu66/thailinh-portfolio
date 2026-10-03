"use client";

import LanguageToggle from "@/components/LanguageToggle";
import ThemeToggle from "@/components/ThemeToggle";
import { useLanguage } from "@/providers/LanguageProvider";
import { Code2, Cpu, Menu, User, X, Zap } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-50/80 dark:bg-brand-bg/70 border-b border-slate-200 dark:border-brand-border transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <a
            href="#"
            className="font-mono text-base md:text-lg font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 dark:from-brand-cyan dark:to-brand-purple z-50 relative shrink-0"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            &lt;LINH.DEV /&gt;
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs text-slate-600 dark:text-slate-400">
            <a
              href="#about"
              className="hover:text-cyan-600 dark:hover:text-brand-cyan transition-colors flex items-center gap-1"
            >
              <User className="w-3.5 h-3.5" /> {t("nav.about")}
            </a>
            <a
              href="#stack"
              className="hover:text-cyan-600 dark:hover:text-brand-cyan transition-colors flex items-center gap-1"
            >
              <Cpu className="w-3.5 h-3.5" /> {t("nav.stack")}
            </a>
            <a
              href="#workflow"
              className="hover:text-cyan-600 dark:hover:text-brand-cyan transition-colors flex items-center gap-1"
            >
              <Zap className="w-3.5 h-3.5" /> {t("nav.workflow")}
            </a>
            <a
              href="#projects"
              className="hover:text-cyan-600 dark:hover:text-brand-cyan transition-colors flex items-center gap-1"
            >
              <Code2 className="w-3.5 h-3.5" /> {t("nav.projects")}
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />

            <a
              href="#contact"
              className="relative group p-0.5 rounded-xl font-mono text-xs font-bold overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-pink group-hover:opacity-100 opacity-70 transition-opacity animate-gradient-x" />
              <span className="relative block px-4 py-2.5 rounded-[10px] bg-white dark:bg-brand-bg text-slate-900 dark:text-white group-hover:bg-transparent group-hover:text-white transition-colors">
                {t("nav.contact")}
              </span>
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="flex items-center gap-3 md:hidden z-50 relative">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-brand-cyan transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAV OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-lg md:hidden border-t border-slate-200 dark:border-brand-border overflow-y-auto transition-all">
          <nav className="flex flex-col p-6 gap-6 font-mono text-sm text-slate-700 dark:text-slate-300">
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-900 transition-colors"
            >
              <User className="w-5 h-5 text-cyan-600 dark:text-brand-cyan" /> 
              <span className="font-bold">{t("nav.about")}</span>
            </a>
            <a
              href="#stack"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-900 transition-colors"
            >
              <Cpu className="w-5 h-5 text-purple-600 dark:text-brand-purple" /> 
              <span className="font-bold">{t("nav.stack")}</span>
            </a>
            <a
              href="#workflow"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-900 transition-colors"
            >
              <Zap className="w-5 h-5 text-pink-600 dark:text-brand-pink" /> 
              <span className="font-bold">{t("nav.workflow")}</span>
            </a>
            <a
              href="#projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-900 transition-colors"
            >
              <Code2 className="w-5 h-5 text-emerald-600 dark:text-brand-emerald" /> 
              <span className="font-bold">{t("nav.projects")}</span>
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 text-center py-4 rounded-xl bg-slate-900 text-white dark:bg-brand-cyan dark:text-black font-bold shadow-md"
            >
              {t("nav.contact")}
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
