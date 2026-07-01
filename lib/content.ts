import {
  Blocks,
  BookOpen,
  Globe,
  Layout,
  type LucideIcon,
} from "lucide-react";

/**
 * Single source of truth for all site copy and structured content.
 *
 * Why a typed TS module instead of JSON:
 * - Some fields hold React component references (e.g. project icons) and
 *   computed values (e.g. imageRatio: 16 / 10) that JSON cannot represent.
 * - Type safety, autocomplete and safe refactoring across the codebase.
 *
 * To edit site text, change values here — components read from this file.
 */

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

export const hero = {
  greeting: "Hey",
  greetingEmoji: "👋",
  name: "I\u2019m Farrukh",
  headingLines: ["I build things", "for the web."] as const,
  tagline:
    "Frontend engineer focused on React & Next.js — fast, accessible, and built to last.",
  portrait: {
    src: "/farrukh.jpg",
    alt: "Farrukh Djumayev portrait",
  },
  ctas: {
    primary: { label: "View My Work", href: "/projects" },
    resume: { label: "Resume", href: "/FarrukhsResume.pdf" },
  },
} as const;

/* -------------------------------------------------------------------------- */
/* Projects                                                                   */
/* -------------------------------------------------------------------------- */

export type Project = {
  id: string;
  icon: LucideIcon;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "kokand-university",
    icon: Globe,
    iconLabel: "Kokand University",
    title:
      "Responsive university and alumni website with clean architecture, accessible UI, and optimized frontend performance.",
    description:
      "Built with React, Next.js, TypeScript, and Tailwind CSS. Features accessible UI components, responsive layouts, and production-grade performance.",
    meta: "React · Next.js · TypeScript · Tailwind CSS, 2024",
    imageRatio: 16 / 10,
    image: "/projects/kokand_university_lightMode.png",
    imageAlt: "Kokand University website screenshot",
    githubUrl: "https://github.com/Farrukh-Front-Dev/kokand_university",
    demoUrl: "https://kualumni.uz/",
  },
  {
    id: "kelajakka-qadam",
    icon: BookOpen,
    iconLabel: "Kelajakka Qadam",
    title: "Minimal responsive promo website for an educational center.",
    description:
      "Showcases an educational center's links and information. Built with pure HTML, CSS, and JavaScript — clean and fast.",
    meta: "HTML · CSS · JavaScript, 2024",
    imageRatio: 16 / 10,
    image: "/projects/kelajakka_qadam_markazi_lightMode.png",
    imageAlt: "Kelajakka Qadam Markazi website screenshot",
    githubUrl: "https://github.com/Farrukh-Front-Dev/KelajakkaQadam",
    demoUrl: "https://kelajakka-qadam-markazi.vercel.app/",
  },
  {
    id: "portfolio",
    icon: Layout,
    iconLabel: "Portfolio Website",
    title:
      "Personal portfolio built with Next.js, Tailwind CSS, and TypeScript, featuring dark mode and glassmorphism UI.",
    description:
      "A showcase of my work and skills. Built with Next.js and Tailwind CSS, featuring glassmorphism UI, dark/light mode, and smooth animations.",
    meta: "Next.js · TypeScript · Tailwind CSS, 2024",
    imageRatio: 16 / 10,
    image: "/projects/portfolio_website_lightMode.png",
    imageAlt: "Portfolio website screenshot",
    githubUrl: "https://github.com/Farrukh-Front-Dev/portfolio",
  },
  {
    id: "react-dev-components",
    icon: Blocks,
    iconLabel: "React Dev Components",
    title:
      "Collection of reusable React UI components with scalable structure and responsive design patterns.",
    description:
      "A library of reusable React components following scalable architecture principles. Responsive, accessible, and ready for production.",
    meta: "React · TypeScript · CSS, 2024",
    imageRatio: 16 / 10,
    image: "/projects/reactdev_lightMode.png",
    imageAlt: "React Dev Components screenshot",
    githubUrl: "https://github.com/Farrukh-Front-Dev/ReactDev",
    demoUrl: "https://react-dev-components.vercel.app/",
  },
];

/* -------------------------------------------------------------------------- */
/* About — Experience                                                         */
/* -------------------------------------------------------------------------- */

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  slug?: string;
  brand?: string;
};

export const experience: ExperienceEntry[] = [
  {
    company: "Independent",
    role: "Frontend Developer",
    period: "2024 – Present",
    brand: "#0AE448",
  },
  {
    company: "School 21 / 42 Network",
    role: "Software Engineering Student",
    period: "2024 – Present",
    brand: "#1f1f1f",
  },
  {
    company: "Najot Ta'lim",
    role: "Frontend Development Program",
    period: "Completed",
    brand: "#2F74C0",
  },
];

/* -------------------------------------------------------------------------- */
/* About — Education                                                          */
/* -------------------------------------------------------------------------- */

export type EducationEntry = {
  school: string;
  degree: string;
  period: string;
  slug?: string;
};

export const education: EducationEntry[] = [
  {
    school: "School 21 / 42 Network",
    degree: "Software Engineering Program",
    period: "2024 – Present",
  },
  {
    school: "Najot Ta'lim",
    degree: "Frontend Development Program",
    period: "Completed",
  },
];

/* -------------------------------------------------------------------------- */
/* About — Skills                                                             */
/* -------------------------------------------------------------------------- */

export const skills: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Redux Toolkit",
  "HTML5 / CSS3",
  "REST API Integration",
  "Git & GitHub",
  "Docker",
  "Component Architecture",
  "Responsive Design",
];

/* -------------------------------------------------------------------------- */
/* About — Stack (physics chips)                                              */
/* -------------------------------------------------------------------------- */

export type StackChip = {
  label: string;
  slug: string;
  bg: string;
  fg: string;
  iconUrl?: string;
};

export const stackChips: StackChip[] = [
  { label: "React", slug: "react", bg: "#1FB6CB", fg: "#ffffff" },
  { label: "Next.js", slug: "nextdotjs", bg: "#1f1f1f", fg: "#ffffff" },
  { label: "TypeScript", slug: "typescript", bg: "#2F74C0", fg: "#ffffff" },
  { label: "JavaScript", slug: "javascript", bg: "#F7DF1E", fg: "#1f1f1f" },
  { label: "Tailwind CSS", slug: "tailwindcss", bg: "#2BBCF5", fg: "#ffffff" },
  { label: "Redux Toolkit", slug: "redux", bg: "#764ABC", fg: "#ffffff" },
  { label: "Git", slug: "git", bg: "#F05032", fg: "#ffffff" },
  { label: "GitHub", slug: "github", bg: "#181717", fg: "#ffffff" },
  { label: "Docker", slug: "docker", bg: "#2496ED", fg: "#ffffff" },
  { label: "Postman", slug: "postman", bg: "#FF6C37", fg: "#ffffff" },
];

/* -------------------------------------------------------------------------- */
/* Contact                                                                    */
/* -------------------------------------------------------------------------- */

export const contact = {
  heading: "Let\u2019s connect",
  subtitle:
    "I\u2019m always open to new opportunities and collaborations. Feel free to reach out through any of the channels below!",
  cta: { label: "See projects", href: "/projects" },
  socials: {
    email: "mailto:farrukh.front.dev@gmail.com",
    linkedin: "https://www.linkedin.com/in/farrukhdjumayev",
    github: "https://github.com/Farrukh-Front-Dev",
  },
  copyright: "2025 © Farrukh Djumayev",
  role: "Frontend Engineer",
} as const;
