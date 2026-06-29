import { Code2, Mail, MapPin, Phone, Users } from "lucide-react";

interface AboutData {
  title: string;
  text: string;
  icon?: React.ElementType;
}

interface TechStackData {
  text: string;
  category: "frontend" | "language" | "backend" | "tooling";
  proficiency?: number;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectData {
  image: string;
  title: string;
  shortTitle: string;
  role: string;
  category: "frontend" | "fullstack";
  featured?: boolean;
  comingSoon?: boolean;
  recruiterSummary: string;
  metrics: ProjectMetric[];
  problem: string;
  engineerHighlights: string[];
  description: string;
  technologies: string[];
  githubRepoLink?: string;
  liveLink?: string;
}

export interface ExperienceData {
  role: string;
  company: string;
  period: string;
  type: "work" | "award" | "education";
  description: string;
}

export const links: { text: string; to: string }[] = [
  { text: "About", to: "about" },
  { text: "Projects", to: "projects" },
  { text: "Skills", to: "skills" },
  { text: "Contact", to: "contact" },
];

export const aboutData: AboutData[] = [
  {
    title: "Clean Code",
    icon: Code2,
    text: "Writing maintainable, scalable code following best practices and modern standards.",
  },
  {
    title: "Design Focus",
    icon: Code2,
    text: "Creating beautiful interfaces with attention to detail and user experience.",
  },
  {
    title: "Performance",
    icon: Users,
    text: "Optimizing for speed and efficiency without compromising on quality.",
  },
  {
    title: "Collaboration",
    icon: Users,
    text: "Working effectively with teams to deliver exceptional results.",
  },
];

export const experienceData: ExperienceData[] = [
  {
    role: "Frontend Engineering Intern",
    company: "Tektariq IT Solutions",
    period: "Mar 2026 – Present",
    type: "work",
    description:
      "Building and maintaining frontend features for client-facing products.",
  },
  {
    role: "Frontend Development Instructor",
    company: "Tektariq Academy",
    period: "Jun 2026 – Present",
    type: "work",
    description:
      "Designed and deliver a 16-week curriculum covering Next.js, TypeScript, Tailwind CSS, and interview prep.",
  },
  {
    role: "Best Graduating Student, Web Development Stack",
    company: "IOTB-TECH 2025",
    period: "2025",
    type: "award",
    description:
      "Recognised among graduating students for excellence in the web development track.",
  },
  {
    role: "BSc Computer Science, First Class",
    company: "Lagos State University",
    period: "2022 – Aug 2026",
    type: "education",
    description: "Graduating August 2026.",
  },
];

export const projectData: ProjectData[] = [
  {
    image: "/navigate_bg.jpg",
    title: "LASU Navigate, Campus Navigation System",
    shortTitle: "LASU Navigate",
    role: "Frontend (solo)",
    category: "frontend",
    featured: true,

    recruiterSummary:
      "Web-GIS navigation app for a 400-acre university campus, built as a final-year project. Lets students find buildings, plan routes, and get guided turn-by-turn directions. Live and publicly accessible.",
    metrics: [
      { value: "400+", label: "acre campus mapped" },
      { value: "FYP", label: "final year project" },
      { value: "~5 weeks", label: "active build time" },
      { value: "Live", label: "deployed on Vercel" },
    ],

    problem:
      "LASU's 400-acre campus has no official digital navigation tool. New students and visitors routinely get lost. The goal was to build a web-based GIS solution that maps every building, computes navigable paths, and guides users in real time.",
    engineerHighlights: [
      "Integrated Mapbox GL JS via react-map-gl for interactive campus tile rendering and custom GeoJSON overlays",
      "Built a guided navigation flow with step-by-step directions using Mapbox Directions API",
      "Graph-based routing engine (Dijkstra) in active development as a phase 2 feature to replace the current API-dependent routing",
      "Architected map state with React context to keep the Mapbox instance decoupled from UI components",
      "Handled coordinate transformations and bounding box constraints to lock the map to campus boundaries",
    ],

    description:
      "A web-GIS campus navigation app for Lagos State University. Students and visitors can search for buildings, view the interactive campus map, and get guided directions. Built as a final-year project with Next.js 15 and Mapbox GL JS.",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Mapbox GL JS",
      "react-map-gl",
      "GeoJSON",
      "Tailwind CSS",
      "React Context",
    ],
    githubRepoLink: "https://github.com/Roqeeb-dev/lasumap.git",
    liveLink: "https://lasunav-sable.vercel.app/",
  },

