import { AdminSidebar } from '@/components/layouts/admin/AdminSidebar';
import { AdminHeader } from '@/components/layouts/admin/AdminHeader';
import { AdminFooter } from '@/components/layouts/admin/AdminFooter';
import * as React from 'react';

interface AdminLayoutProps {
    children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    return (
        <div className="flex min-h-screen">
            <AdminSidebar isCollapsed={isCollapsed} />
            <div className="flex flex-1 flex-col">
                <AdminHeader isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
                <main className="flex-1 p-6">{children}</main>
                <AdminFooter />
            </div>
        </div>
    );
}