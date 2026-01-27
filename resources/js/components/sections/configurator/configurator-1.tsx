import Configurator1Card from '@/components/cards/configurator-1-card';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Link, router } from '@inertiajs/react';
import {
    ArrowLeft,
    ArrowRight,
    BadgeCheck,
    Droplet,
    Home,
    ShieldCheck,
    Warehouse,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

export default function Configurator1() {
    const cards = useMemo(
        () => [
            {
                id: 'semi_detached',
                title: 'Einfamilienhaus',
                area: 40,
                icon: Warehouse,
            },
            { id: 'single_family', title: 'Doppelhaus', area: 50, icon: Home },
        ],
        [],
    );

    const [exactArea, setExactArea] = useState(0);

    function handleCardClick () {
        router.visit(route("configurator.step2", {area:exactArea}));
    }


    return (
        <div className="py-40">
            <div className="container mx-auto w-full px-6">
                {/* Back */}
                <div>
                    <Link href={route('configurator')}>
                        <Button
                            variant="ghost"
                            className="cursor-not-allowed px-0 text-base font-normal text-secondary hover:bg-transparent"
                        >
                            <ArrowLeft className="mr-2 h-5 w-5" />
                            Zurück
                        </Button>
                    </Link>
                </div>

                {/* Title */}
                <div className="mx-auto max-w-6xl text-center">
                    <h2 className="px-5 font-montserrat text-2xl leading-tight font-semibold text-secondary sm:text-3xl md:text-4xl lg:px-30">
                        Wie groß ist die geschätzte Dachfläche für Ihre
                        Solaranlage?
                    </h2>

                    <p className="mt-2 font-open-sans text-base font-normal text-secondary sm:text-xl md:text-2xl">
                        Wählen Sie unten Ihren Immobilientyp oder geben Sie
                        manuell die Dachmaße ein.
                    </p>

                    <div className="mt-4 inline-flex items-center gap-2 text-sm text-red-500">
                        <Droplet className="h-4 w-4" />
                        <span>
                            Sparen Sie bis zu 30 % im Vergleich zu
                            durchschnittlichen Marktpreisen
                        </span>
                    </div>

                    {/* Cards */}
                    <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
                        {cards.map((card) => (
                            <Configurator1Card
                                key={card.id}
                                title={card.title}
                                area={card.area}
                                icon={card.icon}
                               
                            />
                        ))}
                    </div>

                    {/* Precise measurements block (like screenshot) */}
                    <div className="mt-16">
                        <h3 className="font-montserrat text-lg font-semibold text-secondary sm:text-xl">
                            Haben Sie genaue Maße?
                        </h3>

                        <div className="mt-4 flex flex-col items-center justify-center gap-4">
                            <div className="flex items-center gap-3 text-secondary">
                                <span className="font-open-sans text-sm sm:text-base">
                                    Exakte Fläche eingeben
                                </span>

                                {/* number input with spinner */}
                                <div className="flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                                    <input
                                        type="number"
                                        min={0}
                                        value={exactArea}
                                        onChange={(e) =>
                                            setExactArea(Number(e.target.value))
                                        }
                                        className="w-20 bg-transparent text-center text-sm text-secondary outline-none sm:text-base"
                                    />
                                </div>
                            </div>

                            {/* show only when value > 0 */}
                            <div
                                className={`transition-all duration-300 ease-out ${
                                    Number(exactArea) > 0
                                        ? 'max-h-20 translate-y-0 opacity-100'
                                        : 'pointer-events-none max-h-0 -translate-y-2 opacity-0'
                                }`}
                            >
                                <Button
                                    variant={'default'}
                                    onClick={() => router.visit(route("configurator.step2", {area:exactArea}))}
                                >
                                    <Icon
                                        iconNode={ArrowRight}
                                        className="bg-primary!"
                                        iconClassName="text-secondary"
                                        variant="circle"
                                    />
                                    Weiter
                                </Button>
                            </div>

                            {/* trust notes row */}
                            <div className="mt-4 flex flex-col items-center justify-center gap-4 text-secondary sm:flex-row">
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="text-blue-600">$</span>
                                    <span>
                                        100 % kostenlose und unverbindliche
                                        Beratung
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <ShieldCheck className="h-4 w-4 text-blue-600" />
                                    <span>
                                        Ihre Daten sind vollständig sicher und
                                        geschützt
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom badges */}
                    <div className="mx-auto mt-60 grid max-w-4xl grid-cols-3 items-center justify-center gap-6 sm:flex-row">
                        {/* Card 1 */}
                        <div className="bg-linear flex items-center gap-3 rounded-2xl p-4 shadow-sm">
                            <div className="flex h-9 w-9 items-center justify-center overflow-hidden">
                                <img
                                    src="/images/configurator/local-teams.png"
                                    alt="Local professional teams"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <p className="text-left text-xs text-secondary">
                                Nationwide installation by local professional
                                teams
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-linear flex items-center gap-3 rounded-2xl p-4 shadow-sm">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl">
                                <BadgeCheck className="h-full w-full text-emerald-600" />
                            </div>
                            <p className="text-left text-xs text-secondary">
                                Certified Expert
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-linear flex items-center gap-3 rounded-2xl p-4 shadow-sm">
                            <div className="flex h-9 w-9 items-center justify-center overflow-hidden">
                                <img
                                    src="/images/configurator/craftsmanship.png"
                                    alt="Craftsmanship since 2018"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <p className="text-left text-xs text-secondary">
                                Professional Craftsmanship since 2018
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
