import { type BreadcrumbItem } from '@/types';
import type { PropsWithChildren } from 'react';

export default function FrontendTemplate({
    children,
    breadcrumbs
}: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <>
            
            {children}
        </>
    )
}
