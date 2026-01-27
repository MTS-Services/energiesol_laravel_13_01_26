import React, { useMemo, useState } from "react";
import { Link, router } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BadgeCheck, DollarSign, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Configurator3CardProps {
    id?: number,
    area?: number,
    solar_id?: number,
    title: string;
    brand_title?: string;
    note?: string;
    description: string;
    image: string;
    selected?: boolean;
    onClick?: () => void;
}

function Configurator3Card({ title, description, image, note, selected = false, onClick, area, solar_id ,id  }: Configurator3CardProps) {
    return (
        <button
            type="button"
            onClick={()=>router.visit(route("configurator.step4", {area: area, solar_id: solar_id, inverter_id: id}))}
            className={cn(
                "group relative flex h-full flex-col overflow-hidden rounded-2xl bg-linear p-3 text-left shadow-sm transition-all",
                "hover:-translate-y-0.5 hover:shadow-md hover:cursor-pointer",
                selected && "ring-2 ring-white ring-offset-2"
            )}
        >
            <div className="relative flex min-h-82 w-full flex-1 items-center justify-center rounded-2xl bg-white px-4 py-6">
                <img src={image} alt={title} className="h-full max-h-82 w-auto object-contain" />
            </div>

            <div className="pt-4 p-2">
                <h3 className="mt-2 text-xl md:text-2xl lg:text-3xl  font-montserrat font-semibold text-secondary">{title}</h3>
                <p className="mt-2 text-sm md:text-base lg:text-xl leading-relaxed text-slate-600">{description}</p>

                <div className="mt-3 flex items-center gap-3">
                    <p className="text-base text-slate-500">{note}</p>
                </div>
            </div>
        </button>
    );
}

export default function Configurator3({area, solar_id, solarInverterService }: any) {
    



    return (
        <div className="bg-white py-20 sm:py-28 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back */}
                <div className="mb-10">
                    <Link href={route("configurator.step2")}>
                        <Button variant="ghost" className="hover:cursor-pointer">
                            <ArrowLeft className="mr-2 h-5 w-5" />
                            Zurück
                        </Button>
                    </Link>
                </div>

                {/* Title */}
                <div className="mx-auto  text-center">
                    <h2 className="text-2xl font-montserrat font-semibold leading-tight text-secondary sm:text-3xl md:text-4xl">
                     Perfekt! Was ist Ihre oberste Priorität bei Solarenergie?
                    </h2>

                    <p className="mt-3 text-sm text-slate-500 sm:text-base">
                      Wählen Sie eine Kategorie, die Ihren Bedürfnissen entspricht. Diese kann jederzeit angepasst werden.
                    </p>

                    {/* Cards */}
                    <div className="mt-10 grid gap-6 md:gap-8 lg:grid-cols-3 sm:grid-cols-2">
                        {solarInverterService.map((card) => (
                            <Configurator3Card
                                key={card.id}
                                {...card}
                                area={area}
                                solar_id={solar_id}
                            />
                        ))}
                    </div>

                    {/* Under-card notes */}
                    <div className="mt-10 flex flex-col items-center justify-center gap-4 text-sm text-slate-600 sm:flex-row">
                        <div className="inline-flex items-center gap-2 text-center sm:text-left text-base md:text-lg lg:text-xl">
                            <DollarSign className="h-4 w-4 text-blue-600" />
                            <span>100% Free and Non-Binding Consult.</span>
                        </div>
                        <div className="inline-flex items-center gap-2 text-center sm:text-left text-base md:text-lg lg:text-xl">
                            <Lock className="h-4 w-4 text-blue-600" />
                            <span>Your Data Is Fully Secure and Protected</span>
                        </div>
                    </div>

                    {/* Bottom badges */}
                    <div className="mt-40 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 max-w-4xl mx-auto">
                        {/* Card 1 */}
                        <div className="flex items-center gap-3 rounded-2xl bg-linear py-4 px-4 shadow-sm">
                            <div className="flex h-10 w-10 items-center justify-center overflow-hidden">
                                <img
                                    src="/images/configurator/local-teams.png"
                                    alt="Local professional teams"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <p className="text-left text-xs text-secondary">
                                Nationwide installation by local
                                <br />
                                professional teams
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="flex items-center gap-3 rounded-2xl bg-linear py-4 px-4 shadow-sm">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl">
                                <BadgeCheck className="h-full w-full text-emerald-600" />
                            </div>
                            <p className="text-left text-xs text-secondary">Certified Expert</p>
                        </div>


                        {/* Card 3 */}
                        <div className="flex items-center gap-3 rounded-2xl bg-linear py-4 px-4 shadow-sm">
                            <div className="flex h-10 w-10 items-center justify-center overflow-hidden">
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
