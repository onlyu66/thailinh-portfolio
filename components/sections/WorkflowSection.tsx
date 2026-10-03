"use client";

import FadeIn from "@/components/FadeIn";
import MotionCard from "@/components/MotionCard";
import { WorkflowSkeleton } from "@/components/Skeletons";
import { usePortfolioData } from "@/lib/hooks/usePortfolioData";
import { useLanguage } from "@/providers/LanguageProvider";

const workflowColorMap = {
  cyan: {
    num: "text-cyan-600 dark:text-brand-cyan",
    hover: "hover:border-cyan-500/50 dark:hover:border-brand-cyan/40",
  },
  purple: {
    num: "text-purple-600 dark:text-brand-purple",
    hover: "hover:border-purple-500/50 dark:hover:border-brand-purple/40",
  },
  pink: {
    num: "text-pink-600 dark:text-brand-pink",
    hover: "hover:border-pink-500/50 dark:hover:border-brand-pink/40",
  },
};

export default function WorkflowSection() {
  const { data, isLoading } = usePortfolioData();
  const { t } = useLanguage();

  if (isLoading || !data) {
    return <WorkflowSkeleton />;
  }

  return (
    <FadeIn
      direction="up"
      duration={0.6}
      className="p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl bg-slate-100 dark:bg-gradient-to-b dark:from-brand-card dark:to-slate-950 border border-slate-200 dark:border-brand-border backdrop-blur-xl relative overflow-hidden space-y-6 sm:space-y-8 shadow-sm"
    >
      <div id="workflow" className="max-w-2xl space-y-2.5 sm:space-y-3">
        <span className="text-xs font-mono font-bold text-pink-600 dark:text-brand-pink uppercase tracking-widest">
          {t("workflow.badge")}
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          {t("workflow.title")}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
          {t("workflow.subtitle")}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
        {data.workflow.map((step, index) => {
          const colorStyle =
            workflowColorMap[step.color] || workflowColorMap.cyan;

          return (
            <MotionCard
              key={step.id}
              hoverY={-4}
              delay={0.1 * index}
              className={`p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-3 relative shadow-sm ${colorStyle.hover} transition-colors`}
            >
              <div className={`font-mono text-lg sm:text-xl font-bold ${colorStyle.num}`}>
                {step.stepNumber}
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                {step.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                {step.description}
              </p>
            </MotionCard>
          );
        })}
      </div>
    </FadeIn>
  );
}
