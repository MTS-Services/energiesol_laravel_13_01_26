import AppLogo from '@/components/app-logo';
import { NavItem } from '@/components/ui/nav-item';
import { cn } from '@/lib/utils';
import { type NavItemType, type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { BarChart, LayoutGrid, Users } from 'lucide-react';
import * as React from 'react';
// Navigation configuration
const adminNavItems: NavItemType[] = [
    {
        title: 'Dashboard',
        href: route('admin.dashboard'),
        icon: LayoutGrid,
        slug: 'dashboard',
    },
    // {
    //     title: 'User Management',
    //     href: '#',
    //     icon: Users,
    //     badge: 42,
    //     children: [
    //         {
    //             title: 'Admins',
    //             href: '#',
    //             icon: Shield,
    //             permission: 'manage admins',
    //             children: [
    //                 { title: 'All Admins', href: '#' },
    //                 { title: 'Active', href: '#' },
    //                 {
    //                     title: 'Inactive',
    //                     href: '#',
    //                     children: [
    //                         { title: 'Recently Inactive', href: '#' },
    //                         { title: 'Long Inactive', href: '#' },
    //                         {
    //                             title: 'Archive',
    //                             href: '#',
    //                             children: [
    //                                 { title: 'Over 1 year', href: '#' },
    //                                 { title: 'Over 2 years', href: '#' },
    //                             ]
    //                         }
    //                     ]
    //                 },
    //             ],
    //         },
    //         {
    //             title: 'Users',
    //             href: '#',
    //             icon: User,
    //             children: [
    //                 {
    //                     title: 'All',
    //                     href: route('admin.users.index'),
    //                     icon: User,
    //                     slug: 'admin-users'
    //                 },
    //                 { title: 'Active', href: '#' },
    //                 { title: 'Premium', href: '#', badge: 15 },
    //             ],
    //         },
    //     ],
    // },

    {
        title: 'Solar Panels',
        href: route('admin.solar-panels.index'),
        icon: BarChart,
        permission: 'view analytics',
        slug: 'admin-solar-panels',
    },
    {
        title: 'Solar Inverters',
        href: route('admin.solar-inverters.index'),
        icon: BarChart,
        permission: 'view analytics',
        slug: 'admin-solar-inverters',
    },
    {
        title: 'Monitoring System',
        href: route('admin.monitoring-system.edit'),
        icon: BarChart,
        permission: 'view analytics',
        slug: 'admin-monitoring-systems',
    },

    {
        title: 'CMS Content',
        href: route('admin.features.index'),
        icon: LayoutGrid, // Using LayoutGrid icon
        slug: 'admin-features',
        permission: 'view features',
        children: [
            {
                title: 'Features',
                href: route('admin.features.index'),
                icon: LayoutGrid,
                slug: 'admin-features',
            },
            {
                title: 'Services',
                href: route('admin.services.index'),
                icon: LayoutGrid, // Using LayoutGrid icon
                slug: 'admin-services',
                permission: 'view services',
            },
            {
                title: 'Advantages',
                href: route('admin.advantages.index'),
                icon: LayoutGrid, // Using LayoutGrid icon
                slug: 'admin-advantages',
                permission: 'view advantages',
            },
            {
                title: 'Values',
                href: route('admin.values.index'),
                icon: LayoutGrid, // Using LayoutGrid icon
                slug: 'admin-values',
                permission: 'view advantages',
            },
            {
                title: 'Partners',
                href: route('admin.partners.index'),
                icon: BarChart,
                permission: 'view analytics',
            },
        ],
    },
    {
        title: 'Contacts',
        href: route('admin.contacts.index'),
        icon: Users,
        permission: 'view analytics',
        slug: 'admin-contacts',
    },
    {
        title: 'Estimates',
        href: route('admin.estimates.index'),
        icon: Users, // Can be changed
        permission: 'view analytics', // Assuming similar permission structure
        slug: 'admin-estimates',
    },
    
    {
        title: 'System Settings',
        href: route('admin.system-setting.edit'),
        icon: BarChart,
        permission: 'view analytics',
        slug: 'admin-system-settings',
    },
];

interface AdminSidebarProps {
    isCollapsed: boolean;
    activeSlug?: string | null;
}

export const AdminSidebar = React.memo<AdminSidebarProps>(
    ({ isCollapsed, activeSlug }) => {
        const { url, props } = usePage();
        const currentRoute = url;

        // Extract permissions from auth props
        const userPermissions = React.useMemo(() => {
            const auth = props.auth as SharedData['auth'];
            return (
                auth?.user?.permissions ||
                auth?.user?.all_permissions ||
                auth?.permissions ||
                []
            );
        }, [props.auth]);

        return (
            <aside
                className={cn(
                    'relative hidden h-screen border-r bg-background',
                    'transition-all duration-300 ease-in-out',
                    'flex-col md:flex',
                    isCollapsed ? 'w-16' : 'w-64',
                )}
            >
                {/* Logo Section */}
                <div
                    className={cn(
                        'flex h-16 items-center border-b',
                        isCollapsed ? 'justify-center px-2' : 'px-6',
                    )}
                >
                    <Link
                        href="/"
                        className="flex items-center gap-2 transition-opacity hover:opacity-80"
                    >
                        {isCollapsed ? (
                            <LayoutGrid className="h-6 w-6 text-primary" />
                        ) : (
                            <AppLogo className="text-base!" />
                        )}
                    </Link>
                </div>

                {/* Navigation */}
                <div className="custom-scrollbar flex-1 overflow-y-auto px-3 py-4">
                    <nav className="space-y-1">
                        {adminNavItems.map((item, index) => (
                            <NavItem
                                key={`${item.title}-${index}`}
                                item={item}
                                isCollapsed={isCollapsed}
                                currentRoute={currentRoute}
                                isActive={activeSlug === item.slug}
                                permissions={userPermissions}
                            />
                        ))}
                    </nav>
                </div>

                {/* Footer Section (Optional) */}
                {!isCollapsed && (
                    <div className="border-t p-4">
                        <div className="text-center text-xs text-muted-foreground">
                            v1.0.0
                        </div>
                    </div>
                )}
            </aside>
        );
    },
);

AdminSidebar.displayName = 'AdminSidebar';
