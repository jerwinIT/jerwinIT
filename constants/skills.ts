import type { Skill, SkillFilter } from "@/types";

export const SKILL_FILTERS: readonly SkillFilter[] = [
  { id: "all", label: "All" },
  { id: "languages", label: "Programming Languages" },
  { id: "fullstack", label: "Frontend & Backend" },
  { id: "data", label: "Databases & GIS" },
  { id: "qa", label: "QA & Automation" },
  { id: "deployment", label: "Deployment & Design" },
] as const;

export const SKILLS_MATRIX: readonly Skill[] = [
  // Languages
  {
    name: "JavaScript",
    category: "languages",
    confidence: 86,
    exposure: "Daily use",
    focus: "Core language for frontend and web tooling",
  },
  {
    name: "Python",
    category: "languages",
    confidence: 78,
    exposure: "Project based",
    focus: "Automation, scripting and backend experiments",
  },
  {
    name: "PHP",
    category: "languages",
    confidence: 73,
    exposure: "Academic and practical",
    focus: "Web application fundamentals",
  },
  {
    name: "Java",
    category: "languages",
    confidence: 68,
    exposure: "Academic",
    focus: "Object-oriented programming foundations",
  },
  {
    name: "C++",
    category: "languages",
    confidence: 66,
    exposure: "Academic",
    focus: "Data structures and performance concepts",
  },

  // Fullstack
  {
    name: "Next.js",
    category: "fullstack",
    confidence: 88,
    exposure: "Primary stack",
    focus: "Building SSR/SSG apps and portfolio experiences",
  },
  {
    name: "React",
    category: "fullstack",
    confidence: 90,
    exposure: "Daily use",
    focus: "Component architecture and reusable UI patterns",
  },
  {
    name: "Node.js",
    category: "fullstack",
    confidence: 80,
    exposure: "Project based",
    focus: "APIs and service integration",
  },
  {
    name: "Express.js",
    category: "fullstack",
    confidence: 78,
    exposure: "Project based",
    focus: "REST API development",
  },
  {
    name: "FastAPI",
    category: "fullstack",
    confidence: 71,
    exposure: "Project based",
    focus: "Python API development and service endpoints",
  },

  // Data & GIS
  {
    name: "PostgreSQL",
    category: "data",
    confidence: 72,
    exposure: "Project based",
    focus: "Relational schema and query optimization basics",
  },
  {
    name: "PostGIS",
    category: "data",
    confidence: 64,
    exposure: "Learning by projects",
    focus: "Spatial queries and geo-enabled datasets",
  },
  {
    name: "MySQL",
    category: "data",
    confidence: 78,
    exposure: "Academic and practical",
    focus: "CRUD and normalization practices",
  },
  {
    name: "MongoDB",
    category: "data",
    confidence: 69,
    exposure: "Project based",
    focus: "Document modeling and flexible data structures",
  },
  {
    name: "Leaflet.js",
    category: "data",
    confidence: 66,
    exposure: "Project based",
    focus: "Interactive web mapping and GIS visualization",
  },

  // QA
  {
    name: "Pytest",
    category: "qa",
    confidence: 72,
    exposure: "Project based",
    focus: "Python test suites and validation workflows",
  },
  {
    name: "Playwright",
    category: "qa",
    confidence: 69,
    exposure: "Project based",
    focus: "End-to-end UI automation and regression tests",
  },

  // Deployment & Design
  {
    name: "Vercel",
    category: "deployment",
    confidence: 79,
    exposure: "Project based",
    focus: "Hosting and shipping Next.js applications",
  },
  {
    name: "Supabase",
    category: "deployment",
    confidence: 70,
    exposure: "Project based",
    focus: "Backend services, storage and managed database",
  },
  {
    name: "Hostinger",
    category: "deployment",
    confidence: 74,
    exposure: "Practical deployment",
    focus: "Web hosting configuration and domain setup",
  },
  {
    name: "Figma",
    category: "deployment",
    confidence: 82,
    exposure: "Regular use",
    focus: "Wireframes, UI layout and design handoff",
  },
  {
    name: "Git",
    category: "deployment",
    confidence: 85,
    exposure: "Daily use",
    focus: "Version control and team collaboration",
  },
  {
    name: "GitHub",
    category: "deployment",
    confidence: 84,
    exposure: "Daily use",
    focus: "Repository management and collaboration workflow",
  },
] as const;
