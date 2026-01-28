import { ConfiguratorBadge } from '@/components/cards/configurator-badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link, router } from '@inertiajs/react';
import { ArrowLeft, BadgeCheck, DollarSign, Lock } from 'lucide-react';
import { useState } from 'react';

interface Configurator2CardProps {
    area?: number,
    id?: number;
    brand_title?: string;
    title?: string;
    description: string;
    image: string;
    selected?: boolean;
    onClick?: () => void;
}

function Configurator2Card({
    area,
    id,
    title,
    description,
    image,
    selected = false,
    onClick,
}: Configurator2CardProps) {
    return (
        <button
            type="button"
            onClick={()=> router.visit(route("configurator.step3",{area:area, solar_id:id}))}
            className={cn(
                'group bg-linear relative flex h-full flex-col overflow-hidden rounded-2xl p-3 text-left shadow-sm transition-all',
                'hover:-translate-y-0.5 hover:cursor-pointer hover:shadow-md',
                selected && 'ring-2 ring-white ring-offset-2',
            )}
        >
            <div className="relative flex min-h-82 w-full flex-1 items-center justify-center rounded-2xl bg-white px-4 py-6">
                <img
                    src={image}
                    alt={title}
                    className="h-full max-h-82 w-auto object-contain"
                />
            </div>

            <div className="p-6">
                <h3 className="mt-2 font-montserrat text-xl font-semibold text-secondary">
                    {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {description}
                </p>

                <div className="mt-5 flex items-center gap-3">
                    <p className="text-xs text-slate-500">{title}</p>
                </div>
            </div>
        </button>
    );
}

export default function Configurator2({ solarPanels, area }: { solarPanels: any[]; area?: number }) {
    const [selectedId, setSelectedId] = useState(null);

    const handleCardSelect = (id: number) => {
        setSelectedId(id);
        
        sessionStorage.setItem('solar_id', id.toString());
        console.log(
        sessionStorage.getItem('solar_id'), sessionStorage.getItem('area'));
        // router.visit(route("configurator.step3"));
    };

    return (
        <div className="bg-white py-20 sm:py-28 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back */}
                <div className="mb-10">
                    <Link href={route('configurator')}>
                        <Button
                            variant="ghost"
                            className="hover:cursor-pointer"
                        >
                            <ArrowLeft className="mr-2 h-5 w-5" />
                            Zurück
                        </Button>
                    </Link>
                </div>

                {/* Title */}
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="font-montserrat text-2xl leading-tight font-semibold text-secondary sm:text-3xl md:text-4xl">
                        Perfekt! Was ist Ihre oberste Priorität bei
                        Solarenergie?
                    </h2>

                    <p className="mt-3 text-sm text-slate-500 sm:text-base">
                        Wählen Sie eine Kategorie, die Ihren Bedürfnissen
                        entspricht. Diese kann jederzeit angepasst werden.
                    </p>

                    {/* Cards */}
                    <div className="mt-10 grid gap-6 hover:cursor-pointer sm:grid-cols-2 md:gap-8">
                        {solarPanels.map((card, index) => (
                            <Configurator2Card
                                key={index}
                                {...card}
                                area={area}
                            />
                        ))}
                    </div>

                    {/* Under-card notes */}
                 <div className="mt-10 flex flex-col items-center justify-center gap-4 text-sm text-slate-600 sm:flex-row">

                        <div className="inline-flex items-center gap-2 text-center sm:text-left text-base md:text-lg lg:text-xl">
                            <DollarSign className="h-4 w-4 text-blue-600" />
                            <span>100 % kostenlose und unverbindliche Beratung</span>
                        </div>
                        <div className="inline-flex items-center gap-2 text-center sm:text-left text-base md:text-lg lg:text-xl">
                            <Lock className="h-4 w-4 text-blue-600" />
                            <span>Ihre Daten sind vollständig sicher und geschützt</span>
                        </div>
                    </div>

                    {/* Bottom badges */}
                   <ConfiguratorBadge/>
                </div>
            </div>
        </div>
    );
}
