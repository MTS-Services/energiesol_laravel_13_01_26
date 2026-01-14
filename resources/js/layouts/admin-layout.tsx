import { AdminSidebar } from '@/layouts/partials/admin/sidebar';
import { AdminHeader } from '@/layouts/partials/admin/header';
import { AdminFooter } from '@/layouts/partials/admin/footer';
import * as React from 'react';
import { BreadcrumbItem } from '@/types';

interface AdminLayoutProps {
    children: React.ReactNode;
    activeSlug?: string | null;
    breadcrumbs?: BreadcrumbItem[];
}

export default function AdminLayout({ children, activeSlug, breadcrumbs }: AdminLayoutProps) {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    return (
        <div className="flex min-h-screen">
            <AdminSidebar isCollapsed={isCollapsed} activeSlug={activeSlug} />
            <div className="flex flex-1 flex-col">
                <AdminHeader isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
                <main className="flex-1 p-6">{children}</main>
                <AdminFooter />
            </div>
        </div>
    );
}