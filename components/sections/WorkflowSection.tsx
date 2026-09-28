"use client";

import FadeIn from "@/components/FadeIn";
import MotionCard from "@/components/MotionCard";
import { WorkflowSkeleton } from "@/components/Skeletons";
import { usePortfolioData } from "@/lib/hooks/usePortfolioData";

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

  if (isLoading || !data) {
    return <WorkflowSkeleton />;
  }

  return (
    <FadeIn
      direction="up"
      duration={0.6}
      className="p-8 sm:p-12 rounded-3xl bg-slate-100 dark:bg-gradient-to-b dark:from-brand-card dark:to-slate-950 border border-slate-200 dark:border-brand-border backdrop-blur-xl relative overflow-hidden space-y-8 shadow-sm"
    >
      <div id="workflow" className="max-w-2xl space-y-3">
        <span className="text-xs font-mono font-bold text-pink-600 dark:text-brand-pink uppercase tracking-widest">
          // AI-POWERED WORKFLOW
        </span>
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Vibe-Coding Có Kiểm Soát (Zero-Blind Merge)
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          Tôi sử dụng các AI Agent thế hệ mới (Cursor, GitHub Copilot, Claude)
          như những trợ lý lập trình. Luôn nắm vai trò Tech Lead để review,
          tái cấu trúc và làm chủ kiến trúc toàn bộ codebase.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {data.workflow.map((step, index) => {
          const colorStyle =
            workflowColorMap[step.color] || workflowColorMap.cyan;

          return (
            <MotionCard
              key={step.id}
              hoverY={-4}
              delay={0.1 * index}
              className={`p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-3 relative shadow-sm ${colorStyle.hover} transition-colors`}
            >
              <div className={`font-mono text-xl font-bold ${colorStyle.num}`}>
                {step.stepNumber}
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white">
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
