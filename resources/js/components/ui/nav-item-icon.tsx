import * as React from 'react';
import { type NavItem } from '@/types';
import { getDefaultIcon } from '../../lib/nav-utils';
import { cn } from '@/lib/utils';

interface NavItemIconProps {
    item: NavItem;
    level: number;
    className?: string;
}

export const NavItemIcon = React.memo<NavItemIconProps>(({ item, level, className }) => {
    if (item.icon) {
        if (typeof item.icon === 'string') {
            return (
                <img
                    src={item.icon}
                    alt={item.title}
                    className={cn("h-5 w-5 object-contain", className)}
                />
            );
        }
        const IconComponent = item.icon;
        return <IconComponent className={cn("h-5 w-5", className)} />;
    }

    const DefaultIcon = getDefaultIcon(level);
    return <DefaultIcon className={cn("h-5 w-5", className)} />;
});

NavItemIcon.displayName = 'NavItemIcon';