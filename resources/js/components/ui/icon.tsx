import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IconProps {
    iconNode?: LucideIcon | null;
    className?: string;
    iconClassName?: string;
    variant?: 'default' | 'circle' | 'circle-transparent';

}

export function Icon({ iconNode: IconComponent, className, iconClassName, variant = 'default' }: IconProps) {
    if (!IconComponent) {
        return null;
    }

    if (variant === 'circle') {
        return (
            <div className={cn("flex size-8 items-center justify-center rounded-full bg-btn-primary text-white", className)}>
                <IconComponent className={iconClassName} />
            </div>
        );
    } else if (variant === 'circle-transparent') {
        return (
            <div className="flex size-8 items-center justify-center rounded-full border border-btn-primary bg-transparent text-btn-primary">
                <IconComponent className={iconClassName} />
            </div>
        );
    } else if (variant === 'default') {
        return <IconComponent className={iconClassName} />;
    }

    return <IconComponent className={iconClassName} />;
}
