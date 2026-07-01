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
        "Lagos State University has over 400 acres of campus spread across multiple faculties, departments, and support buildings. New students, visitors, and even staff regularly get lost navigating between locations. There was no official wayfinding tool, no digital map, and no guidance system of any kind. The university relied entirely on asking people for directions. For my final year project, I wanted to solve a real problem I had personally experienced.",

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
