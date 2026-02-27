import { DefaultCardComp } from '@/components/cards/default-card-comp';
import React from 'react'

 function VisionCard() {
  const item = {
        slogan: 'ENERGIE FÜR MORGEN',
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
                    Wir setzen uns dafür ein, Haushalte heute und in Zukunft zuverlässig mit nachhaltiger, erneuerbarer Energie zu versorgen. Unser Anspruch ist es, saubere Energie wirtschaftlich, effizient und für möglichst viele Menschen zugänglich zu machen.</p>
                    <p className='text-base lg:text-lg font-montserrat mb-3 text-secondary/70'>
                       Langfristig verfolgen wir das Ziel, Privathaushalten ein Höchstmaß an Energieunabhängigkeit zu ermöglichen. Unsere Kernkompetenz liegt in leistungsstarker Solartechnologie – kombiniert mit intelligenten Speicher- und Energiemanagementlösungen. Gleichzeitig bleiben wir offen für technologische Weiterentwicklungen, um eine stabile, krisenfeste und zukunftssichere Energieversorgung für Familien und kommende Generationen zu gestalten.
                    </p>
                </div>
            </DefaultCardComp>
        </div>
    );
}

export default VisionCard;
