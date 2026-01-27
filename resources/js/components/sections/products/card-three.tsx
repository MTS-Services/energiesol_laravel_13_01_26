import React from 'react'

import { DefaultCardComp } from '@/components/cards/default-card-comp'
import { Link } from '@inertiajs/react'

function CardThree() {
    const item = {
        slogan: 'Intelligentes Energiezentrum',
       
        image: '/images/box1.png',
        boxClassName: 'py-0!',
    };
     const item2 = {   
        image: '/images/box1.png',
        boxClassName: 'py-0!',
    }
  return (
    <div className='bg-linear-to-r'>
        <div className="z-10 mx-auto max-w-7xl px-6 py-10  lg:px-0 lg:py-20">

        <DefaultCardComp image={item.image} boxClassName={item.boxClassName}  slogan={item.slogan}>
            <div>
                <h2 className='text-2xl lg:text-[32px] font-semibold font-montserrat'>
                    <span className='font-playfair-display font-semibold text-info italic'>Smart Energy </span>
                    <span>Intelligentes Energiezentrum</span>
                </h2>
                <p className='font-normal font-montserrat text-secondary/70 mt-3'>
                   Der <span className='font-normal font-montserrat text-secondary'>Energiesol</span>,Home Energy Manager ist unser fortschrittliches Energiemanagementsystem (HEMS), das Ihnen die vollständige Kontrolle gibt. Dieses kompakte und dennoch leistungsstarke Gerät lässt sich nahtlos in alle Photovoltaikanlagen von Energiesol integrieren und fungiert als das „Gehirn“ Ihres heimischen Energie-Ökosystems.
                </p>
                <p className='font-normal font-montserrat text-secondary/70 mt-3'>
                Mit der Energiesol Smart App können Sie Ihre Energieflüsse in Echtzeit visualisieren, Ihre Solarproduktion überwachen und Ihr Verbrauchsverhalten anpassen, um Ihre Autarkie zu maximieren. Unser System greift intelligent ein, um die Energienutzung zu optimieren und Kosten zu sparen – ohne dabei auf Ihren gewohnten Lebenskomfort zu verzichten.
                </p>
            </div>
        </DefaultCardComp>

        <DefaultCardComp  order={true} image={item2.image} boxClassName={item2.boxClassName}>
            <div>
                <h2 className='text-lg lg:text-2xl font-semibold font-montserrat'>
                   Ihre Vorteile mit dem Energiesol Energiemanager:
                </h2>
                <p className='font-normal font-montserrat text-secondary/70 mt-3 lg:text-lg text-base'>
                 <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-secondary/70"></span>
                    <span className='font-normal font-montserrat text-secondary'>Transparenz & totale Kontrolle: </span>TErhalten Sie durch die intuitive Energiesol App volle Einblicke in die Energieerzeugung und den Verbrauch Ihres Zuhauses.
                </p>
               <p className='font-normal font-montserrat text-secondary/70 mt-3 lg:text-lg text-base'>
                 <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-secondary/70"></span>
                   <span className='font-normal font-montserrat text-secondary'>Maximaler Eigenverbrauch: </span>Erleben Sie intelligente Steuerung für mehr Unabhängigkeit vom Stromnetz und steigenden Stromkosten.
                </p>
                <p className='font-normal font-montserrat text-secondary/70 mt-3 lg:text-lg text-base'>
                 <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-secondary/70"></span>
                   <span className='font-normal font-montserrat text-secondary'>Intelligentes EV-Laden: </span>Laden Sie Ihr Elektrofahrzeug mit überschüssigem Solarstrom machen Sie Ihre Mobilität sowohl kosteneffizient als auch umweltfreundlich.
                </p>
                <p className='font-normal font-montserrat text-secondary/70 mt-3 lg:text-lg text-base'>
                 <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-secondary/70"></span>
                   <span className='font-normal font-montserrat text-secondary'>Dynamische Preisoptimierung: </span>Senken Sie Ihre Kosten, indem Sie energieintensive Aufgaben automatisch in Zeiten mit den günstigsten Stromtarifen verschieben.
                </p>
                <p className='font-normal font-montserrat text-secondary/70 mt-3 lg:text-lg text-base'>
                 <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-secondary/70"></span>
                   <span className='font-normal font-montserrat text-secondary'>Zukunftssichere Technologie: </span>Bereit für kommende Innovationen – von bidirektionalem Laden bis hin zu fortschrittlichen Smart-Home-Integrationen.
                </p>
            </div>
        </DefaultCardComp>
        
    </div>
    </div>
  )
}


export {CardThree}