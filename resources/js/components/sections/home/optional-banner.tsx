import { BoxCard } from '@/components/cards/box-card';
import { SingleBanner } from '@/components/cards/single-banner';

export default function OptionalBanner() {
    const item = {

        title: {
            initial: 'Proven Solar',
            middle: 'Success',
            last: 'Stories Near You',
            breakPoint: {
                after: true,
            }
        },
        description: 'Backed by decades of industry expertise, our dedicated specialists provide comprehensive phone support to help you select the right technology and navigate your journey toward energy independence.',
        btn: {
            label: 'Configurator',
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
