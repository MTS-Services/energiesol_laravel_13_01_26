import { BadgeCheck } from "lucide-react";

function Badges() {
    return (
        <div>
            {/* Bottom badges */}
            <div className="mx-auto py-15 pt-11 lg:py-30 lg:pt-22 grid max-w-4xl grid-cols-3 items-center justify-center gap-6 sm:flex-row">
                {/* Card 1 */}
                <div className="flex items-center gap-3 rounded-2xl bg-linear-to-r from-btn-primary/15 to-info/5 py-4 shadow-sm">
                    <div className="flex h-9 w-9 items-center justify-center overflow-hidden">
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
                <div className="flex items-center gap-3 rounded-2xl bg-linear-to-r from-btn-primary/15 to-info/5 py-4 pl-4 shadow-sm">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl">
                        <BadgeCheck className="h-full w-full text-emerald-600" />
                    </div>
                    <p className="text-left text-xs text-secondary">
                        Certified Expert
                    </p>
                </div>

                {/* Card 3 */}
                <div className="flex items-center gap-3 rounded-2xl bg-linear-to-r from-btn-primary/15 to-info/5 px-2 py-4 shadow-sm">
                    <div className="flex h-9 w-9 items-center justify-center overflow-hidden">
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

                 <p className=" text-secondary/70 text-xs text-center w-full! col-span-3 mt-3 pb-10">Impressum Datenschutz</p>
            </div>
           
        </div>
    );
}

export {Badges}