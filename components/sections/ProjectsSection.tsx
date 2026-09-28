"use client";

import FadeIn from "@/components/FadeIn";
import MotionCard from "@/components/MotionCard";
import { ProjectsSkeleton } from "@/components/Skeletons";
import { usePortfolioData } from "@/lib/hooks/usePortfolioData";
import { Check } from "lucide-react";

const projectColorMap = {
  cyan: {
    badge:
      "text-cyan-700 dark:text-brand-cyan bg-cyan-50 dark:bg-brand-cyan/10 border-cyan-200 dark:border-brand-cyan/20",
    hover: "hover:border-cyan-500/50 dark:hover:border-brand-cyan/50",
    titleHover: "group-hover:text-cyan-600 dark:group-hover:text-brand-cyan",
    icon: "text-cyan-600 dark:text-brand-cyan",
    shadow: "dark:hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]",
  },
  purple: {
    badge:
      "text-purple-700 dark:text-brand-purple bg-purple-50 dark:bg-brand-purple/10 border-purple-200 dark:border-brand-purple/20",
    hover: "hover:border-purple-500/50 dark:hover:border-brand-purple/50",
    titleHover:
      "group-hover:text-purple-600 dark:group-hover:text-brand-purple",
    icon: "text-purple-600 dark:text-brand-purple",
    shadow: "dark:hover:shadow-[0_0_30px_rgba(180,0,255,0.15)]",
  },
};

export default function ProjectsSection() {
  const { data, isLoading } = usePortfolioData();

  if (isLoading || !data) {
    return <ProjectsSkeleton />;
  }

  return (
    <section id="projects" className="space-y-8">
      <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <h2 className="text-xs font-mono font-bold text-cyan-600 dark:text-brand-cyan uppercase tracking-widest">
            // PORTFOLIO
          </h2>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Dự Án Thực Chiến Nổi Bật
          </p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-8">
        {data.projects.map((project, index) => {
          const style =
            projectColorMap[project.color] || projectColorMap.cyan;

          return (
            <MotionCard
              key={project.id}
              delay={0.1 * (index + 1)}
              hoverY={-6}
              className={`p-6 rounded-2xl bg-white dark:bg-brand-card border border-slate-200 dark:border-brand-border ${style.hover} transition-colors duration-300 backdrop-blur-md space-y-5 group shadow-sm hover:shadow-xl ${style.shadow}`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-mono px-3 py-1 rounded-full border ${style.badge}`}
                >
                  {project.tag}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  {project.period}
                </span>
              </div>

              <h3
                className={`text-xl font-bold text-slate-900 dark:text-white ${style.titleHover} transition-colors`}
              >
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                {project.description}
              </p>

              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-2 font-sans">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className={`w-4 h-4 ${style.icon}`} />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200 dark:border-brand-border text-xs font-mono text-slate-600 dark:text-slate-400">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-100 dark:bg-slate-900 px-2.5 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </MotionCard>
          );
        })}
      </div>
    </section>
  );
}
