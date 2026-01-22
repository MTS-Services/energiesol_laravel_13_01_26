import React, { useMemo, useState } from "react";
import { Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import {
    ArrowLeft,
    Droplet,
    Home,
    Warehouse,
    ArrowRight,
    ShieldCheck,
    BadgeCheck,
    Hammer,
} from "lucide-react";
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
    const [exactArea, setExactArea] = useState(0);

    return (
        <div className="py-40">
            <div className="mx-auto w-full container px-6">
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

                {/* Title */}
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
                    <div className="mt-10 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
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

                    {/* Precise measurements block (like screenshot) */}
                    <div className="mt-16">
                        <h3 className="text-lg sm:text-xl font-montserrat font-semibold text-secondary">
                            Do you have precise measurements?
                        </h3>

                        <div className="mt-4 flex flex-col items-center justify-center gap-4">
                            <div className="flex items-center gap-3 text-secondary">
                                <span className="text-sm sm:text-base font-open-sans">Enter exact area</span>

                                {/* number input with spinner */}
                                <div className="flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                                    <input
                                        type="number"
                                        min={0}
                                        value={exactArea}
                                        onChange={(e) => setExactArea(Number(e.target.value))}
                                        className="w-20 bg-transparent text-center text-sm sm:text-base text-secondary outline-none"
                                    />
                                </div>
                            </div>

                            {/* show only when value > 0 */}
                            <div
                                className={`transition-all duration-300 ease-out ${Number(exactArea) > 0
                                    ? "opacity-100 translate-y-0 max-h-20"
                                    : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
                                    }`}
                            >
                                <Link href={'#'} className='rounded-full!'>
                                    <Button size="lg" className="bg-btn-primary rounded-full! py-6!">
                                        <ArrowRight className="h-6! w-6! rounded-full!  bg-white/90 text-blue-700!" />
                                        Continue
                                    </Button>
                                </Link>
                            </div>



                            {/* trust notes row */}
                            <div className="mt-4 flex flex-col items-center justify-center gap-4 text-secondary sm:flex-row">
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="text-blue-600">$</span>
                                    <span>100% Free and Non-Binding Consultation</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <ShieldCheck className="h-4 w-4 text-blue-600" />
                                    <span>Your Data Is Fully Secure and Protected</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom badges */}
                    <div className="mt-60 grid grid-cols-3 max-w-4xl  mx-auto items-center justify-center gap-6 sm:flex-row">
                        {/* Card 1 */}
                        <div className="flex items-center gap-3 rounded-2xl bg-linear-to-r from-btn-primary/15 to-info/5  py-4  shadow-sm">
                            <div className="flex h-9 w-9 items-center justify-center  overflow-hidden">
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
                        <div className="flex items-center gap-3 rounded-2xl bg-linear-to-r from-btn-primary/15 to-info/5 pl-4   py-4 shadow-sm">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl ">
                                <BadgeCheck className="h-full w-full text-emerald-600" />
                            </div>
                            <p className="text-left text-xs text-secondary">Certified Expert</p>
                        </div>


                        {/* Card 3 */}
                        <div className="flex items-center gap-3 rounded-2xl bg-linear-to-r from-btn-primary/15 to-info/5 px-2   py-4 shadow-sm">
                            <div className="flex h-9 w-9  items-center justify-center overflow-hidden">
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
