import { Banner } from '@/components/cards/banner';


export default function banner() {
    const BannerData = {
        slogan: 'Saubere Energie',
        title: {
          
            middle: 'Grüne Energie – ',
            last: 'Ihre Zukunft im Fokus',
            breakPoint: {
                after: true, 
            }
        },

        description: 'Wir liefern intelligente Solarlösungen, die Leistung, Zuverlässigkeit und langfristige Einsparungen vereinen – exakt zugeschnitten auf Ihren Energiebedarf.',
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
