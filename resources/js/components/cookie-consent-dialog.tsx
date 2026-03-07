import * as React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import AppLogo from '@/components/app-logo';
import { Globe2 } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'cookieConsent';

type CookieConsentValue = 'accepted' | 'declined';

const setConsentStorage = (value: CookieConsentValue) => {
    if (typeof window === 'undefined') return;

    try {
        window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    } catch {
        // ignore storage errors
    }

    try {
        const maxAge = 365 * 24 * 60 * 60;
        document.cookie = `cookie_consent=${value};path=/;max-age=${maxAge};SameSite=Lax`;
    } catch {
        // ignore cookie errors
    }
};

const getConsentStorage = (): CookieConsentValue | null => {
    if (typeof window === 'undefined') return null;

    try {
        const stored = window.localStorage.getItem(COOKIE_CONSENT_KEY) as
            | CookieConsentValue
            | null;
        return stored;
    } catch {
        return null;
    }
};

export function CookieConsentDialog() {
    const [open, setOpen] = React.useState(false);
    const [hasChoice, setHasChoice] = React.useState(false);

    React.useEffect(() => {
        const stored = getConsentStorage();
        if (!stored) {
            setOpen(true);
            setHasChoice(false);
        } else {
            setOpen(false);
            setHasChoice(true);
        }
    }, []);

    const handleChoice = (value: CookieConsentValue) => {
        setConsentStorage(value);
        setHasChoice(true);
        setOpen(false);
    };

    const handleOpenChange = (nextOpen: boolean) => {
        // Prevent closing without a decision
        if (!nextOpen && !hasChoice) {
            return;
        }
        setOpen(nextOpen);
    };

    if (!open && hasChoice) {
        return null;
    }

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent
                showClose={false}
                className="sm:max-w-3xl rounded-3xl border-none p-0 shadow-2xl"
            >
                <div className="flex flex-col overflow-hidden rounded-3xl bg-white">
                    <div className="flex items-start justify-between px-8 pt-7 pb-4">
                        <div className="mb-4 w-32 rounded bg-linear-to-r from-btn-primary/20 to-info/20 p-2">
                            <img
                                src="/images/logo-2.png"
                                alt="Energie Solution Nord"
                                className="w-full object-cover"
                            />
                        </div>
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-secondary">
                            <Globe2 className="h-8 w-8" aria-hidden="true" />
                        </div>
                    </div>

                    <div className="space-y-4 px-8 pb-8">
                        <h2 className="font-montserrat text-2xl font-semibold text-secondary md:text-[26px]">
                            Einwilligung in die Datenverarbeitung
                        </h2>
                        <p className="font-open-sans text-sm leading-relaxed text-secondary md:text-base">
                            Wir verwenden Cookies und andere Technologien auf unserer
                            Website. Einige von ihnen sind essenziell, während andere
                            uns helfen, diese Website und Ihre Erfahrung zu
                            verbessern. Personenbezogene Daten können verarbeitet
                            werden (z.&nbsp;B. IP-Adressen), z.&nbsp;B. für
                            personalisierte Anzeigen und Inhalte, Anzeigen- und
                            Inhaltsmessung sowie zur Gewinnung von Erkenntnissen über
                            Zielgruppen und Produktentwicklungen.
                        </p>
                        <p className="font-open-sans text-sm leading-relaxed text-secondary md:text-base">
                            Weitere Informationen über die Verwendung Ihrer Daten
                            finden Sie in unserer Datenschutzerklärung. Sie können
                            Ihre Auswahl jederzeit widerrufen oder anpassen.
                        </p>

                        <p className="mt-2 font-open-sans text-sm font-medium text-secondary md:text-base">
                            Wir benötigen Ihre Entscheidung, bevor Sie unsere Website
                            weiter besuchen können.
                        </p>
                    </div>

                    <div className=" border-t px-8 py-5 md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-wrap gap-4 text-sm font-open-sans text-secondary underline-offset-2">
                            <a href={route('privacy-policy')} target='_blank' className="hover:underline">
                                Datenschutzerklärung
                            </a>
                            <a href={route('legal')} target='_blank' className="hover:underline">
                                Impressum
                            </a>
                            <a href="#" className="hover:underline">
                                Einstellungen
                            </a>
                        </div>

                        <div className="flex w-full flex-col gap-3 my-4 md:w-auto md:flex-row">
                            <Button
                                type="button"
                                variant="outline"
                                className="h-16 w-full rounded-full bg-black text-md font-montserrat font-semibold text-white "
                                onClick={() => handleChoice('declined')}
                            >
                                Ablehnen
                            </Button>
                            <Button
                                type="button"
                                variant="default"
                                className="h-16 w-full rounded-full text-md font-montserrat font-semibold text-center items-center justify-center"
                                onClick={() => handleChoice('accepted')}
                            >
                                Akzeptieren
                            </Button>
                        </div>
                        <div className="text-center text-sm font-open-sans text-secondary md:text-base">    
                            <p className="text-center text-sm font-open-sans text-secondary md:text-base">Powered by Usercentrics Consent Management</p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

