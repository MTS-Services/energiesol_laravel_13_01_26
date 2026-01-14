import { cn } from '@/lib/utils';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { Users, BarChart, Shield, LayoutGrid } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { AdminNavItem } from './admin-nav-item';
import { usePage } from '@inertiajs/react';
import * as React from 'react';

const adminNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: route('admin.dashboard'),
        icon: LayoutGrid,
        badge: 'New', // Example badge
        slug: 'dashboard',
    },
    {
        title: 'User management',
        href: '#',
        icon: Users,
        badge: 42, // Example numeric badge
        // onClick: (item, event) => {
        //     console.log('User management clicked:', item);
        // },
        children: [
            {
                title: 'Admins',
                href: '#',
                icon: Shield,
                permission: 'manage admins',
                children: [
                    {
                        title: 'All', href: '#', onClick: (item, event) => {
                            console.log('User management clicked:', item);
                        },
                    },
                    { title: 'Active', href: '#' },
                    {
                        title: 'Inactive',
                        href: '#',
                        children: [
                            { title: 'Recently Inactive', href: '#' }, // Level 2 - Circle icon
                            { title: 'Long Inactive', href: '#' }, // Level 2 - Circle icon
                            {
                                title: 'Very Old',
                                href: '#',
                                children: [
                                    { title: 'Over 1 year', href: '#' }, // Level 3 - Dot icon
                                    { title: 'Over 2 years', href: '#' }, // Level 3 - Dot icon
                                ]
                            }
                        ]
                    },
                ],
            },
            {
                title: 'Staffs',
                href: '#',
                icon: '/favicon.svg',
                children: [
                    { title: 'All', href: '#' },
                    { title: 'Active', href: '#' },
                    { title: 'Banned', href: '#' },
                ],
            },
            {
                title: 'Customers',
                href: '#',
                icon: BarChart,
                children: [
                    { title: 'All', href: '#' },
                    { title: 'Active', href: '#' },
                ],
            },
        ],
    },
    {
        title: 'Analytics',
        href: '#',
        icon: BarChart,
        permission: 'view analytics',
        external: true, // Opens in new tab
        target: '_blank',
    },
    {
        title: 'Disabled Item',
        href: '#',
        icon: Shield,
        disabled: true, // Disabled state
    },
    {
        title: 'Roles',
        href: '#',
        icon: Shield,
        permission: 'manage roles',
        className: 'custom-nav-item', // Custom CSS class
    },
];

interface AdminSidebarProps {
    isCollapsed: boolean;
    activeSlug?: string | null;
}

export function AdminSidebar({ isCollapsed, activeSlug }: AdminSidebarProps) {
    const { url, props } = usePage();
    const currentRoute = url;
    // Get permissions from backend props - adjust this path based on your auth structure
    // const userPermissions = props.auth?.user?.permissions ||
    //     props.auth?.user?.all_permissions ||
    //     props.auth?.permissions ||
    //     [];

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
                    <AdminNavItem
                        key={item.title}
                        item={item}
                        isCollapsed={isCollapsed}
                        currentRoute={currentRoute}
                        isActive={activeSlug === item.slug}
                    />
                ))}
            </nav>
        </div>
    );
}
