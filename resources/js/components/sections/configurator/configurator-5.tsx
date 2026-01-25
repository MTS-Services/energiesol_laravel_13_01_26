import React, { useMemo, useState } from "react";
import { Link, router } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BadgeCheck, DollarSign, Info, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Configurator5CardProps {
    title: string;
    image: string;
    titleColor?: string;
    selected?: boolean;
    onClick?: () => void;
}

function Configurator5Card({ title, image, titleColor, selected = false, onClick }: Configurator5CardProps) {
    return (
        <button
            type="button"
            onClick={onClick}
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

export default function Configurator5() {
    const cards = useMemo(
        () => [
            {
                id: "yes",
                title: "Yes!",
                image: "/images/configurator/electrical_car.png",
            },
            {
                id: "no",
                title: "No!",
                image: "/images/configurator/electrical_car.png",
                titleColor: "text-red-600",
            }
        ],
        []
    );

    const [selectedId, setSelectedId] = useState(cards[0].id);

    const handleCardSelect = (id: string) => {
        setSelectedId(id);
        router.visit(route("configurator.step6"));
    };

    return (
        <div className="bg-bg-primary py-20 sm:py-28 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back */}
                <div className="mb-10">
                    <Link href={route("configurator.step4")}>
                        <Button variant="ghost" className="hover:cursor-pointer">
                            <ArrowLeft className="mr-2 h-5 w-5" />
                            Back
                        </Button>
                    </Link>
                </div>

                {/* Title */}
                <div className="mx-auto text-center">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-2xl font-montserrat font-semibold leading-tight text-secondary sm:text-3xl md:text-4xl lg:text-[40px] ">
                            Would you like to add a battery storage system to your solar setup?
                        </h2>

                        <p className="mt-3 text-sm text-slate-500 sm:text-base lg:text-lg xl:text-xl">
                            A solar battery system captures the extra energy produced during the day, allowing you to power your home even at night or during outages.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="mt-10 grid gap-6 md:gap-8 sm:grid-cols-2">
                        {cards.map((card) => (
                            <Configurator5Card
                                key={card.id}
                                selected={selectedId === card.id}
                                onClick={() => handleCardSelect(card.id)}
                                {...card}
                            />
                        ))}
                    </div>
                    <div className="mt-10 flex justify-center">
                        <div className="inline-flex w-full max-w-6xl items-center gap-3 rounded-lg bg-linear px-6 py-4 text-sm text-slate-600 shadow-sm sm:text-base">
                            <Info className="h-5 w-5 text-secondary" />
                            <p>
                                A solar battery system captures the extra energy produced during the day, allowing you to power your home even at night or during outages.
                            </p>
                        </div>
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
