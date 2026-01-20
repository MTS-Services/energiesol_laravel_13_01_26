import { LucideIcon } from 'lucide-react';

interface IconProps {
    iconNode?: LucideIcon | null;
    className?: string;
    variant?: 'default' | 'circle' | 'circle-transparent';
    
}

export function Icon({ iconNode: IconComponent, className, variant = 'default' }: IconProps) {
    if (!IconComponent) {
        return null;
    }

    if (variant === 'circle') {
        return (
            <div className="flex size-8 items-center justify-center rounded-full bg-primary text-secondary">
                <IconComponent className={className} />
            </div>
        );
    }else if (variant === 'circle-transparent') {
        return (
            <div className="flex size-8 items-center justify-center rounded-full border border-btn-primary bg-transparent text-btn-primary">
                <IconComponent className={className} />
            </div>
        );
    }

    return <IconComponent className={className} />;
}
