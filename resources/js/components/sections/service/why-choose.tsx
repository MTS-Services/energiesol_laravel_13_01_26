import { AdvantageCard } from "@/components/cards/advantage-card";
import { SectionHeader } from "@/components/cards/section-header";
import { Award, ChartBarDecreasing, CircleDollarSign, PackageCheck, PlugZap, Section, UserRoundCheck } from "lucide-react";


export default function WhyChoose() {

    const SectionHeaderData = {
        slogan: 'WARUM ENERGIESOL?',
        title: {
            initial: 'Warum Sie uns ',
            middle: 'wählen ',
            last: 'sollten',
        },
        description: "Wir kombinieren Spitzentechnologie mit fachkundiger Beratung, um Ihren Weg zur Solarenergie reibungslos und transparent zu gestalten."
    }
    const items = [

        {
            icon: UserRoundCheck,
            title: 'Individuelle Beratung',
            description: 'We offer personalized advice to help you choose the right solar system for your home.'
        },
        {
            icon: Award,
            title: 'Certified & Trained',
            description: 'We have a team of experienced professionals who are certified and trained to provide you with the best service possible.'
        },
        {
            icon: ChartBarDecreasing,
            title: 'Transparent Pricing',
            description: 'We offer transparent pricing, so you know exactly what you\'re getting for your solar system.'
        },
        {
            icon: PackageCheck,
            title: 'Quality Assurance',
            description: 'We offer a quality assurance program to ensure your solar system is installed safely and efficiently.'
        },
        {
            icon: PlugZap,
            title: '24/7 Support',
            description: 'We offer 24/7 support to address any issues you may have with your solar system.'
        },
        {
            icon: CircleDollarSign,
            title: 'Cost-Effective',
            description: 'We offer cost-effective solar solutions that can help you save money on your utility bills.'
        },
    ]
    return (
        <div className="relative bg-linear-to-r from-btn-primary/15 to-info/5">
            <div className="z-10 mx-auto max-w-7xl px-6 py-15 lg:px-0 lg:py-30">
                <SectionHeader item={SectionHeaderData} />

                <div className="why-choose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 lg:pt-10">


                    {
                        items.map((item, index) => (
                            <AdvantageCard key={index} item={item} />
                        ))
                    }

                </div>
            </div>
        </div>
    );
}
