import {
  ArrowRight,
  Globe,
  Layout,
  BookOpen,
  Blocks,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
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

const PROJECTS: Project[] = [
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

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              Real-world projects built with modern technologies — from
              university platforms to reusable component libraries.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <article className="project-card flex cursor-pointer flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5">
        <header className="flex items-center gap-2.5 px-1 pt-2">
          <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
            <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
          </span>
          <span className="text-sm font-medium tracking-tight text-foreground">
            {project.iconLabel}
          </span>
        </header>

        <div
          className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
          style={{ aspectRatio: project.imageRatio }}
        >
          <div className="project-card__image-inner">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              className="object-cover"
              priority={index < 2}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
            {project.title}
          </h3>
          <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
            {project.description}
          </p>
        </div>

        <div className="flex items-center justify-between px-1 pb-2">
          <p className="text-[12px] tracking-tight text-foreground/50">
            {project.meta}
          </p>
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] font-medium tracking-tight text-foreground/60 hover:text-foreground transition-colors border border-foreground/8 rounded-lg px-2.5 py-1"
              >
                Code
              </Link>
            )}
            {project.demoUrl && (
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] font-medium tracking-tight text-foreground/60 hover:text-foreground transition-colors border border-foreground/8 rounded-lg px-2.5 py-1"
              >
                Demo
              </Link>
            )}
          </div>
        </div>
      </article>
    </FadeIn>
  );
}
