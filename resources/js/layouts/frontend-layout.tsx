import * as React from 'react';
import { FrontendHeader } from '@/layouts/partials/frontend/header';
import { FrontendFooter } from '@/layouts/partials/frontend/footer';
import { useAppearance } from '@/hooks/use-appearance';
import { CookieConsentDialog } from '@/components/cookie-consent-dialog';
import { ConsultantWidget } from '@/components/consultant-widget';

interface FrontendLayoutProps {
    children: React.ReactNode;
}

export default function FrontendLayout({ children }: FrontendLayoutProps) {
     const {appearance, updateAppearance} = useAppearance();
    
        React.useEffect(() => {
           if(appearance != 'light') updateAppearance('light');
        }, [appearance])
    return (
        <div className="relative flex min-h-screen flex-col">
            <FrontendHeader />
            <main className="flex flex-1 flex-col">{children}</main>
            <FrontendFooter />
            <CookieConsentDialog />
            <ConsultantWidget />
        </div>
    );
}