"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ThreeBackground from "@/components/ThreeBackground";

const skills = [
  { name: "HTML", icon: "fa-brands fa-html5", color: "#e34f26" },
  { name: "CSS", icon: "fa-brands fa-css3-alt", color: "#1572b6" },
  { name: "JavaScript", icon: "fa-brands fa-js", color: "#f7df1e" },
  { name: "TailwindCSS", icon: "fa-solid fa-wind", color: "#38bdf8" },
  { name: "Next.js", icon: "fa-solid fa-server", color: "#f4f7fb" },
  { name: "React", icon: "fa-brands fa-react", color: "#61dafb" },
  { name: "TypeScript", icon: "fa-brands fa-js", color: "#3178c6" },
  { name: "Node.js", icon: "fa-brands fa-node-js", color: "#5fa04e" },
  { name: "Django", icon: "fa-solid fa-code", color: "#44b78b" },
  { name: "Python", icon: "fa-brands fa-python", color: "#3776ab" },
  { name: "PostgreSQL", icon: "fa-solid fa-database", color: "#4169e1" },
  { name: "Three.js", icon: "fa-solid fa-cube", color: "#f59e0b" },
  { name: "UI Systems", icon: "fa-solid fa-bezier-curve", color: "#2dd4bf" },
];

const projects = [
  {
    title: "Commerce OS",
    label: "Retail Platform",
    image: "/project_ecommerce.png",
    description:
      "A polished daily essentials platform shaped around fast browsing, simple purchasing, and a calm customer journey.",
    stack: ["Next.js", "Payments", "Catalog"],
  },
  {
    title: "Community Grid",
    label: "Organization",
    image: "/project_organization.png",
    description:
      "A coordination hub for volunteer programs, support requests, and community impact workflows.",
    stack: ["Dashboard", "Operations", "CRM"],
  },
  {
    title: "Learning Layer",
    label: "Education",
    image: "/project_education.png",
    description:
      "An accessible learning platform for courses, e-books, and guided study paths with a focused student experience.",
    stack: ["Courses", "Content", "UX"],
  },
];

const metrics = [
  { value: "36+", label: "platforms delivered" },
  { value: "4", label: "product domains" },
  { value: "99%", label: "detail obsession" },
];

export default function Home() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".section-anim").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--bg-color)] text-[var(--text-color)]">
      <Navbar theme={theme} setTheme={setTheme} />
      <ThreeBackground theme={theme} />

      <main>
        <section
          id="home"
          className="relative flex min-h-screen w-full items-center px-5 pt-28 sm:px-8 lg:px-12"
        >
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="section-anim max-w-3xl">
              <div className="mb-7 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted-color)]">
                <span className="h-px w-10 bg-[var(--line-color)]" />
                Portfolio / Full Stack Developer
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-tight sm:text-7xl lg:text-8xl">
                Building clean digital systems with a premium edge.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted-color)] sm:text-xl">
                I am Yuvraj Shah, a full stack developer turning practical ideas
                into fast, elegant, and memorable products.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#projects" className="primary-action">
                  View selected work
                </a>
                <a href="#contact" className="secondary-action">
                  Start a project
                </a>
              </div>
            </div>

            <div className="section-anim relative mx-auto w-full max-w-[520px] lg:ml-auto">
              <div className="profile-frame">
                <Image
                  src="/website1.jpg"
                  alt="Portrait of Yuvraj Shah"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="object-cover"
                />
                <div className="profile-panel">
                  <span>Available for select builds</span>
                  <strong>Nepal based / global ready</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-band px-5 py-24 sm:px-8 lg:px-12">
          <div className="section-anim mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">About</p>
              <h2 className="section-heading">Simple interfaces. Serious engineering.</h2>
            </div>
            <div className="space-y-8">
              <p className="text-2xl font-medium leading-10 tracking-tight sm:text-3xl">
                I design and develop platforms that feel direct, modern, and
                reliable. The goal is always the same: reduce friction, clarify
                the product, and make the experience feel beautifully inevitable.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {metrics.map((item) => (
                  <div key={item.label} className="metric-card">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="px-5 py-24 sm:px-8 lg:px-12">
          <div className="section-anim mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow">Stack</p>
                <h2 className="section-heading">Tools I use to ship.</h2>
              </div>
              <p className="max-w-md text-[var(--muted-color)]">
                Frontend polish, backend structure, and product judgment in one
                build loop.
              </p>
            </div>

            <div className="skill-grid">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-tile">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <i
                    className={`${skill.icon} skill-logo`}
                    style={{ color: skill.color }}
                    aria-hidden="true"
                  />
                  <strong>{skill.name}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-band px-5 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="section-anim mb-14 max-w-3xl">
              <p className="eyebrow">Selected Work</p>
              <h2 className="section-heading">Product work with a quiet premium feel.</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.title} className="project-card section-anim">
                  <div className="project-image">
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      sizes="(max-width: 1024px) 92vw, 390px"
                      className="object-cover"
                    />
                  </div>
                  <div className="project-copy">
                    <span>{project.label}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <em key={item}>{item}</em>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="section-anim mx-auto flex max-w-5xl flex-col items-center px-5 py-28 text-center sm:px-8 lg:px-12"
        >
          <p className="eyebrow">Contact</p>
          <h2 className="text-5xl font-semibold leading-none tracking-tight sm:text-7xl">
            Let&apos;s make the next thing feel inevitable.
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted-color)]">
            Bring the idea. I&apos;ll help shape the interface, architecture,
            and launch path into something crisp enough to stand on its own.
          </p>
          <a
            href="mailto:yuvrajshah.nick@gmail.com"
            className="primary-action mt-10"
          >
            yuvrajshah.nick@gmail.com
          </a>
        </section>
      </main>

      <footer className="border-t border-[var(--line-color)] px-5 py-8 text-center text-sm text-[var(--muted-color)]">
        © 2026 Yuvraj Shah. Designed and built with care.
      </footer>
    </div>
  );
}
