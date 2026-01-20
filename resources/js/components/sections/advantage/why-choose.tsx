import { AdvantageCard } from "@/components/cards/advantage-card";
import { Award, ChartBarDecreasing, CircleDollarSign, PackageCheck, PlugZap, UserRoundCheck } from "lucide-react";


export default function WhyChoose() {

    const items = [
        
        {
            icon: UserRoundCheck,
            title: 'Personalized Advice',
            description: 'We offer personalized advice to help you choose the right solar system for your home.'
        },
        {
            icon: Award,
            title: 'Certified & Trained',
            description: 'We have a team of experienced professionals who are certified and trained to provide you with the best service possible.'
        },
        {
            icon: ChartBarDecreasing,
            title: 'Transparent Pricing',
            description: 'We offer transparent pricing, so you know exactly what you\'re getting for your solar system.'
        },
        {
            icon: PackageCheck,
            title: 'Quality Assurance',
            description: 'We offer a quality assurance program to ensure your solar system is installed safely and efficiently.'
        },
        {
            icon: PlugZap,
            title: '24/7 Support',
            description: 'We offer 24/7 support to address any issues you may have with your solar system.'
        },
        {
            icon: CircleDollarSign,
            title: 'Cost-Effective',
            description: 'We offer cost-effective solar solutions that can help you save money on your utility bills.'
        },
    ]
    return (
        <div className="relative ">
            <div className="z-10 mx-auto max-w-7xl px-6 py-15 lg:px-0 lg:py-30">
                <div className="mb-3 flex flex-row items-center justify-center gap-3">
                    <span className='after:content[" "] relative inline-block h-5 w-5 rounded-[3px] bg-btn-primary after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-info'></span>
                    <p className="mt-1 text-sm font-normal uppercase md:text-base md:text-secondary">
                       BENEFITS
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center lg:items-center lg:justify-center lg:mb-10 mb-5">
                    <h2 className="font-montserrat text-3xl font-semibold lg:text-[40px] mb-2 text-center">
                     Why Choose Us
                    </h2>
                    <p className="text-center lg:px-78 text-base lg:text-lg text-secondary">We combine cutting-edge technology with expert guidance to make your solar journey seamless and transparent.</p>
                </div>

                <div className="why-choose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 lg:pt-10">
                 

                        {
                        items.map((item, index) => (
                            <AdvantageCard key={index} item={item} />
                        ))
                        }
                    
                </div>
            </div>
        </div>
    );
}
