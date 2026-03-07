import * as React from 'react';
import { FrontendHeader } from '@/layouts/partials/frontend/header';
import { FrontendFooter } from '@/layouts/partials/frontend/footer';
import { useAppearance } from '@/hooks/use-appearance';
import { CookieConsentDialog } from '@/components/cookie-consent-dialog';
import { ConsultantWidget } from '@/components/consultant-widget';
import { usePage } from '@inertiajs/react';

interface FrontendLayoutProps {
    children: React.ReactNode;
}

export default function FrontendLayout({ children }: FrontendLayoutProps) {
     const {appearance, updateAppearance} = useAppearance();
    const { url } = usePage();
    console.log(url);
        React.useEffect(() => {
           if(appearance != 'light') updateAppearance('light');
        }, [appearance])
    return (
        <div className="relative flex min-h-screen flex-col">
            <FrontendHeader />
            <main className="flex flex-1 flex-col">{children}</main>
            <FrontendFooter />
            {
                url !== '/privacy-policy' && url !== '/legal' && (
                    <>
                        <CookieConsentDialog />
                    </>
                )
            }
            <ConsultantWidget />
        </div>
    );
}