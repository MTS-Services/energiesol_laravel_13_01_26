import React from "react";
import { Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BadgeCheck, DollarSign, Lock } from "lucide-react";

export default function Configurator2() {
    return (
        <div className="bg-white py-20 sm:py-28 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back */}
                <div className="mb-10">
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
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="text-2xl font-montserrat font-semibold leading-tight text-secondary sm:text-3xl md:text-4xl">
                        Perfect! What is your top priority for solar energy?
                    </h2>

                    <p className="mt-3 text-sm text-slate-500 sm:text-base">
                        Pick a category that fits your needs. This can be modified at any
                        stage.
                    </p>

                    {/* Cards */}
                    <div className="mt-10 grid gap-6 md:gap-8 sm:grid-cols-2">
                        {/* Left Card */}
                        <div className="group relative flex flex-col overflow-hidden rounded-xl bg-linear-to-r from-btn-primary/15 to-info/5 p-3 shadow-sm">
                            {/* Image area */}
                            <div className="relative flex min-h-82 w-full flex-1 items-center justify-center rounded-2xl bg-white px-4 py-6">
                                {/* <div className="absolute left-6 top-5">
                                    <span className="text-lg font-semibold text-sky-600">
                                        TrinaSolar
                                    </span>
                                </div> */}

                                {/* Replace src with your real product image */}
                                <img
                                    src="/images/configurator/trina-panel.png"
                                    alt="Trina Solar panel"
                                    className="h-full max-h-82 w-auto object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 text-left">
                                <h3 className="text-xl font-montserrat font-semibold text-secondary">
                                    Budget-Friendly Excellence
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                    Get superior power output with the best return on your
                                    investment.
                                </p>

                                <div className="mt-4 flex items-center gap-3">
                                    <div className="h-8 w-8 overflow-hidden rounded-full border border-white shadow">
                                        {/* optional avatar */}
                                        <img
                                            src="/images/configurator/trina-panel.png"
                                            alt="Advisor"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <p className="text-xs text-slate-500">
                                        Vertex S+ TSM-NE9R.2
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Card (Selected style like screenshot) */}
                        <div className="group relative flex flex-col overflow-hidden rounded-xl bg-linear-to-r from-btn-primary/15 to-info/5 p-3 shadow-sm">
                            {/* Image area */}
                            <div className="relative flex min-h-82 w-full flex-1 items-center justify-center rounded-2xl bg-white px-4 py-6">

                                {/* Replace src with your real product image */}
                                <img
                                    src="/images/configurator/aiko-panel.png"
                                    alt="AIKO panel"
                                    className="h-full max-h-82 w-auto object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 text-left">
                                <h3 className="text-xl font-montserrat font-semibold text-secondary">
                                    Ultimate Power Output
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                    Advanced technology engineered for the highest possible energy
                                    generation.
                                </p>

                                <div className="mt-4 flex items-center gap-3">
                                    <div className="h-8 w-8 overflow-hidden rounded-full border border-white shadow">
                                        {/* optional avatar */}
                                        <img
                                            src="/images/configurator/aiko-panel.png"
                                            alt="Advisor"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <p className="text-xs text-slate-500">Aiko Neostar 3S+</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Under-card notes */}
                    <div className="mt-10 flex flex-col items-center justify-center gap-4 text-sm text-slate-600 sm:flex-row">
                        <div className="inline-flex items-center gap-2 text-center sm:text-left">
                            <DollarSign className="h-4 w-4 text-blue-600" />
                            <span>100% Free and Non-Binding Consult.</span>
                        </div>
                        <div className="inline-flex items-center gap-2 text-center sm:text-left">
                            <Lock className="h-4 w-4 text-blue-600" />
                            <span>Your Data Is Fully Secure and Protected</span>
                        </div>
                    </div>

                    {/* Bottom badges */}
                    <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 max-w-4xl mx-auto">
                        {/* Card 1 */}
                        <div className="flex items-center gap-3 rounded-2xl bg-linear-to-r from-btn-primary/15 to-info/5 py-4 px-4 shadow-sm">
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
                        <div className="flex items-center gap-3 rounded-2xl bg-linear-to-r from-btn-primary/15 to-info/5 py-4 px-4 shadow-sm">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl">
                                <BadgeCheck className="h-full w-full text-emerald-600" />
                            </div>
                            <p className="text-left text-xs text-secondary">Certified Expert</p>
                        </div>


                        {/* Card 3 */}
                        <div className="flex items-center gap-3 rounded-2xl bg-linear-to-r from-btn-primary/15 to-info/5 py-4 px-4 shadow-sm">
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
