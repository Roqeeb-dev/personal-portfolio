import { Code2, Users } from "lucide-react";

interface AboutData {
  title: string;
  text: string;
  icon: React.ElementType;
}

interface ProjectData {
  image: string;
  title: string;
  description: string;
  technologies: string[];
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
    image: "https://placehold.co/600x400/png",
    title: "Resource Sharing Application",
    description:
      "A collaborative platform that enables users to share, manage, and discover resources seamlessly with real-time updates and secure access control.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
  },
  {
    image: "https://placehold.co/600x400/png",
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive developer portfolio showcasing projects, skills, and experience with smooth animations and optimized performance.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    image: "https://placehold.co/600x400/png",
    title: "E-Commerce Web Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, secure checkout, and user authentication.",
    technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
  },
  {
    image: "https://placehold.co/600x400/png",
    title: "Task Management Dashboard",
    description:
      "A productivity-focused task manager with drag-and-drop support, real-time collaboration, and performance analytics.",
    technologies: ["React", "Redux", "Node.js", "PostgreSQL"],
  },
];
