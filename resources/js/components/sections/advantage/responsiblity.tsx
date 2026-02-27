import { DefaultCardComp } from '@/components/cards/default-card-comp';
import { ArrowRight } from 'lucide-react';


export default function Resposiblity() {
    const item = {
        slogan: 'ZUKUNFT',
        title: {
            initial: 'Ihr Zuhause, unsere ',
            middle: 'Verantwortung.',
        },
       
        description: `Bei Energiesol verstehen wir Energie als mehr als nur Strom – sie ist ein Beitrag zum Schutz unserer Umwelt und zur Verantwortung gegenüber kommenden Generationen.

Wir kümmern uns darum, Ihr Zuhause zuverlässig mit sauberer, erneuerbarer Solarenergie zu versorgen. Mit nachhaltigen, durchdachten Lösungen schaffen wir Sicherheit, Unabhängigkeit und ein gutes Gefühl – heute und für die Zukunft Ihrer Familie.`,
        image: '/images/responsiblity.png',
        btn: {
            label: 'Konfigurator starten',
            href: route('configurator') ,
            iconParentClassName: 'bg-primary',
            iconClassName: 'text-secondary',
            iconVariant: 'circle',
            iconNode: ArrowRight,
        }
    };

    return (
        <div className="relative">
            <div
                className="absolute inset-y-0 right-0 z-0 h-full w-1/2"
                style={{
                    backgroundImage: "url('images/frame_dot.png')",
                    backgroundSize: 'contain',
                    backgroundPosition: 'right center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>
            <DefaultCardComp
                slogan={item.slogan}
                title={item.title}
                description={item.description}
                btn={item.btn}
                image={item.image}
            >
                
            </DefaultCardComp>
        </div>
    );
}

export { Resposiblity };
