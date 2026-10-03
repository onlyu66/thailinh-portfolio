export interface ProfileData {
  name: string;
  role: string;
  subRole?: string;
  status: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  coreStack: string[];
  uiSystem: string[];
  backendStack: string[];
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
  iconName: "Layers" | "Palette" | "Cpu" | "Network" | "Database" | "Terminal";
  categoryColor: "cyan" | "purple" | "pink" | "emerald";
  skills?: string[];
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
  color: "cyan" | "purple" | "pink" | "emerald";
  githubUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description?: string;
  highlights?: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  period: string;
  major: string;
}

export interface PortfolioData {
  profile: ProfileData;
  techStack: TechItem[];
  currentlyLearning: string[];
  workflow: WorkflowStep[];
  projects: Project[];
  otherProjects: string[];
  experiences: ExperienceItem[];
  education: EducationItem[];
}
