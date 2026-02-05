import { useAppearance } from '@/hooks/use-appearance';
import AdminSidebarLayout from '@/layouts/app/admin-template';
import { type BreadcrumbItem } from '@/types';
import { use, useEffect, type ReactNode } from 'react';

interface FrontendLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function ({ children, breadcrumbs, ...props }: FrontendLayoutProps) {

    const {appearance, updateAppearance} = useAppearance();

    useEffect(() => {
       if(appearance != 'light') updateAppearance('light');
    }, [appearance]);

   return (
    <AdminSidebarLayout breadcrumbs={breadcrumbs} {...props}>
        {children}
    </AdminSidebarLayout>
    );
} 
