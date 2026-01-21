import { DefaultCardComp } from '@/components/cards/default-card-comp';
import React from 'react'

 function VisionCard() {
  const item = {
        slogan: 'SOLAR SOLUTIONS',
        title: {
            initial: 'ENERGIE SOLUTION NORD - powering your future.',
        },
        image: '/images/vission-card.png',
        btn: {
            label: 'Start my estimate',
            href: '#',
        }
    };

    return (
        <div className="relative py-15 lg:py-30">
          
            <DefaultCardComp
                slogan={item.slogan}
                title={item.title}
                image={item.image}
                btn={item.btn}
            >
                <div>
                    <p className='text-base lg:text-lg font-montserrat mb-3 text-secondary/70'>
                       We are dedicated to providing the current generation with a comprehensive and sustainable supply of renewable energy.</p>
                    <p className='text-base lg:text-lg font-montserrat mb-3 text-secondary/70'>
                        Our long-term goal is to achieve 100% energy independence for every private household. While our core expertise lies in high-performance solar technology, we remain at the forefront of innovation—exploring diverse renewable energy sources to ensure a resilient and clean power future for families today and for generations to come. 
                    </p>
                </div>
            </DefaultCardComp>
        </div>
    );
}

export default VisionCard;
