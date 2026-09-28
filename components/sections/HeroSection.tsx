"use client";

import Typewriter from "@/components/Typewriter";
import { usePortfolioData } from "@/lib/hooks/usePortfolioData";
import { motion } from "framer-motion";
import { ArrowRight, Code, Github } from "lucide-react";
import { HeroSkeleton } from "../Skeletons";

export default function HeroSection() {
  const { data, isLoading } = usePortfolioData();

  if (isLoading || !data) {
    return <HeroSkeleton />;
  }

  const { profile } = data;

  return (
    <section id="about" className="grid lg:grid-cols-12 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="lg:col-span-7 space-y-8"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-slate-200 dark:border-brand-border bg-white dark:bg-slate-900/60 backdrop-blur-md shadow-sm max-w-full"
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-emerald" />
          </span>
          <span className="text-xs font-mono text-slate-600 dark:text-slate-300 truncate">
            {profile.status}
          </span>
        </motion.div>

        {/* Headline */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white break-words">
            Xin chào, tôi là <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 dark:from-brand-cyan dark:via-brand-purple dark:to-brand-pink animate-gradient-x">
              {profile.name}
            </span>
          </h1>
          <Typewriter />
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
          {profile.bio}
        </p>

        {/* CTA Buttons & Links */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#projects"
            className="px-6 py-3.5 rounded-xl bg-slate-900 text-white dark:bg-brand-cyan dark:text-black font-bold text-sm hover:opacity-90 transition-all shadow-md dark:shadow-[0_0_25px_rgba(0,240,255,0.3)] flex items-center gap-2"
          >
            Xem Sản Phẩm <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-xl bg-white dark:bg-brand-card border border-slate-200 dark:border-brand-border hover:border-slate-400 dark:hover:border-slate-500 text-slate-800 dark:text-white font-mono text-sm transition-all flex items-center gap-2 backdrop-blur-md shadow-sm"
          >
            <Github className="w-4 h-4" /> GitHub Profile
          </motion.a>
        </div>
      </motion.div>

      {/* IDE / CODE EDITOR PREVIEW */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        whileHover={{ y: -4 }}
        className="lg:col-span-5 min-w-0 w-full max-w-full"
      >
        <div className="rounded-2xl bg-white dark:bg-brand-card border border-slate-200 dark:border-brand-border shadow-xl dark:shadow-2xl overflow-hidden backdrop-blur-xl group hover:border-cyan-500 dark:hover:border-brand-cyan/40 transition-all duration-500 w-full max-w-full">
          {/* Window Header */}
          <div className="bg-slate-100 dark:bg-slate-950/80 px-4 py-3 border-b border-slate-200 dark:border-brand-border flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-900/80 px-3 py-1 rounded-md border border-slate-300 dark:border-slate-800">
              <Code className="w-3 h-3 text-cyan-600 dark:text-brand-cyan" />{" "}
              Engineer.config.ts
            </div>
          </div>

          {/* Code Content */}
          <pre className="p-6 text-slate-800 dark:text-slate-300 font-mono text-xs leading-relaxed overflow-x-auto bg-slate-50/50 dark:bg-transparent w-full max-w-full">
            <span className="text-pink-600 dark:text-brand-pink font-bold">
              export const
            </span>{" "}
            <span className="text-cyan-600 dark:text-brand-cyan font-bold">
              engineerProfile
            </span>{" "}
            = {"{"}
            {"\n"}  name:{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              &apos;Thái Ngọc Linh&apos;
            </span>
            ,{"\n"}  role:{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              &apos;Frontend Engineer&apos;
            </span>
            ,{"\n"}  coreStack: [
            <span className="text-emerald-600 dark:text-emerald-400">
              &apos;React 18&apos;
            </span>
            ,{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              &apos;Next.js&apos;
            </span>
            ,{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              &apos;TypeScript&apos;
            </span>
            ],{"\n"}  uiSystem: [
            <span className="text-emerald-600 dark:text-emerald-400">
              &apos;Tailwind CSS&apos;
            </span>
            ,{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              &apos;Radix UI&apos;
            </span>
            ,{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              &apos;Shadcn&apos;
            </span>
            ],{"\n"}  workflow:{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              &apos;AI Vibe-Coding x Clean Architecture&apos;
            </span>
            ,{"\n"}  codeQuality: {"{"}
            {"\n"}    strictTypeScript:{" "}
            <span className="text-purple-600 dark:text-brand-purple font-bold">
              true
            </span>
            ,{"\n"}    unitTesting:{" "}
            <span className="text-purple-600 dark:text-brand-purple font-bold">
              true
            </span>
            ,{"\n"}    performanceFirst:{" "}
            <span className="text-purple-600 dark:text-brand-purple font-bold">
              true
            </span>
            ,{"\n"}    zeroBlindMerge:{" "}
            <span className="text-purple-600 dark:text-brand-purple font-bold">
              true
            </span>
            ,{"\n"}  {"}"}
            {"\n"}
            {"};"}
          </pre>
        </div>
      </motion.div>
    </section>
  );
}
