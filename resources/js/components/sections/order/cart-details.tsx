import AppLogo from '@/components/app-logo';
import { BoxCard } from '@/components/cards/box-card';
import { SectionHeader } from '@/components/cards/section-header';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Link } from '@inertiajs/react';
import { CircleCheckBig, Download, RefreshCcw } from 'lucide-react';

function CartDetails() {
    const items = [
        {
            title: 'Preiswerte Spitzenqualität',
            description:
                'Erzielen Sie eine überragende Leistung bei optimaler Rendite Ihrer Investition.',
            image: '/images/product-image-1.png',
            short_info: {
                title: 'Trina  ',
                description: 'V ertex s+ 455Wp (Glass-Glass)',
            },
        },
        {
            title: 'Komplettlösung',
            description:
                'Genießen Sie bis zu 2300 W AC-Leistung und betreiben Sie mühelos Geräte mit hohem Strombedarf.',
            image: '/images/product-image-2.png',
            short_info: {
                title: 'EcoFlow',
                description: 'STREAM Ultra X',
            },
        },
        {
            title: 'Komplettlösung',
            description:
                'Genießen Sie bis zu 2300 W AC-Leistung und betreiben Sie mühelos Geräte mit hohem Strombedarf.',
            image: '/images/product-image-2.png',
            short_info: {
                title: 'GSL Energy',
                description: '20 kWh (oder 15 kWh) Lithium-Batteriestapel',
            },
        },
    ];
    return (
        <div className="relative z-10 mx-auto max-w-7xl rounded-lg  mb-5 lg:mb-10 bg-linear-to-r from-btn-primary/15 to-info/15 px-6 pt-13 pb-5 lg:gap-x-10 lg:px-8 lg:py-40 lg:pt-26 lg:pb-10">
            <div className="flex items-center justify-center pb-10">
                <AppLogo />
            </div>
            <SectionHeader
                item={{
                    title: {
                        initial: 'Ihre Kostenschätzung',
                    },
                }}
            >
                <p className="px-50 text-center font-open-sans text-base text-secondary/70 lg:text-lg">
                    {' '}
                    {`description: "Basierend auf einer verfügbaren Installationsfläche von ca. 44 m² besteht die Systemkonfiguration aus 21 Photovoltaikmodulen mit einer erwarteten Leistung von rund 9,0 kWp und umfasst folgende Komponenten:"`}
                </p>
            </SectionHeader>

            <div className="mt-10 grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
                {items.map((item, index) => (
                    <BoxCard key={index} item={item} className={'pb-6!'}>
                        <p className="pt-3 text-secondary/70">
                            <span className="text-sm font-normal text-secondary lg:text-base">
                                {item?.short_info?.title}{' '}
                            </span>{' '}
                            {item?.short_info?.description}
                        </p>
                    </BoxCard>
                ))}
            </div>
            <div className="mt-10">
                <h2 className="py-4 font-montserrat text-3xl text-[40px] font-semibold text-secondary lg:py-8">
                    Dienstleistungen
                </h2>

                <div className="">
                    <h2 className="flex items-center gap-2 font-montserrat text-base font-semibold text-secondary lg:text-lg">
                        <span className="h-7.5 w-7.5">
                            <Icon
                                iconNode={CircleCheckBig}
                                iconClassName="text-secondary"
                            />
                        </span>
                        Professionelle Installation & Netzeinbindung
                        <span className="flex items-center gap-2 rounded-full bg-info p-1 px-2 text-sm text-primary lg:text-base">
                            <Icon
                                iconNode={CircleCheckBig}
                                iconClassName="w-4 h-4 text-primary"
                                className="p-1"
                            />{' '}
                            Inklusive
                        </span>
                    </h2>
                    <p className="flex gap-2 pt-2 pr-120 pl-9 font-open-sans font-normal text-secondary/70">
                        Unsere Expertentechniker übernehmen die komplette
                        Montage und Elektroinstallation, sorgen für nahtlose
                        Netzanbindung und verwenden ausschließlich hochwertige
                        Materialien.
                    </p>
                </div>
                <div className="mt-4">
                    <h2 className="flex items-center gap-2 font-montserrat text-base font-semibold text-secondary lg:text-lg">
                        <span className="h-7.5 w-7.5">
                            <Icon
                                iconNode={CircleCheckBig}
                                iconClassName="text-secondary"
                            />
                        </span>
                        Professionelle Installation & Netzeinbindung
                        <span className="flex items-center gap-2 rounded-full bg-info p-1 px-2 text-sm text-primary lg:text-base">
                            <Icon
                                iconNode={CircleCheckBig}
                                iconClassName="w-4 h-4 text-primary"
                                className="p-1"
                            />{' '}
                            Inklusive
                        </span>
                    </h2>
                    <p className="flex gap-2 pt-2 pr-120 pl-9 font-open-sans font-normal text-secondary/70">
                        Unsere Expertentechniker übernehmen die komplette
                        Montage und Elektroinstallation, sorgen für nahtlose
                        Netzanbindung und verwenden ausschließlich hochwertige
                        Materialien.
                    </p>
                </div>
                <div className="mt-4">
                    <h2 className="flex items-center gap-2 font-montserrat text-base font-semibold text-secondary lg:text-lg">
                        <span className="h-7.5 w-7.5">
                            <Icon
                                iconNode={CircleCheckBig}
                                iconClassName="text-secondary"
                            />
                        </span>
                        Professionelle Installation & Netzeinbindung
                        <span className="flex items-center gap-2 rounded-full bg-info p-1 px-2 text-sm text-primary lg:text-base">
                            <Icon
                                iconNode={CircleCheckBig}
                                iconClassName="w-4 h-4 text-primary"
                                className="p-1"
                            />{' '}
                            Inklusive
                        </span>
                    </h2>
                    <p className="flex gap-2 pt-2 pr-120 pl-9 font-open-sans font-normal text-secondary/70">
                        Unsere Expertentechniker übernehmen die komplette
                        Montage und Elektroinstallation, sorgen für nahtlose
                        Netzanbindung und verwenden ausschließlich hochwertige
                        Materialien.
                    </p>
                </div>
                <div className="mt-4">
                    <h2 className="flex items-center gap-2 font-montserrat text-base font-semibold text-secondary lg:text-lg">
                        <span className="h-7.5 w-7.5">
                            <Icon
                                iconNode={CircleCheckBig}
                                iconClassName="text-secondary"
                            />
                        </span>
                        Professionelle Installation & Netzeinbindung
                        <span className="flex items-center gap-2 rounded-full bg-info p-1 px-2 text-sm text-primary lg:text-base">
                            <Icon
                                iconNode={CircleCheckBig}
                                iconClassName="w-4 h-4 text-primary"
                                className="p-1"
                            />{' '}
                            Inklusive
                        </span>
                    </h2>
                    <p className="flex gap-2 pt-2 pr-120 pl-9 font-open-sans font-normal text-secondary/70">
                        Unsere Expertentechniker übernehmen die komplette
                        Montage und Elektroinstallation, sorgen für nahtlose
                        Netzanbindung und verwenden ausschließlich hochwertige
                        Materialien.
                    </p>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="py-4 font-montserrat text-3xl text-[40px] font-semibold text-secondary lg:py-8">
                    Ihre Investition
                </h2>

                <div>
                    <p className="mb-3 flex justify-between px-15 font-open-sans text-base lg:text-lg">
                        <span className="font-normal text-secondary/70">
                            Ihre Investition
                        </span>{' '}
                        <span className="font-semibold text-secondary">
                            18,345.87 €
                        </span>
                    </p>
                    <p className="mb-3 flex justify-between px-15 pr-0 font-open-sans text-base lg:text-lg">
                        <span className="font-normal text-secondary/70">
                            0 % MwSt.
                        </span>{' '}
                        <span className="font-semibold text-secondary">
                            18,345.87 €
                        </span>
                    </p>
                    <p className="mb-3 flex justify-between border-b border-secondary/10 px-15 pr-0 font-open-sans text-base lg:text-lg">
                        <span className="font-semibold text-secondary">
                            Summe
                        </span>{' '}
                        <span className="text-[40px] font-semibold text-secondary">
                            18,345.87 €
                        </span>
                    </p>

                    <p className="mb-3 flex justify-between px-15 font-open-sans text-base lg:text-lg">
                        <span className="font-normal text-secondary/70">
                            Spezifische Kosten pro kWp (gemäß den jährlichen
                            Steuerbestimmungen 2022){' '}
                        </span>{' '}
                        <span className="font-semibold text-secondary">
                            18,345.87 €
                        </span>
                    </p>
                </div>
            </div>

            <div className="mt-10 rounded-md bg-primary p-10">
                <p className="pb-4 font-montserrat text-lg font-normal text-secondary/70 lg:text-2xl">
                    <span className="font-semibold text-secondary">
                        WICHTIG:
                    </span>{' '}
                    Diese Zahlen sind nur Richtwerte. Individuelle Einsparungen
                    und Projekt-Rabatte werden noch angewendet.
                </p>

                <p className="pb-4 font-montserrat text-lg font-normal text-secondary lg:text-2xl">
                    Um den besten Wert zu gewährleisten, erstellen wir
                    endgültige Angebote erst nach einem persönlichen Gespräch
                    über Ihre individuellen Bedürfnisse. Sie können jetzt einen{' '}
                    <span className="text-btn-primary">Termin buchen</span> oder
                    unser Team wird sich innerhalb der nächsten 24 Stunden bei
                    Ihnen melden.
                </p>
            </div>

            <div className="mt-8 ">
                <div className="flex items-center justify-center gap-4">
                    <Link href="/booking">
                        <Button className="group border border-btn-primary bg-transparent text-secondary transition-all duration-300 ease-in-out hover:bg-btn-primary hover:text-white">
                            <Icon
                                iconNode={Download}
                                variant="circle"
                                className="border border-btn-primary bg-transparent text-secondary/70 transition-all duration-300 ease-in-out group-hover:border-white group-hover:text-white"
                                iconClassName="text-btn-primary group-hover:text-white transition-colors duration-300 ease-in-out"
                            />
                            Kostenvoranschlag herunterladen
                        </Button>
                    </Link>

                    <Link href="/booking">
                        <Button className="group border border-btn-primary bg-transparent text-secondary transition-all duration-300 ease-in-out hover:bg-btn-primary hover:text-white">
                            <Icon
                                iconNode={Download}
                                variant="circle"
                                className="border border-btn-primary bg-transparent text-secondary/70 transition-all duration-300 ease-in-out group-hover:border-white group-hover:text-white"
                                iconClassName="text-btn-primary group-hover:text-white transition-colors duration-300 ease-in-out"
                            />
                            Wirtschaftsanalyse herunterladen
                        </Button>
                    </Link>
                </div>

                <div className="flex items-center justify-center pt-21">
                    <Link className="inline-flex items-center gap-3 text-secondary/70">
                        <Icon
                            iconNode={RefreshCcw}
                            iconClassName="text-secondary/70 w-4 h-4"
                        />
                        Konfigurator neu starten
                    </Link>
                </div>
            </div>
        </div>
    );
}

export { CartDetails };
