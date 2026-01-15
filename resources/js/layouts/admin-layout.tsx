import * as React from 'react';
import { AdminSidebar } from '@/layouts/partials/admin/sidebar';
import { AdminHeader } from '@/layouts/partials/admin/header';
import { AdminFooter } from '@/layouts/partials/admin/footer';
import { cn } from '@/lib/utils';

interface AdminLayoutProps {
    children: React.ReactNode;
    activeSlug?: string | null;
}

export default function AdminLayout({ children, activeSlug }: AdminLayoutProps) {
    const [isCollapsed, setIsCollapsed] = React.useState(() => {
        // Persist sidebar state in localStorage
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('admin-sidebar-collapsed');
            return saved ? JSON.parse(saved) : false;
        }
        return false;
    });

    // Save sidebar state to localStorage
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('admin-sidebar-collapsed', JSON.stringify(isCollapsed));
        }
    }, [isCollapsed]);

    return (
        <div className="flex min-h-screen bg-background">
            <AdminSidebar isCollapsed={isCollapsed} activeSlug={activeSlug} />

            <div className="flex flex-1 flex-col overflow-hidden">
                <AdminHeader
                    isCollapsed={isCollapsed}
                    setIsCollapsed={setIsCollapsed}
                />

                <main className={cn(
                    "flex-1 overflow-y-auto overflow-x-hidden",
                    "bg-linear-to-br from-background to-muted/20"
                )}>
                    <div className="mx-auto p-6 space-y-6">
                        {children}
                    </div>
                </main>

                <AdminFooter />
            </div>
        </div>
    );
}