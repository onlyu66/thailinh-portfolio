export interface ProfileData {
  name: string;
  role: string;
  status: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  coreStack: string[];
  uiSystem: string[];
  workflow: string;
  codeQuality: {
    strictTypeScript: boolean;
    unitTesting: boolean;
    performanceFirst: boolean;
    zeroBlindMerge: boolean;
  };
}

export interface TechItem {
  id: string;
  title: string;
  description: string;
  iconName: "Layers" | "Palette" | "Cpu" | "Network";
  categoryColor: "cyan" | "purple" | "pink" | "emerald";
}

export interface WorkflowStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  color: "cyan" | "purple" | "pink";
}

export interface Project {
  id: string;
  tag: string;
  period: string;
  title: string;
  description: string;
  highlights: string[];
  techStack: string[];
  color: "cyan" | "purple";
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description?: string;
  isCurrent?: boolean;
}

export interface PortfolioData {
  profile: ProfileData;
  techStack: TechItem[];
  workflow: WorkflowStep[];
  projects: Project[];
  experiences: ExperienceItem[];
}
