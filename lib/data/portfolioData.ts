import { PortfolioData } from "@/lib/types/portfolio";

export const mockPortfolioDataVi: PortfolioData = {
  profile: {
    name: "Thái Ngọc Linh",
    role: "Frontend Developer (React/Next.js)",
    subRole: "Growing into Fullstack with Java/Spring Boot",
    status: "2+ năm kinh nghiệm Software Outsourcing | Định hướng Fullstack Banking & Fintech",
    bio: "Frontend Developer với 2+ năm kinh nghiệm tại các dự án software outsourcing, đã thực chiến và bàn giao 7 web app client (xử lý song song nhiều dự án). Thế mạnh vượt trội về React.js, Next.js, Strict TypeScript, rich-text editors (Lexical, Tiptap), dynamic multi-step forms và thanh toán Stripe Connect. Đang phát triển nền tảng Backend vững chắc với Java/Spring Boot qua dự án cá nhân AI Tech Marketplace, hướng tới vai trò Fullstack Developer trong mảng Banking & Fintech.",
    email: "ngoclinhthai8@gmail.com",
    phone: "+84 362 253 173",
    location: "Hà Nội, Việt Nam",
    github: "https://github.com/linhtn-dev",
    linkedin: "https://linkedin.com/in/linhtn-dev",
    coreStack: ["React.js", "Next.js", "TypeScript"],
    uiSystem: ["Tailwind CSS", "Material UI (MUI)", "Ant Design"],
    backendStack: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    workflow: "AI Vibe-Coding x Clean Architecture",
    codeQuality: {
      strictTypeScript: true,
      unitTesting: true,
      performanceFirst: true,
      zeroBlindMerge: true,
    },
  },
  techStack: [
    {
      id: "stack-1",
      title: "Frontend (Strong)",
      description:
        "React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5/CSS3, Tailwind CSS, Material UI (MUI), Ant Design.",
      iconName: "Layers",
      categoryColor: "cyan",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Material UI", "Ant Design"],
    },
    {
      id: "stack-2",
      title: "State & Data Management",
      description:
        "Redux, Zustand, Jotai, TanStack Query (React Query), Axios, React Hook Form + Zod validation.",
      iconName: "Cpu",
      categoryColor: "purple",
      skills: ["Redux", "Zustand", "Jotai", "TanStack Query", "Axios", "React Hook Form + Zod"],
    },
    {
      id: "stack-3",
      title: "Backend (Working Knowledge)",
      description:
        "Java, Spring Boot, Spring Data JPA, Spring Security, JWT, RESTful API design, JUnit testing.",
      iconName: "Database",
      categoryColor: "emerald",
      skills: ["Java", "Spring Boot", "Spring Data JPA", "Spring Security", "JWT", "REST API", "JUnit"],
    },
    {
      id: "stack-4",
      title: "Database & DevOps & Tools",
      description:
        "SQL, PostgreSQL, Docker, Maven, Git/GitHub, Vite, Postman, Swagger, Figma-to-Code, AI-assisted development.",
      iconName: "Terminal",
      categoryColor: "pink",
      skills: ["SQL", "PostgreSQL", "Docker", "Maven", "Git/GitHub", "Vite", "Postman", "Swagger", "AI Vibe Coding"],
    },
  ],
  currentlyLearning: [
    "Microservices Architecture",
    "Redis Caching",
    "Apache Kafka",
    "CI/CD Pipeline Automation",
    "Frontend Unit Testing (Vitest, React Testing Library)",
  ],
  workflow: [
    {
      id: "wf-1",
      stepNumber: "01. Spec & Interface Contract",
      title: "Định Nghĩa Interface & Contract",
      description:
        "Phân rã yêu cầu dự án từ BA/Designer thành các sub-tasks chi tiết, định nghĩa chặt chẽ Schema & Interface bằng TypeScript trước khi lập trình.",
      color: "cyan",
    },
    {
      id: "wf-2",
      stepNumber: "02. AI-Assisted Development",
      title: "AI Vibe-Coding Tối Ưu Tốc Độ",
      description:
        "Cung cấp context đầy đủ (Design System, Architectural Rules) giúp AI Agent sinh code chuẩn xác, đẩy nhanh tiến độ bàn giao tính năng phức tạp.",
      color: "purple",
    },
    {
      id: "wf-3",
      stepNumber: "03. Code Audit & QA Test",
      title: "Trực Tiếp Audit & Kiểm Soát Chất Lượng",
      description:
        "Review code tỉ mỉ, chạy Unit Tests, refactor logic đảm bảo không rò rỉ bộ nhớ, tuân thủ Clean Architecture (Zero-Blind Merge).",
      color: "pink",
    },
  ],
  projects: [
    {
      id: "proj-1",
      tag: "FRONTEND / MARKETPLACE",
      period: "2024 – Present",
      title: "Candee — Marketplace Kết Nối Manga Artist & Assistant",
      description:
        "Nền tảng marketplace chuyên biệt kết nối các họa sĩ Manga Nhật Bản với lực lượng trợ lý vẽ. Tích hợp công cụ chỉnh sửa văn bản cao cấp và luồng thanh toán Stripe Connect.",
      highlights: [
        "Xây dựng Rich-Text & Multimedia Editor tùy chỉnh trên nền Lexical (Facebook Framework).",
        "Tích hợp các màn hình thanh toán trực tiếp & phân chia doanh thu qua Stripe Connect.",
        "Quản lý form đa bước linh hoạt với React Hook Form + Zod & Zustand state.",
      ],
      techStack: ["Next.js", "TypeScript", "MUI", "Zustand", "React Hook Form", "Zod", "Lexical", "Stripe Connect"],
      color: "cyan",
    },
    {
      id: "proj-2",
      tag: "FRONTEND / ADMIN CMS",
      period: "2024 – Present",
      title: "Rakori — Admin CMS Nền Tảng Matchmaking Nhật - Hàn",
      description:
        "Hệ thống quản trị (Admin CMS) cho nền tảng ghép đôi người dùng Nhật Bản & Hàn Quốc, hỗ trợ giao diện đa ngôn ngữ, hiển thị bảng dữ liệu lớn và biểu đồ phân tích.",
      highlights: [
        "Xây dựng Tiptap rich-text editor làm sạch dữ liệu qua DOMPurify chống lỗ hổng XSS.",
        "Xây dựng Data Tables linh hoạt, biểu đồ thống kê trực quan bằng Recharts dashboard.",
        "Hỗ trợ đa ngôn ngữ UI (react-i18next) & xử lý async state với TanStack Query.",
      ],
      techStack: ["React 19", "Vite", "TypeScript", "Tailwind CSS", "TanStack Query", "TanStack Table", "Tiptap", "Recharts", "react-i18next"],
      color: "purple",
    },
    {
      id: "proj-3",
      tag: "FRONTEND / PROPTECH",
      period: "2024",
      title: "Wurinc — Real Estate Platform (Module Thuê Bất Động Sản)",
      description:
        "Module quản lý cho thuê thuộc hệ thống bất động sản Wurinc, phục vụ thao tác tìm kiếm, danh mục tài sản, quản lý hợp đồng thuê và xuất file tài liệu.",
      highlights: [
        "Xây dựng bảng dữ liệu tương tác cao, tích hợp tính năng Kéo-và-Thả (Drag & Drop).",
        "Tích hợp xuất & in tài liệu/hợp đồng dạng PDF trực tiếp trên giao diện web.",
        "Tối ưu hóa API caching với TanStack Query và quản lý state toàn cục với Zustand.",
      ],
      techStack: ["Next.js", "TypeScript", "MUI", "TanStack Query", "TanStack Table", "Zustand", "PDF Export"],
      color: "pink",
    },
    {
      id: "proj-4",
      tag: "PERSONAL BACKEND / FULLSTACK",
      period: "2024 – Present",
      title: "AI Tech Marketplace — E-Commerce Tích Hợp AI Shopping Assistant",
      description:
        "Dự án cá nhân phát triển năng lực Backend với Java/Spring Boot. Sàn thương mại điện tử thiết bị công nghệ tích hợp Trợ lý AI tư vấn mua sắm thông minh.",
      highlights: [
        "Thiết kế RESTful APIs (Controller, Service, Repository) cho sản phẩm, so sánh, đặt hàng và tài khoản.",
        "Lưu trữ dữ liệu PostgreSQL với Spring Data JPA; Bảo mật với Spring Security & JWT.",
        "Thêm validation, exception handling, logging; viết JUnit tests và đóng gói Docker container.",
      ],
      techStack: ["Java", "Spring Boot", "Spring Data JPA", "Spring Security", "JWT", "PostgreSQL", "Docker", "JUnit"],
      color: "emerald",
      githubUrl: "https://github.com/linhtn-dev",
    },
  ],
  otherProjects: ["Salon Online", "ITFor", "Demonopol", "SP Tyres E-learning System"],
  experiences: [
    {
      id: "exp-1",
      role: "Frontend Developer",
      company: "Solashi Holdings",
      location: "Hà Nội, Việt Nam",
      period: "01/2024 – Hiện tại",
      description:
        "Software Outsourcing / Offshore Development. Đảm nhận phát triển và bảo trì đồng thời 7 dự án web app client production với React.js, Next.js và TypeScript.",
      highlights: [
        "Bàn giao và duy trì 7 dự án client thuộc nhiều domain khác nhau (thường vận hành song song).",
        "Phát triển Rich Text & Multimedia Editor tái sử dụng (hỗ trợ văn bản, video, audio) và Dynamic Multi-step Forms (conditional fields, giữ state qua từng bước).",
        "Chuyển đổi thiết kế Figma thành giao diện responsive, mobile-first; trực tiếp trao đổi với Designer và BA để làm rõ spec & UX.",
        "Tích hợp REST API bằng Axios & TanStack Query; quản lý state linh hoạt với Redux, Zustand, Context API, Jotai; tham gia Code Review & Pull Requests.",
      ],
      isCurrent: true,
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "Cử nhân Hệ thống Thông tin (Bachelor of Information Systems)",
      school: "Đại học Công nghiệp Hà Nội (Hanoi University of Industry)",
      period: "10/2020 – 08/2024",
      major: "Hệ thống Thông tin",
    },
  ],
};