  {
    image: "/tayora-bg.jpg",
    title: "Tayora Sustain, Circular Economy Marketplace",
    shortTitle: "Tayora Sustain",
    role: "Frontend (solo)",
    category: "fullstack",
    featured: true,

    recruiterSummary:
      "Three-sided marketplace connecting textile waste suppliers, requesters, and admins. Built solo on the frontend in under 3 weeks to a stable beta with role-based auth, image uploads, and a full material tracking flow.",
    metrics: [
      { value: "3", label: "user portals" },
      { value: "< 3 weeks", label: "solo MVP" },
      { value: "Closed beta", label: "active testers" },
      { value: "Live", label: "deployed on Vercel" },
    ],

    problem:
      "Textile waste is a growing problem in emerging markets with no structured collection or redistribution system. Tayora needed a marketplace where suppliers list materials, requesters claim them, and admins oversee the flow with proper auth and role separation.",
    engineerHighlights: [
      "Built the entire frontend solo: three distinct portals (supplier, requester, admin) with role-based routing and protected pages",
      "TanStack Query owns server state; Zustand scoped to UI-only state with no business logic in components",
      "Cloudinary image uploads with client-side preview and optimistic UI updates",
      "Debugged a cross-origin auth issue where FastAPI session cookies weren't persisting. Fixed by configuring a Next.js proxy rewrite and switching to sessionStorage for token persistence",
      "Modelled the full material flow (submitted, collected, sorted, matched, fulfilled) as discrete status transitions surfaced clearly in both portals",
    ],

    description:
      "A circular economy marketplace for textile waste, connecting suppliers, requesters, and admins in a three-sided platform. Built the complete frontend solo with auth, image uploads, role-based dashboards, and a full material lifecycle flow.",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS v4",
      "Zustand",
      "TanStack Query",
      "Cloudinary",
      "FastAPI",
    ],
    githubRepoLink: "https://github.com/Roqeeb-dev/tayora_sustain.git",
    liveLink: "https://tayorasustain.vercel.app",
  },

  {
    image: "/cognify-bg.png",
    title: "Cognify, AI Learning Management System",
    shortTitle: "Cognify",
    role: "Frontend (solo)",
    category: "fullstack",
    featured: true,

    recruiterSummary:
      "Full-featured LMS with student and instructor dashboards, course creation, multi-format lesson delivery, and an AI tutor stub. Frontend built solo with 500+ unique visitors tracked since launch.",
    metrics: [
      { value: "500+", label: "unique visitors" },
      { value: "2", label: "user roles" },
      { value: "~2 months", label: "since launch" },
      { value: "Live", label: "deployed on Vercel" },
    ],

    problem:
      "Build a production-grade LMS that supports multiple user roles, course creation workflows, progress tracking, and an AI assistant with a clean separation between student and instructor experiences.",
    engineerHighlights: [
      "Established a ServerType / NormalizedType pattern: raw API responses normalised at the service layer before touching component state",
      "Hooks own toast notifications and return response values so parent components can chain actions without prop-drilling callbacks",
      "Zustand scoped strictly to UI state; TanStack Query owns all server state with no cache duplication",
      "Role guards implemented in hooks, not layout components, so access logic is testable and reusable",
      "OpenAI API integrated as an AI tutor stub, structured to swap in any LLM provider without touching UI code",
    ],

    description:
      "An intelligent LMS with student and instructor dashboards, course creation, multi-format lesson delivery, quiz system, progress tracking, and an AI tutor. Frontend built solo with a clear architectural separation between UI state and server state.",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
    ],
    githubRepoLink: "https://github.com/Roqeeb-dev/ai-lms-ui.git",
    liveLink: "https://ai-lms-ui.vercel.app",
  },

  {
    image: "/khurizah-bg.jpg",
    title: "Khurizah Innovation, Corporate Website",
    shortTitle: "Khurizah Innovation",
    role: "Frontend (freelance)",
    category: "frontend",
    featured: false,

    recruiterSummary:
      "Freelance corporate website for a tech company. Responsive, animated, and performance-optimised. Delivered as a complete production build.",
    metrics: [
      { value: "100%", label: "responsive" },
      { value: "Freelance", label: "client project" },
      { value: "Live", label: "deployed" },
    ],

    problem:
      "Khurizah Innovation needed a modern web presence to showcase their mission, services, and team without an existing design system or content structure in place.",
    engineerHighlights: [
      "Built from scratch with no existing design system, defining layout, spacing, and component structure independently",
      "Scroll-triggered animations with Framer Motion for section reveals and hero transitions",
      "Core Web Vitals optimised: lazy-loaded images, minimal JS bundle, semantic HTML for accessibility",
    ],

    description:
      "A responsive corporate website for Khurizah Innovation featuring smooth animations, clean layouts, and optimised performance. Delivered as a freelance project.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubRepoLink:
      "https://github.com/Roqeeb-dev/khurizah-innovation-website.git",
    liveLink: "https://khurizah-innovation.vercel.app/",
  },
];

export const techStackData: TechStackData[] = [
  { text: "HTML5", category: "frontend" },
  { text: "CSS3", category: "frontend" },
  { text: "Tailwind CSS", category: "frontend" },
  { text: "Framer Motion", category: "frontend" },
  { text: "JavaScript", category: "language" },
  { text: "TypeScript", category: "language" },
  { text: "React", category: "frontend" },
  { text: "Next.js", category: "frontend" },
  { text: "Zustand", category: "frontend" },
  { text: "TanStack Query", category: "frontend" },
  { text: "Node.js", category: "backend" },
  { text: "Express.js", category: "backend" },
  { text: "MongoDB", category: "backend" },
  { text: "PostgreSQL", category: "backend" },
  { text: "Prisma", category: "backend" },
  { text: "Git", category: "tooling" },
  { text: "GitHub", category: "tooling" },
  { text: "Vercel", category: "tooling" },
  { text: "Cloudinary", category: "tooling" },
  { text: "RESTful APIs", category: "tooling" },
];

export const ReasonsData = [
  {
    title: "Continuous Learning",
    text: "Always staying updated with the latest technologies and best practices.",
  },
  {
    title: "Problem Solving",
    text: "Analytical approach to complex challenges with elegant solutions.",
  },
  {
    title: "Team Collaboration",
    text: "Effective communication and collaboration in agile environments.",
  },
];

export const personalInfo: AboutData[] = [
  { title: "Email", text: "shafiriyuroqeeb@gmail.com", icon: Mail },
  { title: "Phone", text: "+234 7087751548", icon: Phone },
  { title: "Location", text: "Lagos, Nigeria", icon: MapPin },
];
