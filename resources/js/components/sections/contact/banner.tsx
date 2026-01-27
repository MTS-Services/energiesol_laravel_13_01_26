import { Banner } from '@/components/cards/banner';


export default function banner() {
    const BannerData = {
        slogan: 'Persönliche Unterstützung',
        title: {
            initial: 'Haben Sie Fragen? ',
            middle: 'Wir sind für Sie da.',
            breakPoint: {
                before: true, 
            }
        },

        description: 'Der Wechsel zu Solarenergie ist eine große Entscheidung, und wir möchten, dass Sie sich bei jedem Schritt sicher fühlen. Egal, ob Sie Fragen zu Ersparnissen, der Installation oder der Technologie haben – unsere Spezialisten stehen bereit, um Ihnen klare und ehrliche Antworten zu geben. Kontaktieren Sie uns – wir beraten Sie gerne.',
        image: '/images/contact-banner.png',
        btn: {
            label: 'Kostenlose Expertenberatung',
            href: route('configurator') ,
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
