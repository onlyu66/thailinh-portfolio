import { PortfolioData } from "@/lib/types/portfolio";

export const mockPortfolioData: PortfolioData = {
  profile: {
    name: "Thái Ngọc Linh",
    role: "Frontend Engineer",
    status: "Sẵn sàng cho dự án & cơ hội mới",
    bio: "Frontend Engineer với kinh nghiệm thực chiến chuyên sâu về React 18, Next.js, Strict TypeScript và Tailwind CSS. Tiên phong áp dụng AI Agent (Vibe-coding) vào quy trình phát triển phần mềm để tối ưu tốc độ triển khai nhưng luôn kiểm soát chặt chẽ kiến trúc và chất lượng code.",
    email: "ngoclinhthai8@gmail.com",
    github: "https://github.com/linhtn-dev",
    linkedin: "https://linkedin.com/in/linhtn-dev",
    coreStack: ["React 18", "Next.js", "TypeScript"],
    uiSystem: ["Tailwind CSS", "Radix UI", "Shadcn"],
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
      title: "Core Frontend",
      description:
        "React 18, Next.js (App Router), Strict TypeScript. Thành thạo Custom Hooks, Generic Types & Type Narrowing.",
      iconName: "Layers",
      categoryColor: "cyan",
    },
    {
      id: "stack-2",
      title: "UI & Accessibility",
      description:
        "Tailwind CSS, Radix UI (Headless), Shadcn UI, Storybook. Xây dựng Design System chuẩn WCAG a11y.",
      iconName: "Palette",
      categoryColor: "purple",
    },
    {
      id: "stack-3",
      title: "State & Performance",
      description:
        "TanStack Query, Redux Toolkit, Zustand. Tối ưu Web Vitals, Virtualization (Large Lists), Code Splitting.",
      iconName: "Cpu",
      categoryColor: "pink",
    },
    {
      id: "stack-4",
      title: "Integration & DevOps",
      description:
        "Tích hợp RESTful API & GraphQL, Git, CI/CD Pipeline (GitHub Actions), Docker Basic, Vercel Deploy.",
      iconName: "Network",
      categoryColor: "emerald",
    },
  ],
  workflow: [
    {
      id: "wf-1",
      stepNumber: "01. Task Breakdown",
      title: "Phân Rã Nhiệm Vụ",
      description:
        "Chia nhỏ Yêu cầu Sản phẩm thành các sub-tasks chi tiết, định nghĩa chặt chẽ Interface & Type bằng TypeScript trước khi giao cho AI.",
      color: "cyan",
    },
    {
      id: "wf-2",
      stepNumber: "02. Context Prompting",
      title: "Cung Cấp Context",
      description:
        "Truyền đầy đủ Design System, Folder Structure và Naming Convention giúp AI Agent sinh code chuẩn xác 90% ngay từ lần đầu.",
      color: "purple",
    },
    {
      id: "wf-3",
      stepNumber: "03. Code Audit",
      title: "Kiểm Soát Chất Lượng",
      description:
        "Trực tiếp Code Review, chạy Unit Tests và Refactor lại logic để đảm bảo không rò rỉ bộ nhớ hay gây lỗi hiệu năng (Zero-Blind Merge).",
      color: "pink",
    },
  ],
  projects: [
    {
      id: "proj-1",
      tag: "ENTERPRISE SAAS",
      period: "2025 – 2026",
      title: "Enterprise Data & Analytics Dashboard",
      description:
        "Hệ thống quản lý và phân tích dữ liệu quy mô lớn cho doanh nghiệp. Xử lý hàng nghìn dòng dữ liệu thực tế với tốc độ phản hồi tính bằng milisecond.",
      highlights: [
        "Xây dựng bộ UI Component tái sử dụng bằng Radix UI & Tailwind.",
        "Tích hợp RESTful APIs phức tạp với TanStack Query caching.",
        "Tăng 200% tốc độ đóng góp code nhờ AI Vibe-coding workflow.",
      ],
      techStack: ["React 18", "Strict TS", "Tailwind", "Radix UI"],
      color: "cyan",
    },
    {
      id: "proj-2",
      tag: "E-COMMERCE / WEB",
      period: "2024 – 2025",
      title: "High-Performance E-Commerce Web Application",
      description:
        "Trang web thương mại điện tử thế hệ mới tập trung vào trải nghiệm mượt mà, thời gian tải trang nhanh và chuẩn Accessibility.",
      highlights: [
        "Tối ưu điểm Google Lighthouse Performance đạt 95+.",
        "Áp dụng Lazy Loading, Image Optimization & Code Splitting.",
        "Thiết kế giao diện tương thích hoàn hảo trên mọi thiết bị.",
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
      color: "purple",
    },
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Frontend Engineer",
      company: "Technology Company",
      period: "01/2024 – Hiện tại",
      description:
        "Trực tiếp phát triển, tái cấu trúc giao diện và áp dụng AI Vibe-coding để tăng tốc độ đóng góp tính năng cho dự án.",
      isCurrent: true,
    },
    {
      id: "exp-2",
      role: "Cử nhân Công nghệ Thông tin",
      company: "Tốt nghiệp Đại học",
      period: "2020 – 2024",
      isCurrent: false,
    },
  ],
};
