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
    image: "/lasu-nav-bg.png",
    title: "LASU Campus Navigator, Interactive Campus Navigation for LASU",
    shortTitle: "LASU Campus Navigator",
    role: "Software Engineer (team of 3)",
    category: "frontend",
    featured: true,

    recruiterSummary:
      "Interactive campus navigation platform for Lagos State University's Ojo campus, covering 100+ landmarks across 18 faculties and 90 departments. Delivers turn-by-turn routing, offline-capable route planning, and a rule-based campus assistant. Took over and rebuilt a teammate's existing prototype into a production-ready app under ongoing academic supervision.",
    metrics: [
      { value: "100+", label: "landmarks mapped" },
      { value: "18", label: "faculties covered" },
      { value: "90", label: "departments covered" },
      { value: "Live", label: "deployed on Vercel" },
    ],

    problem:
      "Navigating LASU's Ojo campus is difficult for new and returning students alike, with no reliable digital way to find faculties, departments, or offices, or to plan a route across the campus's walkways. The goal was to build a map-based navigation tool that works reliably on campus, including in low-GPS conditions, backed by an accurate and structured database of campus locations.",
    engineerHighlights: [
      "Took over and rebuilt a teammate's existing Leaflet-based prototype after the team decided to consolidate around the strongest version rather than merge two separate builds",
      "Refactored the core AppContent structure to reduce brittleness, splitting logic into smaller helpers, components, and hooks, and separating the landing page out to make the app maintainable at scale",
      "Implemented coordinate-based turn-by-turn routing across Ojo campus walkways, including route planning that functions without GPS",
      "Built a rule-based campus assistant for locating faculties, departments, and offices, plus a graph-debug view for inspecting and validating the routing system",
      "Working through a phased roadmap (3D building display, custom pedestrian routing, admin dashboard, offline PWA support) under weekly progress reviews with a supervising professor",
    ],

    description:
      "An interactive campus navigation app for Lagos State University's Ojo campus. Features an interactive map, smart turn-by-turn navigation, intelligent search, a rule-based campus assistant, and real-time synchronization across a structured campus database of 100+ landmarks, 18 faculties, and 90 departments. Built with a two-person team, with ongoing development into a full offline-capable PWA.",
    technologies: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Firebase",
      "Leaflet",
    ],
    githubRepoLink:
      "https://github.com/khaleedmogaji/LASU-Campus-Navigator.git",
    liveLink: "https://lasu-campus-navigator.vercel.app/",
  },
  {
    image: "/compass-bg.jpg",
    title: "LASU Compass AI, Digital Front Desk for LASU",
    shortTitle: "LASU Compass AI",
    role: "Frontend Developer & Pitch (team of 3)",
    category: "frontend",
    featured: true,

    recruiterSummary:
      "AI-powered digital front desk for Lagos State University, combining Gemma 4 with a curated LASU knowledge base to answer campus questions, guide students through procedures, and generate official letters. Built in a 4-hour hackathon sprint. Won 1st place.",
    metrics: [
      { value: "1st Place", label: "Build with Gemma: GDG on Campus LASU" },
      { value: "4 hours", label: "build sprint" },
      { value: "3", label: "AI-grounded features shipped" },
      { value: "Live", label: "deployed on Vercel" },
    ],

    problem:
      "LASU students lose real time to information scattered across WhatsApp groups, notice boards, and departmental offices, with no single reliable source for course registration, clearance procedures, or official letter formats. The goal was to build an AI assistant grounded in real LASU documentation that answers reliably and speeds up the administrative processes students get stuck on most.",
    engineerHighlights: [
      "Designed a shared chat pipeline (one hook, one set of components) powering both the Campus Assistant and Procedures Guide features, turning three planned features into two real build efforts under a 4-hour clock",
      "Built a RAG-grounded chat interface where answers cite the LASU source document and section, reducing hallucination risk",
      "Architected the Letter Generator around one shared rendering shell driven by per-letter-type configuration, based on real LASU letter formats, rather than a separate component per letter type",
      "Built a live-updating letter preview with a Gemma-powered 'Polish with Gemma' step on the purpose field, and PDF export via html2pdf.js matching the on-screen preview exactly",
      "Led frontend architecture, build, and the live pitch to judges",
    ],

    description:
      "An AI-powered assistant for Lagos State University students. Combines Gemma 4 with a curated LASU knowledge base to answer campus questions, guide students through administrative procedures, and generate downloadable official letters. Built and shipped in a single 4-hour hackathon sprint with a team of three.",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS v4",
      "FastAPI",
      "ChromaDB",
      "Gemma 4",
      "RAG",
      "html2pdf.js",
    ],
    githubRepoLink: "https://github.com/Roqeeb-dev/lasu-compass.git",
    liveLink: "https://lasu-compass.vercel.app/",
  },
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

