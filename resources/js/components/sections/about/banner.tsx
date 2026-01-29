import { Banner } from '@/components/cards/banner';


export default function banner() {
    const BannerData = {
        slogan: 'INTELIGENTE SOLARLÖSUNGEN',
        title: {
            initial: 'Innovative Energie',
            middle: ' – getragen von Erfahrung',
        },

        description: 'Als Ihr spezialisierter Full-Service-Solaranbieter bieten wir bundesweite Unterstützung von Anfang bis Ende. Unsere Experten begleiten Sie auf dem gesamten Weg – von Ihrer ersten Anfrage bis zur finalen Aktivierung Ihres maßgeschneiderten Energiesystems.',
        image: '/images/about-banner.png',
        btn: {
            label: 'Jetzt konfigurieren',
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
