import { Code2, Mail, MapPin, Phone, Users } from "lucide-react";

interface AboutData {
  title: string;
  text: string;
  icon?: React.ElementType;
}

interface TechStackData {
  text: string;
  proficiency?: number;
}

interface ProjectData {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  githubRepoLink: string;
  liveLink: string;
  comingSoon?: boolean;
}

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

export const projectData: ProjectData[] = [
  {
    image: "/cognify-bg.png",
    title: "Cognify – AI Learning Management System",
    description:
      "An intelligent LMS powered by AI that personalizes learning experiences, tracks student progress, and delivers adaptive content — designed to make education smarter, more engaging, and accessible. I worked on the frontend of this application",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
    ],
    githubRepoLink: "",
    liveLink: "https://ai-lms-ui.vercel.app",
  },
  {
    image: "/uni-bg.jpg",
    title: "Unisphere – Resource Sharing Platform",
    description:
      "A full-stack collaborative platform that allows users to share, manage, and discover academic and professional resources, featuring real-time updates, secure authentication, and role-based access control.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    githubRepoLink: "https://github.com/Roqeeb-dev/unisphere.git",
    liveLink: "https://unisphere-frontend.vercel.app/",
  },
  {
    image: "/khurizah-bg.jpg",
    title: "Khurizah Innovation – Corporate Website",
    description:
      "A modern and responsive corporate website built to showcase Khurizah Innovation’s mission, services, and team, featuring smooth animations, clean layouts, and optimized performance.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubRepoLink:
      "https://github.com/Roqeeb-dev/khurizah-innovation-website.git",
    liveLink: "https://khurizah-innovation.vercel.app/",
  },
  {
    image: "/blog-bg.jpg",
    title: "Digital Journal & Productivity Dashboard",
    description:
      "A role-based digital journal platform built with Next.js, featuring a secure admin dashboard, responsive design, clean UI, and persistent state management.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Local Storage",
      "SEO",
    ],
    githubRepoLink: "https://github.com/Roqeeb-dev/digital-journal.git",
    liveLink: "https://digital-journal-five.vercel.app/",
  },
  {
    image: "/port-bg.jpg",
    title: "Personal Portfolio – Developer Showcase",
    description:
      "A high-performance personal portfolio website built with Next.js, featuring smooth animations, responsive layouts, modern UI/UX design, and SEO optimization.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubRepoLink: "https://github.com/Roqeeb-dev/personal-portfolio.git",
    liveLink: "https://portfolio-tawny-omega-37.vercel.app/",
  },
];

export const techStackData: TechStackData[] = [
  { text: "HTML5", proficiency: 90 },
  { text: "CSS3", proficiency: 85 },
  { text: "Tailwind CSS", proficiency: 90 },
  { text: "JavaScript", proficiency: 75 },
  { text: "TypeScript", proficiency: 75 },
  { text: "React", proficiency: 80 },
  { text: "Next.js", proficiency: 70 },
  { text: "Node.js", proficiency: 70 },
  { text: "Express.js", proficiency: 70 },
  { text: "MongoDB", proficiency: 60 },
  { text: "Git", proficiency: 75 },
  { text: "RESTful APIs", proficiency: 70 },
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
