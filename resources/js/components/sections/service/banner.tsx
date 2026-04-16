import { Banner } from '@/components/cards/banner';
import { ArrowRight } from 'lucide-react';


export default function banner() {
    const BannerData = {
        slogan: 'INTELLIGENTE SOLARLÖSUNGEN',
       
        title: {
            initial: 'Eigene  ',
            middle: 'saubere',
            last: 'Energie – ganz einfach',
            breakPoint: {
                before: false,
            }
        },

        description: 'Leistungsstarke, durchdachte Solarsysteme für eine effiziente, unabhängige und zukunftssichere Energieversorgung.',
        image: '/images/service-banner.png',
        btn: {
            label: 'Angebot erstellen',
            // href: route('configurator'),
            href: route('angebot-erstellen'),
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
