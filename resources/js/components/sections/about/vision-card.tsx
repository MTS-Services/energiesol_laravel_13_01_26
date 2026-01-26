import { DefaultCardComp } from '@/components/cards/default-card-comp';
import React from 'react'

 function VisionCard() {
  const item = {
        slogan: 'Energie für morgen',
        title: {
            initial: 'Unsere Vision',
        },
        image: '/images/vission-card.png',
        btn: {
            label: 'Angebot einholen',
            href: route('configurator'),
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
                      Wir setzen uns dafür ein, der heutigen Generation eine umfassende und nachhaltige Versorgung mit erneuerbaren Energien zu bieten.</p>
                    <p className='text-base lg:text-lg font-montserrat mb-3 text-secondary/70'>
                       Unser langfristiges Ziel ist es, jedem Privathaushalt eine 100%ige Energieunabhängigkeit zu ermöglichen. Während unsere Kernkompetenz in der Hochleistungs-Solartechnologie liegt, bleiben wir ein Vorreiter für Innovationen – wir erforschen vielfältige erneuerbare Energiequellen, um eine krisenfeste und saubere Energiezukunft für Familien heute এবং für kommende Generationen zu sichern. 
                    </p>
                </div>
            </DefaultCardComp>
        </div>
    );
}

export default VisionCard;
