import { BoxCard } from '@/components/cards/box-card';
import { SingleBanner } from '@/components/cards/single-banner';

export default function OptionalBanner() {
    const item = {

        title: {
            initial: 'Bewährte ',
            middle: 'Erfolgsgeschichten',
            last: ' zum Thema Solarenergie in Ihrer Nähe',
            breakPoint: {
                after: true,
            }
        },
        description: 'Gestützt auf jahrzehntelange Branchenerfahrung bieten unsere engagierten Spezialisten umfassenden telefonischen Support, um Ihnen bei der Auswahl der richtigen Technologie zu helfen und Sie auf Ihrem Weg zur Energieunabhängigkeit zu begleiten.',
        btn: {
            label: 'Konfigurator',
            href: '#',
            buttonVariant: 'default',
            buttonClassName: '',
            iconClassName: 'text-secondary!',
            iconParentClassName: 'bg-primary!',
            iconVariant: 'circle',
            iconNode: null,
        }
    };
    return (
        <div className="relative">
            <div
                className="absolute inset-0 top-0 left-0 z-0 h-full w-full"
                style={{
                    backgroundImage: "url('/images/background2.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    transform: 'scaleY(0.9)',
                }}
            ></div>
            <div className="relative z-10 mx-auto max-w-7xl  px-6 py-15 lg:px-0 lg:py-30">


                <SingleBanner item={item} />
            </div>
        </div>
    );
}
