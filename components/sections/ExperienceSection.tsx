"use client";

import MotionCard from "@/components/MotionCard";
import { ExperienceSkeleton } from "@/components/Skeletons";
import { usePortfolioData } from "@/lib/hooks/usePortfolioData";
import { useLanguage } from "@/providers/LanguageProvider";
import { Briefcase, Check, CheckCircle2, GraduationCap, Target } from "lucide-react";

export default function ExperienceSection() {
  const { data, isLoading } = usePortfolioData();
  const { t } = useLanguage();

  if (isLoading || !data) {
    return <ExperienceSkeleton />;
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      {/* EXPERIENCE & EDUCATION CARD */}
      <MotionCard
        direction="left"
        hoverY={-4}
        className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-brand-card border border-slate-200 dark:border-brand-border backdrop-blur-md space-y-6 shadow-sm hover:border-cyan-500/50 dark:hover:border-brand-cyan/40 transition-colors"
      >
        <div className="space-y-4">
          <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-cyan-600 dark:text-brand-cyan shrink-0" />{" "}
            {t("exp.title")}
          </h3>
          <div className="space-y-6 text-xs">
            {data.experiences.map((exp) => (
              <div
                key={exp.id}
                className={`border-l-2 ${
                  exp.isCurrent
                    ? "border-cyan-600 dark:border-brand-cyan"
                    : "border-slate-300 dark:border-slate-700"
                } pl-3.5 sm:pl-4 space-y-2`}
              >
                <div>
                  <div className="font-bold text-slate-900 dark:text-white text-sm">
                    {exp.role} — {exp.company}
                  </div>
                  {exp.location && (
                    <div className="text-[11px] text-slate-500 font-sans">
                      {exp.location}
                    </div>
                  )}
                  <div className="font-mono text-cyan-600 dark:text-brand-cyan font-semibold pt-0.5">
                    {exp.period}
                  </div>
                </div>

                {exp.description && (
                  <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    {exp.description}
                  </p>
                )}

                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="space-y-1.5 pt-1 text-slate-600 dark:text-slate-300">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-brand-cyan shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* EDUCATION SECTION */}
        {data.education && data.education.length > 0 && (
          <div className="pt-4 border-t border-slate-200 dark:border-brand-border space-y-4">
            <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-purple-600 dark:text-brand-purple shrink-0" />{" "}
              {t("exp.eduTitle")}
            </h3>
            <div className="space-y-3 text-xs">
              {data.education.map((edu) => (
                <div
                  key={edu.id}
                  className="border-l-2 border-purple-500 dark:border-brand-purple/60 pl-3.5 sm:pl-4 space-y-1"
                >
                  <div className="font-bold text-slate-900 dark:text-white text-sm">
                    {edu.degree}
                  </div>
                  <div className="text-slate-700 dark:text-slate-300 font-medium">
                    {edu.school}
                  </div>
                  <div className="font-mono text-slate-500">{edu.period}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </MotionCard>

      {/* COMMITMENTS & CAREER GOALS CARD */}
      <MotionCard
        direction="right"
        hoverY={-4}
        className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-brand-card border border-slate-200 dark:border-brand-border backdrop-blur-md space-y-6 shadow-sm hover:border-pink-500/50 dark:hover:border-brand-pink/40 transition-colors"
      >
        <div className="space-y-4">
          <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg flex items-center gap-2">
            <Target className="w-5 h-5 text-pink-600 dark:text-brand-pink shrink-0" />{" "}
            {t("exp.commitTitle")}
          </h3>
          <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-3 leading-relaxed">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-pink-600 dark:text-brand-pink shrink-0 mt-0.5" />
              <span>
                <strong>{t("exp.commit1Title")}</strong> {t("exp.commit1Desc")}
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-pink-600 dark:text-brand-pink shrink-0 mt-0.5" />
              <span>
                <strong>{t("exp.commit2Title")}</strong> {t("exp.commit2Desc")}
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-pink-600 dark:text-brand-pink shrink-0 mt-0.5" />
              <span>
                <strong>{t("exp.commit3Title")}</strong> {t("exp.commit3Desc")}
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-pink-600 dark:text-brand-pink shrink-0 mt-0.5" />
              <span>
                <strong>{t("exp.commit4Title")}</strong> {t("exp.commit4Desc")}
              </span>
            </li>
          </ul>
        </div>
      </MotionCard>
    </section>
  );
}
