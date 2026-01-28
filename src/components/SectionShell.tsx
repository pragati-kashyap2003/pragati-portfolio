import { ReactNode } from "react";

export function SectionShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-14 pt-8 sm:px-6">
      <header className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-purple-950 dark:text-fuchsia-100 sm:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700 dark:text-slate-300">
            {subtitle}
          </p>
        )}
      </header>
      {children}
    </section>
  );
}