export const mockPortfolioDataEn: PortfolioData = {
  profile: {
    name: "Thai Ngoc Linh",
    role: "Frontend Developer (React/Next.js)",
    subRole: "Growing into Fullstack with Java/Spring Boot",
    status: "2+ years in Software Outsourcing | Aiming for Fullstack Banking & Fintech",
    bio: "Frontend Developer with 2+ years in software outsourcing, delivering 7 client web projects across different domains, often in parallel, with React.js, Next.js and TypeScript. Strong in complex UI (rich-text editor, dynamic multi-step forms) and payment flows (Stripe Connect). Building a Java/Spring Boot backend foundation through a RESTful API project, aiming to grow into a Fullstack role in banking and fintech.",
    email: "ngoclinhthai8@gmail.com",
    phone: "+84 362 253 173",
    location: "Hanoi, Vietnam",
    github: "https://github.com/linhtn-dev",
    linkedin: "https://linkedin.com/in/linhtn-dev",
    coreStack: ["React.js", "Next.js", "TypeScript"],
    uiSystem: ["Tailwind CSS", "Material UI (MUI)", "Ant Design"],
    backendStack: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    workflow: "AI Vibe-Coding x Clean Architecture",
    codeQuality: {
      strictTypeScript: true,
      unitTesting: true,
      performanceFirst: true,
      zeroBlindMerge: true,
    },
  },
  techStack: [
    {
      id: "stack-1",
      title: "Frontend (Strong)",
      description:
        "React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5/CSS3, Tailwind CSS, Material UI (MUI), Ant Design.",
      iconName: "Layers",
      categoryColor: "cyan",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Material UI", "Ant Design"],
    },
    {
      id: "stack-2",
      title: "State & Data Management",
      description:
        "Redux, Zustand, Jotai, TanStack Query (React Query), Axios, React Hook Form + Zod validation.",
      iconName: "Cpu",
      categoryColor: "purple",
      skills: ["Redux", "Zustand", "Jotai", "TanStack Query", "Axios", "React Hook Form + Zod"],
    },
    {
      id: "stack-3",
      title: "Backend (Working Knowledge)",
      description:
        "Java, Spring Boot, Spring Data JPA, Spring Security, JWT, REST API design, JUnit testing.",
      iconName: "Database",
      categoryColor: "emerald",
      skills: ["Java", "Spring Boot", "Spring Data JPA", "Spring Security", "JWT", "REST API", "JUnit"],
    },
    {
      id: "stack-4",
      title: "Database & DevOps & Tools",
      description:
        "SQL, PostgreSQL, Docker, Maven, Git/GitHub, Vite, Postman, Swagger, Figma-to-Code, AI-assisted development.",
      iconName: "Terminal",
      categoryColor: "pink",
      skills: ["SQL", "PostgreSQL", "Docker", "Maven", "Git/GitHub", "Vite", "Postman", "Swagger", "AI Vibe Coding"],
    },
  ],
  currentlyLearning: [
    "Microservices Architecture",
    "Redis Caching",
    "Apache Kafka",
    "CI/CD Pipeline Automation",
    "Frontend Unit Testing (Vitest, React Testing Library)",
  ],
  workflow: [
    {
      id: "wf-1",
      stepNumber: "01. Spec & Interface Contract",
      title: "Task Breakdown & Type Definition",
      description:
        "Break down Product Requirements into detailed sub-tasks, strictly define Interfaces & Types with TypeScript before delegating to AI.",
      color: "cyan",
    },
    {
      id: "wf-2",
      stepNumber: "02. AI-Assisted Development",
      title: "Context Prompting & Speed Boost",
      description:
        "Provide full Design System, Folder Structure and Naming Conventions to enable AI Agents to generate accurate code on the first attempt.",
      color: "purple",
    },
    {
      id: "wf-3",
      stepNumber: "03. Code Audit & QA Test",
      title: "Code Review & Quality Control",
      description:
        "Directly review code, run Unit Tests, and refactor logic to prevent memory leaks and performance regressions (Zero-Blind Merge).",
      color: "pink",
    },
  ],
  projects: [
    {
      id: "proj-1",
      tag: "FRONTEND / MARKETPLACE",
      period: "2024 – Present",
      title: "Candee — Marketplace Connecting Manga Artists with Assistants",
      description:
        "Marketplace connecting manga artists with assistants. Integrated advanced rich-text editing tools and Stripe Connect payment flow.",
      highlights: [
        "Built a custom Lexical rich-text and multimedia editor (text, video, audio).",
        "Integrated Stripe Connect payment screens and seller onboarding.",
        "Managed complex forms with React Hook Form + Zod & Zustand state.",
      ],
      techStack: ["Next.js", "TypeScript", "MUI", "Zustand", "React Hook Form", "Zod", "Lexical", "Stripe Connect"],
      color: "cyan",
    },
    {
      id: "proj-2",
      tag: "FRONTEND / ADMIN CMS",
      period: "2024 – Present",
      title: "Rakori (Admin CMS) — Matchmaking Platform for JP & KR Users",
      description:
        "Admin CMS for a matchmaking platform targeting Japanese and Korean users, supporting multilingual UI, large data tables, and analytics dashboards.",
      highlights: [
        "Built a Tiptap rich-text editor sanitized with DOMPurify to prevent XSS vulnerabilities.",
        "Built interactive data tables and statistical charts with Recharts dashboard.",
        "Implemented multilingual UI (react-i18next) & async query state management with TanStack Query.",
      ],
      techStack: ["React 19", "Vite", "TypeScript", "Tailwind CSS", "TanStack Query", "TanStack Table", "Tiptap", "Recharts", "react-i18next"],
      color: "purple",
    },
    {
      id: "proj-3",
      tag: "FRONTEND / PROPTECH",
      period: "2024",
      title: "Wurinc (Rental Module) — Real Estate Platform",
      description:
        "Rental management module for Wurinc real estate platform, handling property listings, lease agreements, and report generation.",
      highlights: [
        "Developed interactive data tables with Drag-and-Drop support.",
        "Integrated client-side PDF export and print capabilities for lease contracts.",
        "Optimized API query caching with TanStack Query and global state management with Zustand.",
      ],
      techStack: ["Next.js", "TypeScript", "MUI", "TanStack Query", "TanStack Table", "Zustand", "PDF Export"],
      color: "pink",
    },
    {
      id: "proj-4",
      tag: "PERSONAL BACKEND / FULLSTACK",
      period: "2024 – Present",
      title: "AI Tech Marketplace — Tech E-Commerce with AI Shopping Assistant",
      description:
        "Personal Fullstack / Backend project building Java/Spring Boot proficiency. Tech e-commerce platform with an AI-powered Shopping Assistant.",
      highlights: [
        "Designed RESTful APIs (Controller, Service, Repository) for catalog, comparison, ordering and accounts.",
        "Persisted data in PostgreSQL with Spring Data JPA; secured APIs with Spring Security & JWT.",
        "Added validation, exception handling, and logging; wrote JUnit tests and containerized with Docker.",
      ],
      techStack: ["Java", "Spring Boot", "Spring Data JPA", "Spring Security", "JWT", "PostgreSQL", "Docker", "JUnit"],
      color: "emerald",
      githubUrl: "https://github.com/linhtn-dev",
    },
  ],
  otherProjects: ["Salon Online", "ITFor", "Demonopol", "SP Tyres E-learning System"],
  experiences: [
    {
      id: "exp-1",
      role: "Frontend Developer",
      company: "Solashi Holdings",
      location: "Hanoi, Vietnam",
      period: "Jan 2024 – Present",
      description:
        "Software Outsourcing / Offshore Development. Delivered and maintained production web apps for 7 client projects with React.js, Next.js and TypeScript.",
      highlights: [
        "Delivered and maintained production web apps for 7 client projects, handling several in parallel across different domains.",
        "Built a reusable Rich Text & Multimedia Editor (text, video, audio) and Dynamic Multi-step Forms (conditional fields, state kept across steps), connected to REST APIs.",
        "Turned Figma designs into responsive, mobile-first UIs; worked with Designers and BAs to clarify requirements and refine UX.",
        "Integrated APIs with Axios and TanStack Query, managed state with Redux, Zustand, Context API and Jotai; took part in Pull Requests and Code Reviews.",
      ],
      isCurrent: true,
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Information Systems",
      school: "Hanoi University of Industry",
      period: "Oct 2020 – Aug 2024",
      major: "Information Systems",
    },
  ],
};

export const mockPortfolioData = mockPortfolioDataVi;

export function getPortfolioData(lang: "vi" | "en" = "vi"): PortfolioData {
  return lang === "en" ? mockPortfolioDataEn : mockPortfolioDataVi;
}
