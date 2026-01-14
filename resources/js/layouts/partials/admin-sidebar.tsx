import { Button } from '@/components/ui/button';
import { BarChart, ChevronLeft, ChevronRight, LayoutGrid, Shield, Users } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { NavItem } from '@/types';
import AppLogo from '@/components/app-logo';
import { dashboard } from '@/routes';
import React from 'react';
import { cn } from '@/lib/utils';

const adminNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Users',
        href: '#', // Replace with actual admin users route
        icon: Users,
    },
    {
        title: 'Analytics',
        href: '#', // Replace with actual admin analytics route
        icon: BarChart,
    },
    {
        title: 'Roles',
        href: '#', // Replace with actual admin roles route
        icon: Shield,
    },
];

export default function AdminSidebar() {
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    return (
        <div
            className={cn(
                'relative hidden h-screen border-r bg-background transition-all duration-300 md:flex flex-col',
                isCollapsed ? 'w-20' : 'w-64'
            )}
        >
            <div className="flex h-16 items-center border-b px-6">
                <Link href="/">
                    {isCollapsed ? <LayoutGrid className="h-6 w-6" /> : <AppLogo />}
                </Link>
            </div>
            <nav className="flex-1 space-y-2 p-4">
                {adminNavItems.map((item) => (
                    <Link
                        key={item.title}
                        href={item.href}
                        className={cn(
                            'flex items-center gap-3 rounded-lg px-4 py-2 text-muted-foreground transition-all hover:text-primary',
                            isCollapsed && 'justify-center'
                        )}
                    >
                        {item.icon && <item.icon className="h-5 w-5" />}
                        <span className={cn('text-sm', isCollapsed && 'hidden')}>{item.title}</span>
                    </Link>
                ))}
            </nav>
            <div className="p-4">
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute -right-4 top-16"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                </Button>
            </div>
        </div>
    );
}