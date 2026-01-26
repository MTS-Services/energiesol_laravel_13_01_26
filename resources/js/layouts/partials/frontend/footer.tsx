import { Link } from '@inertiajs/react';
import AppLogo from '@/components/app-logo';

export function FrontendFooter() {
    return (
        <footer>
                <div className="border-t border-border flex flex-col md:flex-row justify-center items-center gap-4 py-6 bg-[#0C275A] ">
                    <p className="text-base font-open-sans font-normal text-primary">
                      Energiesol ist ein unabhängiger Anbieter von Energielösungen. Wir erbringen unsere Dienstleistungen über ein zertifiziertes Netzwerk von lizenzierten regionalen Installateuren und Premium-Gerätepartnern.
                    </p>
                </div>
                {/* Bottom Bar */}
                <div className=" border-border flex flex-col md:flex-row justify-center items-center gap-4 py-4 bg-[#06142D] ">
                    <p className="text-xs  font-open-sans font-normal text-primary">
                        &copy; {new Date().getFullYear()} Energiesol. Alle Rechte vorbehalten
                    </p>
                </div>

        </footer>
    );
}