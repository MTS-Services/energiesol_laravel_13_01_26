import type { ComponentType, MouseEventHandler, SVGProps } from "react";
import { cn } from "@/lib/utils"; 
import { router } from "@inertiajs/react";

type IconComponent = ComponentType<{ className?: string }> | ComponentType<SVGProps<SVGSVGElement>>;

interface Configurator1CardProps {
  title?: string;
  area?: number;
  icon?: IconComponent;
  selected?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function Configurator1Card({
  title = "",
  area = 0,
  icon: Icon,
  selected = false,
  disabled = false,
  onClick,
  className = "",
}: Configurator1CardProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={()=>router.visit(route('configurator.step2', {area:area}))}
      className={cn(
        "group relative w-full  overflow-hidden rounded-2xl  bg-linear-to-br cursor-pointer from-slate-50 to-emerald-50 px-6 py-9 text-center shadow-sm transition-all",
        "hover:-translate-y-0.5 hover:shadow-md",
        selected && "ring-2 ring-white ring-offset-2",
        disabled && "cursor-not-allowed opacity-60 hover:translate-y-0 hover:shadow-sm",
        className
      )}
    >
      {/* subtle tint overlay like the screenshot */}
          <span className="pointer-events-none absolute inset-0 opacity-70  bg-linear-to-r from-btn-primary/15 to-info/5" />
          
      <div className="relative flex flex-col items-center">
        <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-xl">
          {Icon ? <Icon className="h-14 w-14 text-blue-500" /> : null}
        </div>

        <div className="text-lg font-semibold text-slate-900">{title}</div>

        <div className="mt-2 text-sm text-slate-500">
          Fläche: <span className="font-medium">{area}m<sup>2</sup></span>
        </div>
      </div>
    </button>
  );
}


