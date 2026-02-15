import { Code, Code2, Mail, MapPin, Phone, Users } from "lucide-react";

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
    image: "/uni-bg.jpg",
    title: "Resource Sharing Application",
    description:
      "A collaborative platform that enables users to share, manage, and discover resources seamlessly with real-time updates and secure access control.",
    technologies: [
      "React",
      "Javascript",
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
    title: "Khurizah Innovation Website",
    description:
      "A modern, responsive company website for Khurizah Innovation, showcasing the company's mission, services, and team with smooth animations and a clean, professional design.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubRepoLink: "",
    liveLink: "https://khurizah-innovation.vercel.app/",
  },
  {
    image: "/uni-bg.jpg",
    title: "E-Commerce Web Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, secure checkout, and user authentication.",
    technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    githubRepoLink: "",
    liveLink: "",
  },
  {
    image: "/uni-bg.jpg",
    title: "Task Management Dashboard",
    description:
      "A productivity-focused task manager with drag-and-drop support, real-time collaboration, and performance analytics.",
    technologies: ["React", "Redux", "Node.js", "PostgreSQL"],
    githubRepoLink: "",
    liveLink: "",
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
  { text: "Node.js", proficiency: 60 },
  { text: "Express.js", proficiency: 60 },
  { text: "MongoDB", proficiency: 60 },
  { text: "Git", proficiency: 60 },
  { text: "RESTful APIs", proficiency: 60 },
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
