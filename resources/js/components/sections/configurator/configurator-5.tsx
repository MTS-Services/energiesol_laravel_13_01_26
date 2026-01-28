import React, { useMemo, useState } from "react";
import { Link, router } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BadgeCheck, DollarSign, Info, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { ConfiguratorBadge } from "@/components/cards/configurator-badge";

interface Configurator5CardProps {
    area?: number;
    solar_id?: number;
    inverter_id?: number;
    battery?: boolean;
    id?: boolean;
    title: string;
    image: string;
    titleColor?: string;
    selected?: boolean;
    onClick?: () => void;
}

function Configurator5Card({ title, image, titleColor, selected = false, onClick, area, solar_id, inverter_id, battery, id }: Configurator5CardProps) {
    return (
        <button
            type="button"
            onClick={()=> router.visit(route("configurator.step6", { area:area, solar_id:solar_id, inverter_id:inverter_id, battery:battery, charger:id }))}
            className={cn(
                "group relative flex h-full flex-col overflow-hidden rounded-2xl bg-linear p-4 text-left shadow-sm transition-all",
                "hover:-translate-y-0.5 hover:shadow-md hover:cursor-pointer",
                selected && "ring-2 ring-white ring-offset-2"
            )}
        >
            <div className="relative flex min-h-82 w-full flex-1 items-center justify-center rounded-2xl bg-white ">
                <img src={image} alt={title} className="h-full max-h-full w-full object-contain" />
            </div>

            <div className="pt-4 p-2">
                <h3 className={cn("mt-2 text-xl md:text-2xl lg:text-3xl font-montserrat font-semibold", titleColor ?? "text-secondary")}>{title}</h3>
            </div>
        </button>
    );
}

export default function Configurator5({ solarInverter, area, solar_id, inverter_id, battery }: any) {
    const cards = useMemo(
        () => [
            {
                id: true,
               title: "Ja!",
                image: solarInverter.charger_image,
            },
            {
                id: false,
                title: "NEIN!",
                image: solarInverter.charger_image,
                titleColor: "text-red-600",
            }
        ],
        []
    );



    return (
        <div className="bg-bg-primary py-20 sm:py-28 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back */}
                <div className="mb-10">
                    <Link href={route("configurator.step4")}>
                        <Button variant="ghost" className="hover:cursor-pointer">
                            <ArrowLeft className="mr-2 h-5 w-5" />
                            Zurück
                        </Button>
                    </Link>
                </div>

                {/* Title */}
                <div className="mx-auto text-center">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-2xl font-montserrat font-semibold leading-tight text-secondary sm:text-3xl md:text-4xl lg:text-[40px] ">
                           Möchten Sie Ihrem Solarsystem eine Batteriespeicherung hinzufügen?
                        </h2>

                        <p className="mt-3 text-sm text-slate-500 sm:text-base lg:text-lg xl:text-xl">
                          Ein Solarspeicher nutzt überschüssige Tagesenergie, damit Ihr Zuhause auch nachts oder bei Stromausfällen versorgt wird.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="mt-10 grid gap-6 md:gap-8 sm:grid-cols-2">
                        {cards.map((card, index) => (
                            <Configurator5Card
                                key={index}
                                
                                {...card}

                                area={area}
                                solar_id={solar_id}
                                inverter_id={inverter_id}
                                battery={battery}

                            />
                        ))}
                    </div>
                    <div className="mt-10 flex justify-center">
                        <div className="inline-flex w-full max-w-6xl items-center gap-3 rounded-lg bg-linear px-6 py-4 text-sm text-slate-600 shadow-sm sm:text-base">
                            <Info className="h-5 w-5 text-secondary" />
                            <p>
                               Ein Solarspeicher nutzt Tagesüberschuss, um Ihr Zuhause auch nachts oder bei Ausfällen zu versorgen.
                            </p>
                        </div>
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

                    <ConfiguratorBadge />
                </div>
            </div>
        </div>
    );
}
