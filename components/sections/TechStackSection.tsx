"use client";

import FadeIn from "@/components/FadeIn";
import MotionCard from "@/components/MotionCard";
import { TechStackSkeleton } from "@/components/Skeletons";
import { usePortfolioData } from "@/lib/hooks/usePortfolioData";
import { Cpu, Layers, Network, Palette } from "lucide-react";

const iconMap = {
  Layers,
  Palette,
  Cpu,
  Network,
};

const colorMap = {
  cyan: {
    bg: "bg-cyan-50 dark:bg-brand-cyan/10 text-cyan-600 dark:text-brand-cyan",
    border: "hover:border-cyan-500 dark:hover:border-brand-cyan/50",
    shadow: "dark:hover:shadow-[0_0_25px_rgba(0,240,255,0.15)]",
  },
  purple: {
    bg: "bg-purple-50 dark:bg-brand-purple/10 text-purple-600 dark:text-brand-purple",
    border: "hover:border-purple-500 dark:hover:border-brand-purple/50",
    shadow: "dark:hover:shadow-[0_0_25px_rgba(180,0,255,0.15)]",
  },
  pink: {
    bg: "bg-pink-50 dark:bg-brand-pink/10 text-pink-600 dark:text-brand-pink",
    border: "hover:border-pink-500 dark:hover:border-brand-pink/50",
    shadow: "dark:hover:shadow-[0_0_25px_rgba(255,0,150,0.15)]",
  },
  emerald: {
    bg: "bg-emerald-50 dark:bg-brand-emerald/10 text-emerald-600 dark:text-brand-emerald",
    border: "hover:border-emerald-500 dark:hover:border-brand-emerald/50",
    shadow: "dark:hover:shadow-[0_0_25px_rgba(0,255,150,0.15)]",
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
          // TECH STACK & SYSTEM
        </h2>
        <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Công Nghệ & Chuẩn Mực Phát Triển
        </p>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.techStack.map((item, index) => {
          const IconComponent = iconMap[item.iconName] || Layers;
          const style = colorMap[item.categoryColor] || colorMap.cyan;

          return (
            <MotionCard
              key={item.id}
              delay={0.1 * (index + 1)}
              hoverScale={1.02}
              className={`p-6 rounded-2xl bg-white dark:bg-brand-card border border-slate-200 dark:border-brand-border ${style.border} transition-colors duration-300 backdrop-blur-md space-y-3 shadow-sm hover:shadow-xl ${style.shadow}`}
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
            </MotionCard>
          );
        })}
      </div>
    </section>
  );
}
