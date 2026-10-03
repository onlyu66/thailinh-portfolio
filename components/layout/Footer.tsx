"use client";

import { usePortfolioData } from "@/lib/hooks/usePortfolioData";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const { data } = usePortfolioData();
  const profile = data?.profile;

  const email = profile?.email || "ngoclinhthai8@gmail.com";
  const phone = profile?.phone || "+84 362 253 173";
  const location = profile?.location || "Hà Nội, Việt Nam";
  const github = profile?.github || "https://github.com/linhtn-dev";
  const linkedin = profile?.linkedin || "https://linkedin.com/in/linhtn-dev";

  return (
    <footer
      id="contact"
      className="border-t border-slate-200 dark:border-brand-border bg-slate-100 dark:bg-slate-950/80 py-16 backdrop-blur-xl transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 text-center space-y-8">
        <div className="max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Hãy Cùng Nhau Xây Dựng Sản Phẩm Tuyệt Vời⚡
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Tôi luôn sẵn sàng tiếp nhận các dự án và cơ hội công việc mới (Frontend / Fullstack Java/Spring Boot).
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 font-mono text-xs">
          <a
            href={`mailto:${email}`}
            className="px-6 py-3.5 rounded-xl bg-slate-900 text-white dark:bg-brand-cyan dark:text-black font-bold hover:opacity-90 transition-all flex items-center gap-2 shadow-sm"
          >
            <Mail className="w-4 h-4" /> {email}
          </a>
          <a
            href={`tel:${phone}`}
            className="px-6 py-3.5 rounded-xl bg-white dark:bg-brand-card border border-slate-200 dark:border-brand-border hover:border-slate-400 dark:hover:border-slate-500 text-slate-800 dark:text-white transition-all flex items-center gap-2 shadow-sm"
          >
            <Phone className="w-4 h-4 text-purple-600 dark:text-brand-purple" /> {phone}
          </a>
          <span className="px-6 py-3.5 rounded-xl bg-white dark:bg-brand-card border border-slate-200 dark:border-brand-border text-slate-800 dark:text-white flex items-center gap-2 shadow-sm">
            <MapPin className="w-4 h-4 text-cyan-600 dark:text-brand-cyan" /> {location}
          </span>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-xl bg-white dark:bg-brand-card border border-slate-200 dark:border-brand-border hover:border-slate-400 dark:hover:border-slate-500 text-slate-800 dark:text-white transition-all flex items-center gap-2 shadow-sm"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-xl bg-white dark:bg-brand-card border border-slate-200 dark:border-brand-border hover:border-slate-400 dark:hover:border-slate-500 text-slate-800 dark:text-white transition-all flex items-center gap-2 shadow-sm"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-600 font-mono pt-8">
          © 2026 Thái Ngọc Linh · Built with React 18, Next.js, Tailwind CSS & AI Tools.
        </p>
      </div>
    </footer>
  );
}
