import { Link } from '@inertiajs/react';
import AppLogo from '@/components/app-logo';

export function FrontendFooter() {
    return (
        <footer>
                <div className="border-t border-border flex flex-col md:flex-col justify-center items-center gap-4 py-6 px-4 bg-[#0C275A] ">
                    <p className="text-base font-open-sans font-normal text-primary">
                      Energie Solution Nord ist ein unabhängiger Anbieter von Energielösungen. Wir erbringen unsere Dienstleistungen über ein zertifiziertes Netzwerk von lizenzierten regionalen Installateuren und Premium-Gerätepartnern. 
                    </p>
                    
                    <p className='flex items-center gap-4'>
                        
                      <Link href={route('legal')} className="text-hover hover:underline">Impressum</Link>
                         <Link href={route('privacy-policy')} className="text-hover hover:underline">Datenschutz</Link>
                         <Link href={route('agb')} className="text-hover hover:underline">Allgemeine Geschäftsbedingungen</Link>
                    </p>
                </div>
                {/* Bottom Bar */}
                <div className=" border-border flex flex-col md:flex-row justify-center items-center gap-4 py-4 bg-[#06142D] ">
                    <p className="text-xs  font-open-sans font-normal text-primary">
                        &copy; {new Date().getFullYear()}  Energie Solution Nord. Alle Rechte vorbehalten
                    </p>
                </div>

        </footer>
    );
}