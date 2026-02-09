import * as React from 'react';
import { AdminSidebar } from '@/layouts/partials/admin/sidebar';
import { AdminHeader } from '@/layouts/partials/admin/header';
import { AdminFooter } from './partials/admin/footer';
import { useAppearance } from '@/hooks/use-appearance';
import { Card } from '@/components/ui/card';
import { InfoModal } from '@/components/info-model';
import { ErrorModal } from '@/components/error-modal';

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

     const {appearance, updateAppearance} = useAppearance();
    
        React.useEffect(() => {
           if(appearance != 'light') updateAppearance('light');
        }, [appearance])
    // Save sidebar state to localStorage
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('admin-sidebar-collapsed', JSON.stringify(isCollapsed));
        }
    }, [isCollapsed]);



    return (
        <div className="relative flex h-full max-h-screen min-h-screen bg-background z-10">
            <AdminSidebar isCollapsed={isCollapsed} activeSlug={activeSlug} />
            <div className="flex flex-1 flex-col overflow-hidden relative">
                <AdminHeader isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
                <main className="flex-1 overflow-y-auto overflow-x-hidden p-6 space-y-6">
                    {children}
                </main>
              
                <AdminFooter />
            </div>
            
        </div>
    );
}
