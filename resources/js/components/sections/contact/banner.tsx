import { Banner } from '@/components/cards/banner';


export default function banner() {
    const BannerData = {
        slogan: 'PERSÖNLICHE UNTERSTÜTZUNG',
        title: {
            initial: 'Haben Sie Fragen? ',
            middle: 'Wir sind für Sie da.',
            breakPoint: {
                before: true, 
            }
        },

        description: `Der Umstieg auf Solarenergie ist eine wichtige Entscheidung – und wir sorgen dafür, dass Sie sich in jeder Phase gut informiert und sicher fühlen. Ob es um Wirtschaftlichkeit, Installation oder technische Details geht: Unsere Experten geben Ihnen verständliche, transparente und ehrliche Antworten.

Sprechen Sie uns an – wir beraten Sie persönlich und unverbindlich.`,
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
