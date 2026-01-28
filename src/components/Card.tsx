import { ReactNode } from "react";

export function Card({
  title,
  subtitle,
  children,
  className = "",
}: {
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-purple-100/70 bg-white/80 p-5 shadow-[0_10px_30px_rgba(88,28,135,0.12)] backdrop-blur",
        "dark:border-purple-400/20 dark:bg-white/5",
        className,
      ].join(" ")}
    >
      {(title || subtitle) && (
        <div className="mb-3">
          {title && (
            <div className="text-base font-semibold text-purple-950 dark:text-fuchsia-100">
              {title}
            </div>
          )}
          {subtitle && (
            <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">
              {subtitle}
            </div>
          )}
        </div>
      )}
      {children}
    </div>
  );
}

