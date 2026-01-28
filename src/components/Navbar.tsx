"use client";

import { useEffect } from "react";

export type SectionId =
  | "home"
  | "about"
  | "skills"
  | "projects"
  | "certificates"
  | "achievements"
  | "education"
  | "contact";

export const sectionOrder: SectionId[] = [
  "home",
  "about",
  "skills",
  "projects",
  "certificates",
  "achievements",
  "education",
  "contact",
];

const sectionLabels: Record<SectionId, string> = {
  home: "Home",
  about: "About",
  skills: "Skills",
  projects: "Projects",
  certificates: "Certificates",
  achievements: "Achievements",
  education: "Education",
  contact: "Contact",
};

export function Navbar({
  active,
  onSelect,
}: {
  active: SectionId;
  onSelect: (id: SectionId) => void;
}) {
  // Keyboard shortcuts: left/right arrows to navigate sections.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      if (
        (e.target as HTMLElement | null)?.tagName === "INPUT" ||
        (e.target as HTMLElement | null)?.tagName === "TEXTAREA"
      ) {
        return;
      }

      const idx = sectionOrder.indexOf(active);
      const nextIdx = e.key === "ArrowRight" ? idx + 1 : idx - 1;
      const next = sectionOrder[Math.min(sectionOrder.length - 1, Math.max(0, nextIdx))];
      if (next && next !== active) onSelect(next);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, onSelect]);

  return (
    <nav className="sticky top-0 z-50 border-b border-purple-100/70 bg-white/70 backdrop-blur dark:border-purple-400/20 dark:bg-black/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--card)] ring-1 ring-purple-200/70 dark:ring-purple-400/20">
            <span className="text-sm font-bold text-purple-950 dark:text-fuchsia-100">
              PK
            </span>
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-purple-950 dark:text-fuchsia-100">
              Pragati Kashyap
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-300">
              Portfolio
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-1 rounded-2xl bg-white/70 p-1 ring-1 ring-purple-100/70 dark:bg-white/5 dark:ring-purple-400/20 md:flex">
          {sectionOrder.map((id) => {
            const isActive = id === active;
            return (
              <button
                key={id}
                type="button"
                onClick={() => onSelect(id)}
                className={[
                  "rounded-xl px-3 py-2 text-xs font-semibold transition",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300",
                  isActive
                    ? "bg-purple-700 text-white shadow-sm"
                    : "text-slate-700 hover:bg-[color:var(--card)] dark:text-slate-200",
                ].join(" ")}
                aria-current={isActive ? "page" : undefined}
              >
                {sectionLabels[id]}
              </button>
            );
          })}
        </div>

        <select
          className="md:hidden w-40 rounded-xl border border-purple-100/70 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm dark:border-purple-400/20 dark:bg-white dark:text-slate-900"
          style={{ colorScheme: "light" }}
          value={active}
          onChange={(e) => onSelect(e.target.value as SectionId)}
          aria-label="Select section"
        >
          {sectionOrder.map((id) => (
            <option key={id} value={id}>
              {sectionLabels[id]}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
}

