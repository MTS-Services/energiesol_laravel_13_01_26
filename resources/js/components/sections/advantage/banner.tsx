import { Banner } from '@/components/cards/banner';


export default function banner() {
    const BannerData = {
        slogan: 'Intelligente Solarlösungen',
        title: {
            
            middle: 'Nachhaltige Energie',
            last: 'für Ihr Zuhause. Ganz einfach.',
            breakPoint: {
                after: false, 
            }
        },

        description: 'Hocheffiziente Solarsysteme für maximale Ersparnis und eine grünere, unabhängige Zukunft.',
        image: '/images/advantage-banner.png',
        btn: {
            label: 'Konfiguration starten',
            href: route('configurator'),
            iconParentClassName: 'bg-primary',
            iconClassName: 'text-secondary',
        }
    }
    return (
       
        <div>
            <Banner item={BannerData}/>
        </div>
    );
}