export interface CaseStudySection {
  problem: string;
  discovery: string[];
  strategy: string;
  design: string[];
  validation: string;
  tradeoffs: string[];
  impact: string;
}

export interface CaseStudyData {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  timeline: string;
  team: string;
  liveLink?: string;
  githubLink?: string;
  coverImage: string;
  tags: string[];
  overview: string;
  sections: CaseStudySection;
}

export const caseStudies: CaseStudyData[] = [
  {
    slug: "lasu-navigate",
    title: "LASU Navigate",
    subtitle:
      "Campus navigation for a 400-acre university with no official wayfinding system",
    role: "Frontend Engineer (solo)",
    timeline: "~5 weeks active development",
    team: "Solo project (Final Year Project)",
    liveLink: "https://lasunav-sable.vercel.app/",
    githubLink: "https://github.com/Roqeeb-dev/lasumap.git",
    coverImage: "/navigate_bg.jpg",
    tags: [
      "Next.js 15",
      "Mapbox GL JS",
      "GeoJSON",
      "TypeScript",
      "React Context",
    ],
    overview:
      "LASU Navigate is a web-based GIS campus navigation app for Lagos State University. Students and visitors can search for buildings, view an interactive campus map, and get guided directions across a 400-acre campus that had no official digital navigation tool before this.",

    sections: {
      problem:
        "Lagos State University has over 400 acres of campus spread across multiple faculties, departments, and support buildings. New students, visitors, and even staff regularly get lost navigating between locations. There was no official wayfinding tool, no digital map, and no guidance system of any kind. The university relied entirely on asking people for directions and physical signage. For my final year project, I wanted to solve a real problem I had personally experienced.",

      discovery: [
        "I spoke with 8 fellow students across different years. All of them had a story about getting lost on campus, especially in their first semester.",
        "The main pain points were: not knowing which building a department was in, not understanding the layout between the main gate and the back campus areas, and having no reference point when a lecturer mentioned a specific venue.",
        "I tested the existing workaround most students used: Google Maps. It showed the general area but had no building-level detail for LASU and didn't know internal campus paths at all.",
        "I identified three core user needs: find a specific building by name, understand the walking route between two points, and get real-time step-by-step guidance without needing to memorise the route.",
      ],

      strategy:
        "I chose a web app over a mobile app deliberately. A web app means no installation friction, works on any device students already have, and is easier to share as a link. For the mapping layer I evaluated Google Maps Embed, Leaflet, and Mapbox GL JS. Mapbox won because of its custom tile styling, GeoJSON overlay support, and the Directions API for routing. Next.js 15 made sense as the foundation given my existing expertise and its server-side capabilities for future phases. I decided against building a custom routing engine from scratch initially, using the Mapbox Directions API as a working foundation while scoping a Dijkstra-based engine as a phase two feature.",

      design: [
        "Built an interactive campus map with custom GeoJSON overlays marking every building, faculty, and key landmark across the LASU campus.",
        "Implemented a search interface that lets users type a building name and get a result with its location highlighted on the map.",
        "Built guided navigation with step-by-step directions using the Mapbox Directions API, rendered as an overlay on the map with clear turn instructions.",
        "Architected map state using React Context to keep the Mapbox GL JS instance decoupled from UI components, avoiding prop-drilling the map object across the tree.",
        "Applied bounding box constraints so the map stays locked within campus boundaries and cannot be panned away accidentally.",
        "Built the UI in Tailwind CSS with a clean, minimal design so the map remains the focus rather than chrome around it.",
      ],

      validation:
        "I tested the navigation flow with 5 students on campus by asking them to find three specific buildings using the app without any guidance from me. All five completed the task. The main friction point was the search interface not handling partial or misspelled building names well, which I addressed by improving the fuzzy match logic. I also personally walked several routes while following the turn-by-turn directions to verify accuracy against the real physical paths.",

      tradeoffs: [
        "Used the Mapbox Directions API for routing rather than a custom engine. This means routing depends on Mapbox's understanding of the area, which is not always accurate for internal campus paths. A Dijkstra-based engine built on a custom campus graph would be more accurate but required more time than the FYP timeline allowed.",
        "The GeoJSON data was manually collected by me walking the campus with a GPS app and logging coordinates. This means the data is as accurate as my own survey, not a professional GIS dataset.",
        "Did not implement user accounts or saved routes in this phase. Returning users start fresh each time, which is acceptable for a wayfinding tool but limits personalisation.",
        "Mobile responsiveness was secondary to desktop during development given the FYP context. A dedicated mobile-first iteration is planned.",
      ],

      impact:
        "LASU Navigate is live and publicly accessible. It was submitted and accepted as a final year project on track for a First Class result. More meaningfully, I have had fellow students tell me they have actually used it to find buildings on campus, which is the outcome that matters most. The phase two roadmap includes a custom Dijkstra routing engine built on a proper campus pedestrian graph, offline support, and a reporting tool so students can flag map inaccuracies.",
    },
  },

  {
    slug: "lasu-compass-ai",
    title: "LASU Compass AI",
    subtitle:
      "The AI-powered digital front desk for Lagos State University, built in a 4-hour hackathon sprint",
    role: "Frontend Developer & Pitch (team of 3)",
    timeline: "4-hour build sprint — Build with Gemma: GDG on Campus LASU",
    team: "Team Pilot — Timilehin Oyinlola (Backend), Temitayo Honfoga (Product & Submission)",
    liveLink: "https://lasu-compass.vercel.app/",
    githubLink: "https://github.com/Roqeeb-dev/lasu-compass.git",
    coverImage: "/compass_bg.jpg",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS v4",
      "FastAPI",
      "ChromaDB",
      "Gemma 4",
      "RAG",
    ],
    overview:
      "LASU Compass AI is an AI-powered assistant for Lagos State University students, combining Gemma 4 with a curated LASU knowledge base to answer campus questions, guide students through administrative procedures, and generate official letters. Built and shipped in a single 4-hour build sprint, it won 1st place at Build with Gemma: GDG on Campus LASU.",

    sections: {
      problem:
        "LASU students lose real time to information that's scattered across WhatsApp groups, notice boards, and departmental offices, with no single reliable source. Course registration steps, clearance procedures, and SIWES deadlines get passed down informally and inconsistently, leading to delays, conflicting information, and unnecessary dependence on senior students for guidance. There was no centralised, trustworthy assistant built specifically for LASU's own processes.",

      discovery: [
        "The problem was well known firsthand: as a final-year student, I had personally experienced the stress of losing an active-semester course form with no way to regenerate it, and had watched classmates repeat the same scattered-information cycle every semester.",
        "Our product manager drafted a PRD ahead of the sprint scoping three features against real recurring student pain points: general campus Q&A, step-by-step procedure guidance, and official letter generation.",
        "Given the 4-hour format, discovery had to happen fast: rather than new user interviews, we grounded the Letter Generator specifically by reviewing real, previously submitted LASU letters (correction of result, over-registration, waiver) to extract the actual structure LASU expects, rather than guessing at a format.",
      ],

      strategy:
        "With three features and a 4-hour clock, the core strategic decision was recognising that Campus Assistant and Procedures Guide didn't need to be built as two separate systems. Both are the same chat interface and the same backend endpoint; Procedures Guide simply adds pre-set buttons that send natural-language queries into the identical pipeline. That reframing turned three features into two real build efforts: one shared chat pipeline, and one form-based letter generator. On the backend, Timilehin used ChromaDB for retrieval-augmented generation so Gemma 4 answered from real LASU documentation rather than general knowledge, reducing hallucination risk. We deliberately cut voice input, image input, and response streaming from scope, judging the added build and testing risk not worth it in the time available, and listed them as roadmap items in the submission instead.",

      design: [
        "Built a shared component system (ChatMessage, ChatInput, TypingIndicator, a reusable useChat hook) so Campus Assistant and Procedures Guide could be assembled from the same pieces rather than duplicated.",
        "Designed the Letter Generator around one shared rendering shell driven by per-letter-type configuration (recipient, through-chain, subject, body as data, not separate components per letter), based on the real LASU letter formats reviewed beforehand.",
        "Built a live-updating letter preview that fills in as the form is completed, rather than a submit-then-reveal flow, so the letter feels tangible while being written.",
        "Added a Gemma-powered 'Polish with Gemma' step on the letter's purpose field, turning a student's rough reason into submittable language, ensuring the model played a meaningful role in all three features, not just the chat ones.",
        "Used html2pdf.js to export the exact rendered preview as a downloadable PDF, keeping the on-screen and downloaded versions visually identical.",
        "Explicitly ruled out an early brainstorm idea to auto-fill a letter by swapping another student's name and credentials onto their form, since that would produce a forged academic document regardless of intent.",
      ],

      validation:
        "With no time for a formal testing phase, validation happened through rapid internal iteration: running the RAG pipeline against real, likely student questions to check retrieval quality, and generating multiple real letter types end-to-end to confirm the shared template shell held up across different recipient chains and body content. The team did a full rehearsed run-through before judging, using real course and letter data rather than dummy placeholders, to catch anything that would break live.",

      tradeoffs: [
        "Chose template-based letter generation over full AI-generated letters for reliability; only the purpose field is AI-polished, keeping the legal/structural parts of each letter deterministic and safe for a live demo.",
        "Skipped PostgreSQL and persistent user accounts entirely, since the MVP didn't need saved state beyond a single session.",
        "Cut voice input, image input, and streaming responses to protect build time; each was judged to add more testing risk than it was worth within 4 hours.",
        "The RAG knowledge base was limited to documents the team could gather and clean before the sprint started, so coverage is only as complete as that pre-sprint research.",
      ],

      impact:
        "LASU Compass AI won 1st place at Build with Gemma: GDG on Campus LASU, judged on Gemma integration, innovation and impact, functionality, and presentation. I led the frontend architecture and build and delivered the live pitch to judges. The project is deployed and publicly accessible, with the Letter Generator producing downloadable PDFs based on real LASU letter formats. Next steps under consideration include the previously scoped roadmap items (voice input, image input) and hardening the knowledge base with a fuller set of official LASU documentation.",
    },
  },

  {
    slug: "lasu-campus-navigator",
    title: "LASU Campus Navigator",
    subtitle:
      "Interactive campus navigation for Lagos State University's Ojo campus, taken over mid-build and rebuilt into a production-ready app",
    role: "Software Engineer (team of 3)",
    timeline:
      "Ongoing — Phase 1 development, weekly reviews with a supervising professor",
    team: "Roqeeb (Engineer),Khaleed Mogaji and Tijani Olamilekan",
    liveLink: "https://lasu-campus-navigator.vercel.app/",
    githubLink: "https://github.com/khaleedmogaji/LASU-Campus-Navigator.git",
    coverImage: "/campus-navigator-bg.jpg",
    tags: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Firebase",
      "Leaflet",
    ],
    overview:
      "LASU Campus Navigator is an interactive navigation app for Lagos State University's Ojo campus, covering 100+ landmarks across 18 faculties and 90 departments. It combines an interactive map, turn-by-turn routing, intelligent search, and a rule-based campus assistant, backed by a structured, real-time-synced campus database. Started as a two-person team project, it's now being developed toward a fuller offline-capable app.",

    sections: {
      problem:
        "New and returning LASU students have no reliable digital way to find faculties, departments, or offices, or to plan a route across the Ojo campus's walkways. The goal was a map-based navigation tool that works reliably on campus, including in low-GPS conditions, backed by an accurate, structured database of campus locations.",

      discovery: [
        "The project started as parallel work: Khaleed, a product designer with limited coding experience, had already produced a Leaflet-based prototype that was visually stronger than the other in-progress version.",
        "Rather than merge two separately built codebases, the team made the call to consolidate around Khaleed's existing build and improve it from there, avoiding the integration risk of stitching together divergent implementations.",
        "The project runs under academic supervision, with weekly progress reviews with Prof. Aribisala Benjamin shaping the phased roadmap.",
      ],

      strategy:
        "With the decision made to build on Khaleed's existing prototype rather than start fresh, the core strategic move was stabilizing the codebase before adding features. The original AppContent structure was becoming brittle as functionality grew, so the priority was refactoring it into smaller helpers, components, and hooks, and separating the landing page out of the main app flow, before layering on admin routing and further features. Phase 1 prioritizes offline PWA support as the next iteration, alongside custom pedestrian routing, an admin dashboard, and analytics, followed by dedicated testing and feedback weeks.",

      design: [
        "Implemented coordinate-based turn-by-turn routing across Ojo campus walkways, including route planning that works without GPS.",
        "Built a rule-based campus assistant for locating faculties, departments, and offices by name.",
        "Added a graph-debug view for inspecting and validating the underlying routing system during development.",
        "Refactored AppContent by splitting logic into smaller helpers, components, and hooks, and pulling the landing page out of the main app shell to keep the codebase manageable as scope grew.",
        "Structured the campus database around real-time synchronization, covering 100+ landmarks, 18 faculties, and 90 departments.",
      ],

      validation:
        "Validation runs through the weekly progress reviews with the supervising professor, which check the routing accuracy and campus database completeness against real Ojo campus geography as each phase lands.",

      tradeoffs: [
        "Chose to consolidate on one teammate's existing prototype rather than merge two independent builds, trading a from-scratch rebuild for faster consolidation at the cost of inheriting that codebase's existing structure.",
        "Prioritized refactoring the core app structure before adding new features, accepting slower visible progress in exchange for a codebase that could support the full Phase 1 roadmap.",
        "Deferred AI-powered assistant capabilities, QR-code navigation, indoor routing, and 3D building display to a later stage — 3D display in particular is lower priority and may not ship at all — keeping the current build focused on core map-based navigation and offline reliability.",
      ],

      impact:
        "The app is live and deployed on Vercel, currently delivering an interactive campus map, smart navigation, intelligent search, a rule-based campus assistant, a structured campus database, real-time synchronization, responsive UX, voice navigation, and performance optimization. Phase 1 work is underway on offline PWA support (the current priority), custom pedestrian routing, an admin dashboard, and analytics, with AI-powered assistant features, indoor routing, and possibly 3D building display planned further out.",
    },
  },

  {
    slug: "tayora-sustain",
    title: "Tayora Sustain",
    subtitle:
      "A three-sided circular economy marketplace for textile waste in the Nigerian fashion industry",
    role: "Frontend Engineer (solo)",
    timeline: "Under 3 weeks to stable beta",
    team: "Frontend (me) + Backend developer (Python/FastAPI)",
    liveLink: "https://tayorasustain.vercel.app",
    githubLink: "https://github.com/Roqeeb-dev/tayora_sustain.git",
    coverImage: "/tayora-bg.jpg",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS v4",
      "Zustand",
      "TanStack Query",
      "Cloudinary",
      "FastAPI",
    ],
    overview:
      "Tayora Sustain is a circular economy marketplace connecting textile waste suppliers, material requesters, and platform admins in a three-sided flow. Suppliers list waste materials, requesters match and claim them, and admins oversee the entire lifecycle. I built the complete frontend solo while a separate developer handled the Python/FastAPI backend.",

    sections: {
      problem:
        "The Nigerian fashion industry generates significant textile waste with no structured system for redistribution or reuse. Offcuts, deadstock, and production waste end up discarded when small designers, craftspeople, and manufacturers could use them. Tayora Sustain was conceived to bridge that gap by creating a platform where waste becomes a resource. The challenge on the frontend was building three distinct user experiences with different roles, permissions, and flows in a very short timeline.",

      discovery: [
        "The product direction came from the client and backend developer who had done prior research with fabric suppliers and small-scale fashion designers in Lagos.",
        "Key insight from that research: suppliers needed a simple listing interface because most were not highly technical. Requesters needed to be able to browse and filter by material type and quantity. Admins needed visibility into the full flow without needing to intervene in every transaction.",
        "I mapped out the three user journeys before writing any code: supplier (list, manage, track status), requester (browse, claim, track), admin (overview, approve, manage users). This became the architecture blueprint.",
        "The most important frontend constraint identified upfront: role-based access had to be airtight. A requester must never see admin controls. A supplier must only see their own listings.",
      ],

      strategy:
        "I chose a single Next.js 15 app with role-based routing rather than three separate apps. This kept the codebase unified and deployment simple. TanStack Query handled all server state because the material flow involved frequent status updates that needed to stay in sync. Zustand was scoped strictly to UI state only: modal open/close, active tab, sidebar collapse. No business logic touched Zustand. Cloudinary was the obvious choice for image uploads given it handles transformation and CDN delivery without backend involvement. Tailwind CSS v4 gave me the speed I needed to build three portal experiences inside three weeks.",

      design: [
        "Built three separate portal views (supplier, requester, admin) under a single authentication system with role-based redirects on login.",
        "Supplier portal: listing creation form with Cloudinary image upload, client-side preview, and optimistic UI updates so suppliers see their listing appear immediately without waiting for a server response.",
        "Requester portal: browsable material feed with filter controls by type and availability, a claim flow with status tracking, and a dashboard showing claimed materials and their current stage.",
        "Admin portal: full overview of all listings, all users, and all transactions with controls to approve, flag, or remove content.",
        "Modelled the material lifecycle as a discrete status machine: submitted, collected, sorted, matched, fulfilled. Each status transition was reflected clearly in both the supplier and requester views so both parties always knew where a material was in the flow.",
        "Protected route handling via a custom hook that checked the Zustand auth state and redirected unauthenticated or wrong-role users before rendering.",
      ],

      validation:
        "Tested with a small closed beta group of under 10 users including the client and a few real textile suppliers and designers. The main issues surfaced were: the listing form was too long on mobile (fixed by splitting into steps), and the status labels were not clear to non-technical users (renamed and added plain-language descriptions). I did not have the time or resources for formal usability testing, but the iterative feedback loop with the beta group was enough to catch the most critical friction points.",

      tradeoffs: [
        "Used sessionStorage for token persistence after a cross-origin auth issue with the FastAPI backend's httpOnly cookies not surviving across the Next.js frontend domain. A proper solution would be server-side cookie handling via a Next.js API route proxy, which is scoped for a later phase.",
        "Optimistic UI updates on the supplier portal meant that in rare cases where the API call failed, the UI showed a listing that did not actually persist. This was mitigated with error boundaries and rollback logic but not fully eliminated.",
        "Did not build a notification system in this phase. Users have to manually refresh or revisit their dashboard to see status changes. A real-time update system via WebSockets or polling is planned.",
        "The three-portal architecture inside one codebase meant the bundle size was larger than a single-role app. This was acceptable for the beta but will need code-splitting attention before a public launch.",
      ],

      impact:
        "Tayora Sustain is live in closed beta with active testers. The core flow, from listing a material to a requester claiming it, works end to end. The client has a functioning product to show potential partners and investors. For me personally, this project compressed more real engineering decisions into three weeks than most side projects manage in months: cross-origin auth debugging, optimistic updates, role-based architecture, and multi-portal UX all in a single codebase.",
    },
  },

  {
    slug: "cognify",
    title: "Cognify",
    subtitle:
      "A full-featured AI-powered learning management system with student and instructor experiences",
    role: "Frontend Engineer (solo)",
    timeline: "~2 months, live since launch",
    team: "Frontend (me) + Backend developer (Node.js/Express/MongoDB)",
    liveLink: "https://ai-lms-ui.vercel.app",
    githubLink: "https://github.com/Roqeeb-dev/ai-lms-ui.git",
    coverImage: "/cognify-bg.png",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "OpenAI API",
    ],
    overview:
      "Cognify is a production-grade LMS with student and instructor dashboards, course creation, multi-format lesson delivery (video, PDF, text), progress tracking, and an AI tutor. I built the entire frontend solo while a backend developer handled the Node.js, Express, and MongoDB layer.",

    sections: {
      problem:
        "Most LMS products are either too complex for small educators or too limited for serious course delivery. Cognify was scoped to hit the middle: a clean, fast interface for instructors to build and manage courses, and a focused learning experience for students with AI-assisted support. The frontend challenge was building two completely different user experiences with different data needs, different navigation structures, and different permissions without the codebase becoming unmanageable.",

      discovery: [
        "The product scope came from collaborative planning between me and the backend developer. We drew from common LMS patterns (Udemy, Moodle) and stripped them to what actually mattered for a first version.",
        "Core instructor needs identified: create a course with multiple sections and lessons, upload different content types per lesson, see which students enrolled, track completion rates.",
        "Core student needs: browse and enrol in courses, pick up where they left off, get help when stuck on a concept, see their progress clearly.",
        "Key technical constraint identified early: the instructor and student dashboards needed to share some components (course cards, progress bars, video players) but have completely different data access patterns. This shaped the architecture more than anything else.",
      ],

      strategy:
        "I established a clear data flow before writing any component: API service functions at the bottom, TanStack Query hooks in the middle, and presentational components at the top. No component fetches data directly. No hook stores UI state. Zustand handles only what TanStack Query cannot: modal state, active sidebar item, drawer open/close. This separation meant I could build and test each layer independently. For role handling I put guards in hooks rather than layout components so the access logic could be reused across different parts of the app without duplication. OpenAI integration was scoped as a stub in this phase, structured to accept any LLM provider without touching the UI.",

      design: [
        "Student dashboard: course library with enrolment flow, a dedicated learning view for each lesson with progress tracking, a sidebar showing course structure and completion status, and an AI tutor panel that accepts questions about the current lesson content.",
        "Instructor dashboard: course creation wizard with section and lesson management, a file upload interface for video, PDF, and text content per lesson, an analytics overview showing enrolled students and completion rates, and a student roster per course.",
        "Established a ServerType / NormalizedType pattern: raw API responses are transformed at the service layer into a consistent shape before they touch any hook or component. This meant no scattered null-checking or shape-mapping across the UI.",
        "Hooks return both data and handler functions and own their own toast notifications. Parent components call a hook and get back everything they need without wiring up separate mutation handlers.",
        "Role guards implemented as hook-level checks rather than layout wrappers. This made the guards reusable, testable, and independent of where in the component tree a protected feature lives.",
      ],

      validation:
        "Cognify has been live for approximately two months and has tracked 500+ unique visitors via Vercel Analytics. I tested the core flows myself extensively before launch: full course creation as an instructor, full enrolment and lesson completion as a student, and the AI tutor response quality across different question types. I did not run formal user testing sessions but the analytics data and the absence of critical bug reports from visitors suggests the core flows are stable.",

      tradeoffs: [
        "The AI tutor in the current version is a stub. It sends the lesson content and student question to OpenAI but does not maintain conversational context across messages. A proper implementation would include message history in the prompt, which increases token usage and cost and was deferred to a later phase.",
        "Video content is uploaded and served via the backend rather than through a dedicated video CDN. This works at current scale but will not hold up under heavy concurrent load. A migration to a service like Mux or Cloudinary Video is planned before any significant user growth.",
        "Course analytics in the instructor dashboard are basic: enrolment count and completion rate only. Deeper engagement data (time per lesson, drop-off points, replay frequency) would require more instrumentation than the current backend exposes.",
        "No mobile-optimised learning view in this phase. The lesson player layout breaks below 768px in ways that need a dedicated redesign rather than just responsive tweaks.",
      ],

      impact:
        "Cognify is live, functional, and has had over 500 unique visitors since launch. The architecture decisions made on this project, specifically the ServerType/NormalizedType pattern, hook-level role guards, and the strict Zustand/TanStack Query separation, have carried into every project I have built since. It is the project that shifted how I think about frontend architecture from component-first to data-flow-first.",
    },
  },
];
