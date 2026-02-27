import { Banner } from '@/components/cards/banner';


export default function banner() {
    const BannerData = {
        slogan: 'Saubere Energie',
        title: {
          
            middle: 'Unsere Produkte –',
            last: ' Technologie für maximale Unabhängigkeit',
            breakPoint: {
                after: true, 
            }
        },

        description: `Innovative Solarsysteme, leistungsstarke Speicherlösungen und intelligentes Energiemanagement – perfekt aufeinander abgestimmt.
Für mehr Eigenverbrauch, geringere Energiekosten und maximale Kontrolle.`,
        image: '/images/product-banner.png',
        btn: {
            label: 'Ersparnis berechnen',
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
