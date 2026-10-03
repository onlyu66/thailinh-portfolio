"use client";

import FadeIn from "@/components/FadeIn";
import MotionCard from "@/components/MotionCard";
import { TechStackSkeleton } from "@/components/Skeletons";
import { usePortfolioData } from "@/lib/hooks/usePortfolioData";
import { BookOpen, Cpu, Database, Layers, Network, Palette, Terminal } from "lucide-react";

const iconMap = {
  Layers,
  Palette,
  Cpu,
  Network,
  Database,
  Terminal,
};

const colorMap = {
  cyan: {
    bg: "bg-cyan-50 dark:bg-brand-cyan/10 text-cyan-600 dark:text-brand-cyan",
    border: "hover:border-cyan-500 dark:hover:border-brand-cyan/50",
    shadow: "dark:hover:shadow-[0_0_25px_rgba(0,240,255,0.15)]",
    badge: "bg-cyan-100 dark:bg-cyan-950/60 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/50",
  },
  purple: {
    bg: "bg-purple-50 dark:bg-brand-purple/10 text-purple-600 dark:text-brand-purple",
    border: "hover:border-purple-500 dark:hover:border-brand-purple/50",
    shadow: "dark:hover:shadow-[0_0_25px_rgba(180,0,255,0.15)]",
    badge: "bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800/50",
  },
  pink: {
    bg: "bg-pink-50 dark:bg-brand-pink/10 text-pink-600 dark:text-brand-pink",
    border: "hover:border-pink-500 dark:hover:border-brand-pink/50",
    shadow: "dark:hover:shadow-[0_0_25px_rgba(255,0,150,0.15)]",
    badge: "bg-pink-100 dark:bg-pink-950/60 text-pink-800 dark:text-pink-300 border-pink-200 dark:border-pink-800/50",
  },
  emerald: {
    bg: "bg-emerald-50 dark:bg-brand-emerald/10 text-emerald-600 dark:text-brand-emerald",
    border: "hover:border-emerald-500 dark:hover:border-brand-emerald/50",
    shadow: "dark:hover:shadow-[0_0_25px_rgba(0,255,150,0.15)]",
    badge: "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/50",
  },
};

export default function TechStackSection() {
  const { data, isLoading } = usePortfolioData();

  if (isLoading || !data) {
    return <TechStackSkeleton />;
  }

  return (
    <section id="stack" className="space-y-8">
      <FadeIn className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-xs font-mono font-bold text-cyan-600 dark:text-brand-cyan uppercase tracking-widest">
          // TECH STACK & SKILLS
        </h2>
        <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Kỹ Năng Kỹ Thuật & Công Nghệ Thực Chiến
        </p>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.techStack.map((item, index) => {
          const IconComponent = iconMap[item.iconName as keyof typeof iconMap] || Layers;
          const style = colorMap[item.categoryColor] || colorMap.cyan;

          return (
            <MotionCard
              key={item.id}
              delay={0.1 * (index + 1)}
              hoverScale={1.02}
              className={`p-6 rounded-2xl bg-white dark:bg-brand-card border border-slate-200 dark:border-brand-border ${style.border} transition-colors duration-300 backdrop-blur-md space-y-4 shadow-sm hover:shadow-xl ${style.shadow}`}
            >
              <div className={`p-3 w-fit rounded-xl ${style.bg}`}>
                <IconComponent className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                {item.description}
              </p>

              {item.skills && item.skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[11px]">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-2 py-0.5 rounded border ${style.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </MotionCard>
          );
        })}
      </div>

      {/* Currently Learning Banner */}
      {data.currentlyLearning && data.currentlyLearning.length > 0 && (
        <FadeIn delay={0.4}>
          <div className="p-6 rounded-2xl bg-slate-900 text-white dark:bg-slate-900/90 border border-slate-800 shadow-md backdrop-blur-md space-y-3">
            <div className="flex items-center gap-2 text-brand-cyan font-mono text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Đang Học Hỏi & Trau Dồi Mở Rộng (Currently Learning)</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              {data.currentlyLearning.map((topic, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 text-cyan-300 border border-slate-700/80 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      )}
    </section>
  );
}
