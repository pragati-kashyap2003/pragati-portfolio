import { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-purple-200/70 bg-[color:var(--card)] px-3 py-1 text-xs font-medium text-purple-950 dark:border-purple-400/20 dark:text-fuchsia-100">
      {children}
    </span>
  );
}

