import { BadgeCheck } from "lucide-react";

function ConfiguratorBadge() {
    return (
        <div className="mx-auto mt-60 grid max-w-4xl grid-cols-3 items-center justify-center gap-6 sm:flex-row">
            {/* Card 1 */}
            <div className="bg-linear flex items-center gap-3 rounded-2xl p-4 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center overflow-hidden">
                    <img
                        src="/images/configurator/local-teams.png"
                        alt="Local professional teams"
                        className="h-full w-full object-contain"
                    />
                </div>
                <p className="text-left text-xs text-secondary">
                   Deutschlandweite Installation durch Profis
                </p>
            </div>

            {/* Card 2 */}
            <div className="bg-linear flex items-center gap-3 rounded-2xl p-4 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl">
                    <BadgeCheck className="h-full w-full text-emerald-600" />
                </div>
                <p className="text-left text-xs text-secondary">
                  Zertifizierter Experte
                </p>
            </div>

            {/* Card 3 */}
            <div className="bg-linear flex items-center gap-3 rounded-2xl p-4 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center overflow-hidden">
                    <img
                        src="/images/configurator/craftsmanship.png"
                        alt="Craftsmanship since 2018"
                        className="h-full w-full object-contain"
                    />
                </div>
                <p className="text-left text-xs text-secondary">
                   Professionelles Handwerk seit 2018
                </p>
            </div>
        </div>
    );
}

export  {ConfiguratorBadge};
