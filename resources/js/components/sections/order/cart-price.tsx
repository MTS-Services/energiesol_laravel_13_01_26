import AppLogo from '@/components/app-logo';
import { BoxCard } from '@/components/cards/box-card';
import { SectionHeader } from '@/components/cards/section-header';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Link } from '@inertiajs/react';
import { CircleCheckBig, Download, RefreshCcw } from 'lucide-react';

function CartPrice() {
    
    return (
        <div className="relative z-10 mx-auto max-w-7xl rounded-lg  mb-5 lg:mb-10 bg-linear-to-r from-btn-primary/15 to-info/15 px-6 pt-13 pb-5 lg:gap-x-10 lg:px-8 lg:py-40 ">
          
            <SectionHeader >
                <h2 className='font-montserrat font-semibold text-secondary text-3xl text[40px] text-center px-25 lg:px-50 pb-2'>Entfesseln Sie Ihr finanzielles Potenzial mit Solarenergie</h2>
                <p className="px-35 text-center font-open-sans text-base text-secondary/70 lg:text-lg">
                    {' '}
                    {`Wir haben die langfristigen Einsparungen und die Effizienz Ihres maßgeschneiderten PV-Systems sorgfältig analysiert. Durch die Investition Ihres eigenen Kapitals wird ein Gesamtertrag von 30.122,19 € über die nächsten 20 Jahre prognostiziert.`}
                </p>
            </SectionHeader>

    <div className="mt-10">
            
                <div>
                    <p className="mb-3 flex justify-between pl-15 font-open-sans text-base lg:text-lg">
                        <p className='text-lg lg:text-2xl font-open-sans text-secondary/80 font-normal'>
                            Gesamtinvestition
                            <span className="font-normal text-sm  lg:text-base text-secondary/70 block">
                            inklusive MwSt. und Einmalzahlung
                            </span>{' '}
                        </p>
                        <span className="font-semibold text-secondary">
                            18,345.87 €
                        </span>
                    </p>
                    <p className="mb-3 flex justify-between px-15 pr-0 font-open-sans text-base lg:text-lg">
                        <span className="font-normal text-secondary/70">
                          Amortisation
                        </span>{' '}
                        <span className="font-semibold text-secondary">
                          9 Years
                        </span>
                    </p>
                    <p className="mb-2 flex justify-between border-b border-secondary/10 px-15 pr-0 font-open-sans text-lg lg:text-2xl">
                        <span className="font-semibold text-secondary">
                         Stromerzeugungskosten
                        </span>{' '}
                        <span className="text-lg lg:text-2xl font-semibold text-secondary">
                           0.1341€kWh
                        </span>
                    </p>

                    <p className="mb-3 flex items-center justify-between pl-15 font-open-sans text-base lg:text-lg">
                       <p>
                         <span className="font-semibold text-secondary">
                           Rendite
                           <span className='text-sm lg:text-lg text-secondary/70'> über 20 Jahre</span>
                        </span>
                        <span className='block text-sm lg:text-lg text-secondary/70'>mit Eigenkapital</span>
                       </p>
                        <span className="font-semibold text-secondary">
                          30,123.19€
                        </span>
                    </p>
                </div>
            </div>
            <div className="mt-10 ">
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

export { CartPrice };
