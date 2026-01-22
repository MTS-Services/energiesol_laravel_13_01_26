import React, { useMemo, useState } from "react";
import { Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Droplet, Home, Warehouse } from "lucide-react";
import Configurator1Card from "@/components/cards/configurator-1-card";

export default function Configurator1() {
    const cards = useMemo(
        () => [
            { id: "semi_detached", title: "Semi-detached house", area: "40m²", icon: Warehouse },
            { id: "single_family", title: "Single-family house", area: "50m²", icon: Home },
        ],
        []
    );

    const [selectedId, setSelectedId] = useState(cards[0].id);

    return (
        <div className="py-40">
            <div className="mx-auto w-full container px-6 ">
                {/* Back */}
                <div>
                    <Link href={route("configurator")}>
                        <Button
                            variant="ghost"
                            className="px-0 text-base font-normal text-secondary hover:bg-transparent"
                        >
                            <ArrowLeft className="mr-2 h-5 w-5" />
                            Back
                        </Button>
                    </Link>
                </div>

                {/* Center content */}
                <div className="mx-auto max-w-6xl text-center">
                    <h2 className="text-2xl font-montserrat sm:text-3xl md:text-4xl font-semibold leading-tight text-secondary">
                        What is the estimated roof space available for your
                        <br />
                        solar installation?
                    </h2>

                    <p className="mt-2 text-base font-open-sans font-normal sm:text-xl md:text-2xl text-secondary">
                        Pick your property type below or manually enter your roof dimensions.
                    </p>

                    <div className="mt-4 inline-flex items-center gap-2 text-sm text-red-500">
                        <Droplet className="h-4 w-4" />
                        <span>Save up to 30% compared to average market prices</span>
                    </div>

                    {/* Cards */}
                    <div className="mt-10 grid gap-6 sm:grid-cols-2">
                        {cards.map((card) => (
                            <Configurator1Card
                                key={card.id}
                                title={card.title}
                                area={card.area}
                                icon={card.icon}
                                selected={selectedId === card.id}
                                onClick={() => setSelectedId(card.id)}
                            />
                        ))}
                    </div>

                    {/* Optional: show selected */}
                    {/* <div className="mt-6 text-sm text-secondary">Selected: {selectedId}</div> */}
                </div>
            </div>
        </div>
    );
}
