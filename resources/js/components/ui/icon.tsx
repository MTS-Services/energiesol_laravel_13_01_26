import { LucideIcon } from 'lucide-react';

interface IconProps {
    iconNode?: LucideIcon | null;
    className?: string;
    variant?: 'default' | 'circle';
    
}

export function Icon({ iconNode: IconComponent, className, variant = 'default' }: IconProps) {
    if (!IconComponent) {
        return null;
    }

    if (variant === 'circle') {
        return (
            <div className="flex size-8 items-center justify-center rounded-full bg-white text-black">
                <IconComponent className={className} />
            </div>
        );
    }

    return <IconComponent className={className} />;
}
