import { LucideIcon } from "lucide-react";

interface Item {
  item?: {
    icon?: LucideIcon | null;
    title?: string | null;
    description?: string | null;
  } | null;
}

function AdvantageCard({ item }: Item) {
  if (!item) return null;

  const IconComponent = item.icon;

  return (
    <div className="why-choose-item rounded-md bg-gradient-to-r from-btn-primary/5 to-info/5 p-6">
      <div>
        <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary/70">
          {IconComponent && (
            <IconComponent className="h-6 w-6 stroke-btn-primary" />
          )}
        </div>

        <h2 className="text-secondary mt-3 font-montserrat text-2xl font-semibold lg:text-lg">
          {item.title}
        </h2>
        <p className="mt-3 text-sm text-secondary/70 lg:text-base">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export { AdvantageCard };