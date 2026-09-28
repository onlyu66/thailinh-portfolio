"use client";

import MotionCard from "@/components/MotionCard";
import { ExperienceSkeleton } from "@/components/Skeletons";
import { usePortfolioData } from "@/lib/hooks/usePortfolioData";
import { Briefcase, CheckCircle2, Target } from "lucide-react";

export default function ExperienceSection() {
  const { data, isLoading } = usePortfolioData();

  if (isLoading || !data) {
    return <ExperienceSkeleton />;
  }

  return (
    <section className="grid sm:grid-cols-2 gap-8">
      <MotionCard
        direction="left"
        hoverY={-4}
        className="p-6 rounded-2xl bg-white dark:bg-brand-card border border-slate-200 dark:border-brand-border backdrop-blur-md space-y-4 shadow-sm hover:border-cyan-500/50 dark:hover:border-brand-cyan/40 transition-colors"
      >
        <h3 className="font-bold text-slate-900 dark:text-white text-lg flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-cyan-600 dark:text-brand-cyan" />{" "}
          Kinh Nghiệm Làm Việc
        </h3>
        <div className="space-y-4 text-xs">
          {data.experiences.map((exp) => (
            <div
              key={exp.id}
              className={`border-l-2 ${
                exp.isCurrent
                  ? "border-cyan-600 dark:border-brand-cyan"
                  : "border-slate-300 dark:border-slate-700"
              } pl-4 space-y-1`}
            >
              <div className="font-bold text-slate-900 dark:text-white text-sm">
                {exp.role} — {exp.company}
              </div>
              <div className="font-mono text-slate-500">{exp.period}</div>
              {exp.description && (
                <p className="text-slate-600 dark:text-slate-400 pt-1">
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </MotionCard>

      <MotionCard
        direction="right"
        hoverY={-4}
        className="p-6 rounded-2xl bg-white dark:bg-brand-card border border-slate-200 dark:border-brand-border backdrop-blur-md space-y-4 shadow-sm hover:border-pink-500/50 dark:hover:border-brand-pink/40 transition-colors"
      >
        <h3 className="font-bold text-slate-900 dark:text-white text-lg flex items-center gap-2">
          <Target className="w-5 h-5 text-pink-600 dark:text-brand-pink" />{" "}
          Cam Kết Chuyên Môn
        </h3>
        <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-3 leading-relaxed">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-pink-600 dark:text-brand-pink shrink-0 mt-0.5" />
            <span>
              <strong>Ownership Cao:</strong> Coi sản phẩm như của mình, chủ
              động tìm giải pháp tối ưu nhất cho bài toán kinh doanh.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-pink-600 dark:text-brand-pink shrink-0 mt-0.5" />
            <span>
              <strong>Growth Mindset:</strong> Luôn cập nhật công nghệ mới, đặc
              biệt là xu hướng tích hợp AI vào Software Engineering.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-pink-600 dark:text-brand-pink shrink-0 mt-0.5" />
            <span>
              <strong>Linh Hoạt & Chịu Áp Lực:</strong> Thích ứng nhanh với thay
              đổi, sẵn sàng OT tập trung vào các giai đoạn Go-live/Sprint
              Release.
            </span>
          </li>
        </ul>
      </MotionCard>
    </section>
  );
}
