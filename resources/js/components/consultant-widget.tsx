import * as React from 'react';
import { Phone, X } from 'lucide-react';
 
export function ConsultantWidget() {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const [isDismissed, setIsDismissed] = React.useState(false);
 
    if (isDismissed) {
        return null;
    }
 
    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Teaser (always visible by default) */}
            {!isExpanded && (
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setIsDismissed(true)}
                        className="absolute -left-3 -top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white text-secondary shadow ring-1 ring-black/10"
                        aria-label="Kontakt-Widget schließen"
                    >
                        <X className="h-4 w-4" />
                    </button>
                    <button
                        type="button"
                        onClick={() => setIsExpanded(true)}
                        className="group relative flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-xl ring-1 ring-black/5 transition hover:shadow-2xl"
                        aria-label="Jetzt mit Berater sprechen"
                    >
                        <span className="font-montserrat text-sm font-semibold text-secondary">
                            Jetzt mit Berater sprechen
                        </span>
 
                        <span className="relative ml-1 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-white shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=faces"
                                alt="Berater"
                                className="h-full w-full object-cover"
                            />
                        </span>
                    </button>
                </div>
            )}
 
            {/* Popup (opens when teaser clicked) */}
            {isExpanded && (
                <div className="transition-all duration-200 ease-out">
                    <div className="relative w-[380px] overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5">
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={() => setIsExpanded(false)}
                            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-secondary transition-colors hover:bg-white"
                            aria-label="Close"
                        >
                            <X className="h-5 w-5" />
                        </button>
 
                        {/* Consultant Image with gradient overlay */}
                        <div className="relative h-48 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-btn-primary/20 to-info/30" />
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
                                alt="Berater"
                                className="h-full w-full object-cover"
                            />
                            {/* Avatar circle */}
                            <div className="absolute bottom-0 left-1/2 h-32 w-32 -translate-x-1/2 translate-y-1/2 overflow-hidden rounded-full border-4 border-white bg-white shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces"
                                    alt="Berater"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
 
                        {/* Content */}
                        <div className="px-6 pb-6 pt-20 text-center">
                            <h3 className="mb-2 font-montserrat text-2xl font-bold text-secondary">
                                Jetzt mit Berater sprechen
                            </h3>
                            <p className="mb-6 font-open-sans text-base text-secondary/80">
                                Von 9 - 20 Uhr für Sie erreichbar
                            </p>
 
                            {/* Phone button */}
                            <a
                                href="tel:040 764 84 844"
                                className="mb-3 flex items-center justify-center gap-2 rounded-full border-2 border-secondary/20 bg-white px-6 py-3 font-montserrat text-base font-semibold text-secondary transition-colors hover:border-secondary/40 hover:bg-secondary/5"
                            >
                                <Phone className="h-5 w-5 text-info" />
                                040 / 764 84 844
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}