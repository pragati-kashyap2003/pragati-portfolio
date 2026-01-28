"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";
import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Navbar, SectionId, sectionOrder } from "@/components/Navbar";
import { SectionShell } from "@/components/SectionShell";
import { resume } from "@/lib/resume";

type Direction = 1 | -1;

export default function Page() {
  const [active, setActive] = useState<SectionId>("home");
  const [direction, setDirection] = useState<Direction>(1);
  const reduceMotion = useReducedMotion();

  const indexOf = useCallback((id: SectionId) => sectionOrder.indexOf(id), []);

  const onSelect = useCallback(
    (id: SectionId) => {
      const d: Direction = indexOf(id) >= indexOf(active) ? 1 : -1;
      setDirection(d);
      setActive(id);
    },
    [active, indexOf],
  );

  const variants = useMemo(() => {
    if (reduceMotion) {
      return {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0 },
      };
    }
    return {
      enter: (d: Direction) => ({ x: d > 0 ? 48 : -48, opacity: 0 }),
      center: { x: 0, opacity: 1 },
      exit: (d: Direction) => ({ x: d > 0 ? -48 : 48, opacity: 0 }),
    };
  }, [reduceMotion]);

  const current = useMemo(() => {
    switch (active) {
      case "home":
        return (
          <SectionShell
            title="Hi, I’m Pragati."
            subtitle="I build clean, modern web apps and ML-driven systems—with a focus on reliability, UX, and real-world impact."
          >
            <div className="grid gap-4 md:grid-cols-12">
              <div className="md:col-span-5">
                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-3xl ring-1 ring-purple-200/70 dark:ring-purple-400/20 sm:h-36 sm:w-36">
                      <Image
                        src="/profile-placeholder.svg"
                        alt="Pragati Kashyap profile picture"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xl font-bold text-purple-950 dark:text-fuchsia-100">
                        {resume.name}
                      </div>
                      <div className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                        CSE • Full‑stack + ML Projects
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <a
                          className="rounded-xl bg-purple-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-800"
                          href={resume.links[1]?.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                        </a>
                        <a
                          className="rounded-xl border border-purple-200/70 bg-white/70 px-4 py-2 text-sm font-semibold text-purple-950 shadow-sm transition hover:bg-[color:var(--card)] dark:border-purple-400/20 dark:bg-white/5 dark:text-fuchsia-100"
                          href={resume.links[0]?.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="md:col-span-7">
                <div className="grid gap-4">
                  <Card title="Quick Highlights">
                    <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-300">
                      <li>Finalist — SAP HackFest 2025 (Top 70 of 5,000+ teams)</li>
                      <li>Built an Ethical AI Governance Toolkit for auditing models/datasets</li>
                      <li>Built a Train Congestion Prediction & Optimization system (~80% accuracy)</li>
                    </ul>
                  </Card>

                  <Card title="Contact">
                    <div className="flex flex-col gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <div>
                        <span className="font-semibold">Email:</span>{" "}
                        <a className="underline" href={`mailto:${resume.email}`}>
                          {resume.email}
                        </a>
                      </div>
                      <div>
                        <span className="font-semibold">Mobile:</span> {resume.phone}
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => onSelect("projects")}
                        className="rounded-xl bg-[color:var(--card)] px-4 py-2 text-sm font-semibold text-purple-950 ring-1 ring-purple-200/70 transition hover:bg-purple-100 dark:text-fuchsia-100 dark:ring-purple-400/20 dark:hover:bg-white/10"
                      >
                        View Projects →
                      </button>
                      <button
                        type="button"
                        onClick={() => onSelect("contact")}
                        className="rounded-xl bg-purple-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-800"
                      >
                        Contact →
                      </button>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs text-slate-500 dark:text-slate-400">
              Replace <span className="font-semibold">/public/profile-placeholder.svg</span>{" "}
              with your real profile photo (same filename) to update the image automatically.
            </p>
          </SectionShell>
        );

      case "about":
        return (
          <SectionShell title="About" subtitle="A quick overview of my background and what I enjoy building.">
            <div className="grid gap-4 md:grid-cols-2">
              <Card title="What I’m focused on">
                <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-300">
                  <li>Full‑stack web apps with clean UI and strong UX</li>
                  <li>ML systems that connect predictions to real-time dashboards</li>
                  <li>Security-aware development and ethical AI tooling</li>
                </ul>
              </Card>
              <Card title="Currently">
                <div className="text-sm text-slate-700 dark:text-slate-300">
                  B.Tech CSE (LPU) • Building projects in React/Node and Python.
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge>Purple/white UI</Badge>
                  <Badge>Mobile-first</Badge>
                  <Badge>Slide transitions</Badge>
                </div>
              </Card>
            </div>
          </SectionShell>
        );

      case "skills":
        return (
          <SectionShell title="Skills" subtitle="Tools I use and topics I’m comfortable with.">
            <div className="grid gap-4 md:grid-cols-2">
              <Card title="Languages">
                <div className="flex flex-wrap gap-2">
                  {resume.skills.languages.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </Card>
              <Card title="Frameworks">
                <div className="flex flex-wrap gap-2">
                  {resume.skills.frameworks.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </Card>
              <Card title="Tools / Platforms">
                <div className="flex flex-wrap gap-2">
                  {resume.skills.toolsPlatforms.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </Card>
              <Card title="Soft Skills">
                <div className="flex flex-wrap gap-2">
                  {resume.skills.softSkills.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </Card>
            </div>
          </SectionShell>
        );

      case "projects":
        return (
          <SectionShell title="Projects" subtitle="Selected work from my resume.">
            <div className="grid gap-4 md:grid-cols-2">
              {resume.projects.map((p) => (
                <Card key={p.title} title={p.title} subtitle={p.time}>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-300">
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  {p.links?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.links.map((l) => (
                        <a
                          key={l.href}
                          className="rounded-xl bg-[color:var(--card)] px-4 py-2 text-sm font-semibold text-purple-950 ring-1 ring-purple-200/70 transition hover:bg-purple-100 dark:text-fuchsia-100 dark:ring-purple-400/20 dark:hover:bg-white/10"
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {l.label} →
                        </a>
                      ))}
                    </div>
                  ) : null}
                </Card>
              ))}
            </div>
          </SectionShell>
        );

      case "certificates":
        return (
          <SectionShell title="Certificates" subtitle="Credentials and courses.">
            <div className="grid gap-4 md:grid-cols-2">
              {resume.certificates.map((c) => (
                <Card
                  key={`${c.title}-${c.time}`}
                  title={c.title}
                  subtitle={[c.org, c.time].filter(Boolean).join(" • ")}
                >
                  <div className="text-sm text-slate-700 dark:text-slate-300">
                    {c.org ? `Issued by ${c.org}.` : "Certificate."}
                  </div>
                </Card>
              ))}
            </div>
          </SectionShell>
        );

      case "achievements":
        return (
          <SectionShell title="Achievements" subtitle="Highlights that I’m proud of.">
            <div className="grid gap-4 md:grid-cols-2">
              {resume.achievements.map((a) => (
                <Card key={`${a.title}-${a.time}`} title={a.title} subtitle={a.time}>
                  <div className="text-sm text-slate-700 dark:text-slate-300">{a.detail}</div>
                </Card>
              ))}
            </div>
          </SectionShell>
        );

      case "education":
        return (
          <SectionShell title="Education" subtitle="Academic background.">
            <div className="grid gap-4 md:grid-cols-2">
              {resume.education.map((e) => (
                <Card
                  key={`${e.institution}-${e.time}`}
                  title={e.institution}
                  subtitle={`${e.location} • ${e.time}`}
                >
                  <div className="text-sm text-slate-700 dark:text-slate-300">{e.detail}</div>
                </Card>
              ))}
            </div>
          </SectionShell>
        );

      case "contact":
        return (
          <SectionShell title="Contact" subtitle="Let’s connect.">
            <div className="grid gap-4 md:grid-cols-2">
              <Card title="Email">
                <a
                  className="text-sm font-semibold text-purple-950 underline dark:text-fuchsia-100"
                  href={`mailto:${resume.email}`}
                >
                  {resume.email}
                </a>
              </Card>
              <Card title="Social">
                <div className="flex flex-wrap gap-2">
                  {resume.links.map((l) => (
                    <a
                      key={l.href}
                      className="rounded-xl bg-purple-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-800"
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label} →
                    </a>
                  ))}
                </div>
              </Card>
            </div>

            <div className="mt-6 rounded-2xl border border-purple-100/70 bg-white/70 p-4 text-xs text-slate-600 dark:border-purple-400/20 dark:bg-white/5 dark:text-slate-300">
              Tip: Use <span className="font-semibold">Left/Right arrow keys</span> to switch sections.
            </div>
          </SectionShell>
        );
    }
  }, [active, onSelect]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-purple-50 dark:from-black dark:via-black dark:to-purple-950/30">
      <Navbar active={active} onSelect={onSelect} />

      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={active}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: reduceMotion ? 0.15 : 0.32, ease: "easeOut" }}
            className="will-change-transform"
          >
            {current}
          </motion.div>
        </AnimatePresence>
      </div>

      <footer className="border-t border-purple-100/70 bg-white/60 px-4 py-8 text-center text-xs text-slate-600 backdrop-blur dark:border-purple-400/20 dark:bg-black/30 dark:text-slate-300">
        <div className="mx-auto max-w-6xl">
          Built with Next.js + Tailwind • Purple/white theme • Slide transitions
        </div>
      </footer>
    </div>
  );
}
