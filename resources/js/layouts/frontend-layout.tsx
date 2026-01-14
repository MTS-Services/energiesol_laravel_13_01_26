import * as React from 'react';
import { FrontendHeader } from '@/components/layouts/frontend/FrontendHeader';
import { FrontendFooter } from '@/components/layouts/frontend/FrontendFooter';

interface FrontendLayoutProps {
    children: React.ReactNode;
}

export default function FrontendLayout({ children }: FrontendLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col">
            <FrontendHeader />
            <main className="flex-1 flex flex-col">{children}</main>
            <FrontendFooter />
        </div>
    );
}