import { AdvantageCard } from "@/components/cards/advantage-card";
import { SectionHeader } from "@/components/cards/section-header";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import { ArrowRight } from "lucide-react";


export default function WhyChoose({advantages, className}: {advantages?: any[], className?: string}) {

    const SectionHeaderData = {
        slogan: 'WARUM ENERGIESOL?',
        title: {
            initial: 'Warum Sie uns ',
            middle: 'wählen ',
            last: 'sollten',
        },
        description: "Wir kombinieren Spitzentechnologie mit fachkundiger Beratung, um Ihren Weg zur Solarenergie reibungslos und transparent zu gestalten."
    }
    return (
        <div className={cn('relative bg-linear-to-r from-transparent to-transparent', className)}>
            <div className="z-10 mx-auto max-w-7xl px-6 py-15 lg:px-0 lg:py-30">
                <SectionHeader item={SectionHeaderData} />

                <div className="why-choose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 lg:pt-10">


                    {
                        advantages?.map((item, index) => (
                            <AdvantageCard key={index} item={item} />
                        ))
                    }

                </div>
                <div className="mt-10">
                    <Link href={route('configurator')}>
                       <Button>
                        <Icon iconNode={ArrowRight}  variant="circle" className="bg-primary" iconClassName="text-secondary" />
                       Konfigurator starten
                       </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
