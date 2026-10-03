"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "vi" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  vi: {
    // Nav & Header
    "nav.about": "Về Tôi",
    "nav.stack": "Tech Stack",
    "nav.workflow": "AI Workflow",
    "nav.projects": "Dự Án",
    "nav.contact": "Liên Hệ ⚡",
    "nav.viewProjects": "Xem Dự Án",

    // Hero Section
    "hero.greeting": "Xin chào, tôi là",
    "hero.github": "GitHub Profile",
    "hero.viewProducts": "Xem Dự Án",
    "hero.configTitle": "Engineer.config.ts",

    // Tech Stack
    "stack.badge": "// TECH STACK & SKILLS",
    "stack.title": "Kỹ Năng Kỹ Thuật & Công Nghệ Thực Chiến",
    "stack.learningBadge": "Đang Học Hỏi & Trau Dồi Mở Rộng (Currently Learning)",

    // Workflow
    "workflow.badge": "// AI WORKFLOW",
    "workflow.title": "Quy Trình Phát Triển Phần Mềm Áp Dụng AI",
    "workflow.subtitle": "Tối ưu tốc độ sản xuất code với AI Agent nhưng vẫn duy trì kiểm soát kiến trúc và chất lượng code chặt chẽ.",

    // Projects
    "projects.badge": "// KEY PROJECTS",
    "projects.title": "Dự Án Nổi Bật & Thực Chiến",
    "projects.source": "Mã Nguồn",
    "projects.otherTitle": "Dự Án Client Khác (Software Outsourcing tại Solashi)",
    "projects.otherDesc": "Tham gia phát triển, tùy biến UI & bảo trì sản phẩm cho các dự án khách hàng:",

    // Experience & Education
    "exp.title": "Kinh Nghiệm Làm Việc",
    "exp.eduTitle": "Học Vấn",
    "exp.commitTitle": "Cam Kết Chuyên Môn & Định Hướng",
    "exp.commit1Title": "Định Hướng Fullstack:",
    "exp.commit1Desc": "Nâng cao kiến thức Java/Spring Boot & PostgreSQL, sẵn sàng đảm nhận các hệ thống ngân hàng & tài chính (Banking & Fintech).",
    "exp.commit2Title": "Tối Ưu Trải Nghiệm & Hiệu Năng UI:",
    "exp.commit2Desc": "Thành thạo xây dựng Rich-Text Editors (Lexical, Tiptap), Form đa bước phức tạp & Tích hợp cổng thanh toán Stripe.",
    "exp.commit3Title": "Ownership & AI Vibe-Coding:",
    "exp.commit3Desc": "Làm chủ quy trình phát triển từ BA spec đến UI/UX, áp dụng AI Agent để nhân bản tốc độ sản xuất code nhưng vẫn giữ Clean Architecture.",
    "exp.commit4Title": "Linh Hoạt & Chịu Áp Lực:",
    "exp.commit4Desc": "Đã quen với việc xử lý song song nhiều dự án client outsourcing, đáp ứng tiến độ release nghiêm ngặt.",

    // Footer
    "footer.title": "Hãy Cùng Nhau Xây Dựng Sản Phẩm Tuyệt Vời⚡",
    "footer.subtitle": "Tôi luôn sẵn sàng tiếp nhận các dự án và cơ hội công việc mới (Frontend / Fullstack Java/Spring Boot).",
    "footer.copyright": "Thái Ngọc Linh · Built with React 18, Next.js, Tailwind CSS & AI Tools.",

    // Typewriter
    "typewriter.1": "Frontend Developer (React.js / Next.js)",
    "typewriter.2": "Growing into Fullstack (Java / Spring Boot)",
    "typewriter.3": "Rich-Text Editor & Stripe Payment Specialist",
    "typewriter.4": "AI Vibe-Coder x Clean Architecture",
  },
  en: {
    // Nav & Header
    "nav.about": "About",
    "nav.stack": "Tech Stack",
    "nav.workflow": "AI Workflow",
    "nav.projects": "Projects",
    "nav.contact": "Contact ⚡",
    "nav.viewProjects": "View Projects",

    // Hero Section
    "hero.greeting": "Hi, I am",
    "hero.github": "GitHub Profile",
    "hero.viewProducts": "View Projects",
    "hero.configTitle": "Engineer.config.ts",

    // Tech Stack
    "stack.badge": "// TECH STACK & SKILLS",
    "stack.title": "Technical Skills & Applied Technologies",
    "stack.learningBadge": "Currently Learning & Expanding",

    // Workflow
    "workflow.badge": "// AI WORKFLOW",
    "workflow.title": "AI-Assisted Software Development Process",
    "workflow.subtitle": "Boosting development speed with AI Agents while maintaining strict architecture and code quality control.",

    // Projects
    "projects.badge": "// KEY PROJECTS",
    "projects.title": "Featured & Production Projects",
    "projects.source": "Source Code",
    "projects.otherTitle": "Other Client Projects (Software Outsourcing at Solashi)",
    "projects.otherDesc": "Contributed to UI development, customization & maintenance for client projects:",

    // Experience & Education
    "exp.title": "Professional Experience",
    "exp.eduTitle": "Education",
    "exp.commitTitle": "Professional Commitment & Direction",
    "exp.commit1Title": "Fullstack Growth:",
    "exp.commit1Desc": "Building Java/Spring Boot & PostgreSQL backend foundation for Banking & Fintech systems.",
    "exp.commit2Title": "UI Excellence & Performance:",
    "exp.commit2Desc": "Proficient in Rich-Text Editors (Lexical, Tiptap), dynamic multi-step forms & Stripe Connect payment flows.",
    "exp.commit3Title": "Ownership & AI Vibe-Coding:",
    "exp.commit3Desc": "Owning the process from BA specs to UI/UX, leveraging AI agents to accelerate delivery while keeping Clean Architecture.",
    "exp.commit4Title": "Flexibility & Resilience:",
    "exp.commit4Desc": "Experienced in handling multiple client projects in parallel under strict sprint release schedules.",

    // Footer
    "footer.title": "Let's Build Great Products Together⚡",
    "footer.subtitle": "Open for new opportunities and engineering challenges (Frontend / Fullstack Java/Spring Boot).",
    "footer.copyright": "Thai Ngoc Linh · Built with React 18, Next.js, Tailwind CSS & AI Tools.",

    // Typewriter
    "typewriter.1": "Frontend Developer (React.js / Next.js)",
    "typewriter.2": "Growing into Fullstack (Java / Spring Boot)",
    "typewriter.3": "Rich-Text Editor & Stripe Payment Specialist",
    "typewriter.4": "AI Vibe-Coder x Clean Architecture",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("vi");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_lang") as Language;
    if (saved === "vi" || saved === "en") {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("portfolio_lang", newLang);
  };

  const toggleLang = () => {
    setLang(lang === "vi" ? "en" : "vi");
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations["vi"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
