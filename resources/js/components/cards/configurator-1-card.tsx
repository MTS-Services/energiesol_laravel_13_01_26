import React from "react";
import { cn } from "@/lib/utils"; // if you don't have this helper, I added a fallback below.

export default function Configurator1Card({
  title = "",
  area = "",
  icon: Icon,
  selected = false,
  disabled = false,
  onClick,
  className = "",
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "group relative w-full overflow-hidden rounded-2xl border bg-linear-to-br from-slate-50 to-emerald-50 px-6 py-7 text-center shadow-sm transition-all",
        "hover:-translate-y-0.5 hover:shadow-md",
        selected && "ring-2 ring-blue-500 ring-offset-2",
        disabled && "cursor-not-allowed opacity-60 hover:translate-y-0 hover:shadow-sm",
        className
      )}
    >
      {/* subtle tint overlay like the screenshot */}
      <span className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(120%_120%_at_50%_0%,rgba(59,130,246,0.10)_0%,rgba(16,185,129,0.08)_45%,transparent_70%)]" />

      <div className="relative flex flex-col items-center">
        <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-xl">
          {Icon ? <Icon className="h-14 w-14 text-blue-600" /> : null}
        </div>

        <div className="text-lg font-semibold text-slate-900">{title}</div>

        <div className="mt-2 text-sm text-slate-500">
          Area: <span className="font-medium">{area}</span>
        </div>
      </div>
    </button>
  );
}

/**
 * If you don't have cn() in "@/lib/utils", use this instead:
 *
 * const cn = (...classes) => classes.filter(Boolean).join(" ");
 */
