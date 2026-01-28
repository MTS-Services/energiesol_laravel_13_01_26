import { SectionHeader } from '@/components/cards/section-header';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Link } from '@inertiajs/react';
import { Download, RefreshCcw } from 'lucide-react';

function CartPrice({ is_valid_order }: { is_valid_order: boolean }) {
    return (
        <div className="relative z-10 mx-auto mb-5 max-w-7xl rounded-lg bg-linear-to-r from-btn-primary/15 to-info/15 px-6 pt-13 pb-5 lg:mb-10 lg:gap-x-10 lg:px-8 lg:py-40">
            <SectionHeader>
                <h2 className="text[40px] px-10 pb-2 text-center font-montserrat text-3xl font-semibold text-secondary lg:px-50">
                    Entfesseln Sie Ihr finanzielles Potenzial mit Solarenergie
                </h2>
                <p className="px-0 text-center font-open-sans text-base text-secondary/70 lg:px-35 lg:text-lg">
                    {' '}
                    {`Wir haben die langfristigen Einsparungen und die Effizienz Ihres maßgeschneiderten PV-Systems sorgfältig analysiert. Durch die Investition Ihres eigenen Kapitals wird ein Gesamtertrag von 30.122,19 € über die nächsten 20 Jahre prognostiziert.`}
                </p>
            </SectionHeader>
            <div className="relative z-10">
                {!is_valid_order && (
                    <div className="absolute inset-0 top-0 left-0 z-20 h-full w-full bg-linear-to-r from-info/5 to-btn-primary/5 backdrop-blur-3xl"></div>
                )}
                <div className="mt-10">
                    <div>
                        <p className="mb-3 flex justify-between pl-0 font-open-sans text-base lg:pl-15 lg:text-lg">
                            <p className="font-open-sans text-lg font-normal text-secondary/80 lg:text-2xl">
                                Gesamtinvestition
                                <span className="block text-sm font-normal text-secondary/70 lg:text-base">
                                    inklusive MwSt. und Einmalzahlung
                                </span>{' '}
                            </p>
                            <span className="font-semibold text-secondary">
                                18,345.87 €
                            </span>
                        </p>
                        <p className="mb-3 flex justify-between px-0 pr-0 font-open-sans text-base lg:px-15 lg:text-lg">
                            <span className="font-normal text-secondary/70">
                                Amortisation
                            </span>{' '}
                            <span className="font-semibold text-secondary">
                                9 Years
                            </span>
                        </p>
                        <p className="mb-2 flex justify-between border-b border-secondary/10 px-0 pr-0 font-open-sans text-lg lg:px-15 lg:text-2xl">
                            <span className="font-semibold text-secondary">
                                Stromerzeugungskosten
                            </span>{' '}
                            <span className="text-lg font-semibold text-secondary lg:text-2xl">
                                0.1341€kWh
                            </span>
                        </p>

                        <p className="mb-3 flex items-center justify-between pl-0 font-open-sans text-base lg:pl-15 lg:text-lg">
                            <p>
                                <span className="font-semibold text-secondary">
                                    Rendite
                                    <span className="text-sm text-secondary/70 lg:text-lg">
                                        {' '}
                                        über 20 Jahre
                                    </span>
                                </span>
                                <span className="block text-sm text-secondary/70 lg:text-lg">
                                    mit Eigenkapital
                                </span>
                            </p>
                            <span className="font-semibold text-secondary">
                                30,123.19€
                            </span>
                        </p>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
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
        </div>
    );
}

export { CartPrice };
