import { Banner } from '@/components/cards/banner';
import { ArrowRight } from 'lucide-react';


export default function banner() {
    const BannerData = {
        slogan: 'Intelligente Solarlösungen',
        title: {
            initial: 'Eigene  ',
            middle: 'saubere',
            last: 'Energie ganz einfach',
            breakPoint: {
                before: false,
            }
        },

        description: 'Hochleistungsfähige Solarlösungen für eine intelligentere, unabhängige Energiezukunft.',
        image: '/images/service-banner.png',
        btn: {
            label: 'Meine Konfiguration starten',
            href: route('configurator'),
            iconParentClassName: 'bg-primary!',
            iconClassName: 'text-secondary!',
            iconNode: ArrowRight,
        },
    }
    return (

        <div>
            <Banner item={BannerData} />
        </div>
    );
}
