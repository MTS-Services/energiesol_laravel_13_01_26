import { UserSidebar } from '@/components/layouts/user/UserSidebar';
import { UserHeader } from '@/components/layouts/user/UserHeader';
import { UserFooter } from '@/components/layouts/user/UserFooter';
import * as React from 'react';

interface AppLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    return (
        <div className="flex min-h-screen">
            <UserSidebar isCollapsed={isCollapsed} />
            <div className="flex flex-1 flex-col">
                <UserHeader isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
                <main className="flex-1 p-6">{children}</main>
                <UserFooter />
            </div>
        </div>
    );
}