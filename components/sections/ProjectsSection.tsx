"use client";

import FadeIn from "@/components/FadeIn";
import MotionCard from "@/components/MotionCard";
import { ProjectsSkeleton } from "@/components/Skeletons";
import { usePortfolioData } from "@/lib/hooks/usePortfolioData";
import { useLanguage } from "@/providers/LanguageProvider";
import { Check, FolderGit2, Github } from "lucide-react";

const projectColorMap = {
  cyan: {
    badge:
      "text-cyan-700 dark:text-brand-cyan bg-cyan-50 dark:bg-brand-cyan/10 border-cyan-200 dark:border-brand-cyan/20",
    hover: "hover:border-cyan-500/50 dark:hover:border-brand-cyan/50",
    titleHover: "group-hover:text-cyan-600 dark:group-hover:text-brand-cyan",
    icon: "text-cyan-600 dark:text-brand-cyan shrink-0 mt-0.5",
    shadow: "dark:hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]",
  },
  purple: {
    badge:
      "text-purple-700 dark:text-brand-purple bg-purple-50 dark:bg-brand-purple/10 border-purple-200 dark:border-brand-purple/20",
    hover: "hover:border-purple-500/50 dark:hover:border-brand-purple/50",
    titleHover:
      "group-hover:text-purple-600 dark:group-hover:text-brand-purple",
    icon: "text-purple-600 dark:text-brand-purple shrink-0 mt-0.5",
    shadow: "dark:hover:shadow-[0_0_30px_rgba(180,0,255,0.15)]",
  },
  pink: {
    badge:
      "text-pink-700 dark:text-brand-pink bg-pink-50 dark:bg-brand-pink/10 border-pink-200 dark:border-brand-pink/20",
    hover: "hover:border-pink-500/50 dark:hover:border-brand-pink/50",
    titleHover: "group-hover:text-pink-600 dark:group-hover:text-brand-pink",
    icon: "text-pink-600 dark:text-brand-pink shrink-0 mt-0.5",
    shadow: "dark:hover:shadow-[0_0_30px_rgba(255,0,150,0.15)]",
  },
  emerald: {
    badge:
      "text-emerald-700 dark:text-brand-emerald bg-emerald-50 dark:bg-brand-emerald/10 border-emerald-200 dark:border-brand-emerald/20",
    hover: "hover:border-emerald-500/50 dark:hover:border-brand-emerald/50",
    titleHover: "group-hover:text-emerald-600 dark:group-hover:text-brand-emerald",
    icon: "text-emerald-600 dark:text-brand-emerald shrink-0 mt-0.5",
    shadow: "dark:hover:shadow-[0_0_30px_rgba(0,255,150,0.15)]",
  },
};

export default function ProjectsSection() {
  const { data, isLoading } = usePortfolioData();
  const { t } = useLanguage();

  if (isLoading || !data) {
    return <ProjectsSkeleton />;
  }

  return (
    <section id="projects" className="space-y-8">
      <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <h2 className="text-xs font-mono font-bold text-cyan-600 dark:text-brand-cyan uppercase tracking-widest">
            {t("projects.badge")}
          </h2>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
            {t("projects.title")}
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
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span
                  className={`text-xs font-mono px-3 py-1 rounded-full border font-semibold ${style.badge}`}
                >
                  {project.tag}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  {project.period}
                </span>
              </div>

              <div className="space-y-2">
                <h3
                  className={`text-xl font-bold text-slate-900 dark:text-white ${style.titleHover} transition-colors`}
                >
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  {project.description}
                </p>
              </div>

              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-2 font-sans">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className={`w-4 h-4 ${style.icon}`} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between gap-4 pt-3 border-t border-slate-200 dark:border-brand-border">
                <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200/60 dark:border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-brand-cyan transition-colors shrink-0"
                  >
                    <Github className="w-3.5 h-3.5" /> {t("projects.source")}
                  </a>
                )}
              </div>
            </MotionCard>
          );
        })}
      </div>

      {/* OTHER CLIENT PROJECTS */}
      {data.otherProjects && data.otherProjects.length > 0 && (
        <FadeIn delay={0.4}>
          <div className="p-6 rounded-2xl bg-white dark:bg-brand-card border border-slate-200 dark:border-brand-border backdrop-blur-md space-y-3">
            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-mono text-xs font-bold uppercase tracking-wider">
              <FolderGit2 className="w-4 h-4 text-purple-600 dark:text-brand-purple" />
              <span>{t("projects.otherTitle")}</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-xs">
              {t("projects.otherDesc")}
            </p>
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              {data.otherProjects.map((pName, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-bold"
                >
                  ⚡ {pName}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      )}
    </section>
  );
}
