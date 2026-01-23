import { Banner } from '@/components/cards/banner';


export default function banner() {
    const BannerData = {
        slogan: 'SMART SOLAR SOLUTIONS',
        title: {
            initial: 'Generate Your Own ',
            middle: 'clean',
            last: 'Energy Effortlessly',
            breakPoint: {
                before: true, 
            }
        },

        description: 'High-performance solar solutions for a smarter, independent energy future.',
        image: '/images/contact-banner.png',
        btn: {
            label: ' Start My Configuration',
            href: '#',
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
