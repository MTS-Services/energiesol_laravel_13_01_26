import React from 'react'

import { DefaultCardComp } from '@/components/cards/default-card-comp'
import { Link } from '@inertiajs/react'

function CardThree() {
    const item = {
        slogan: 'INTELLIGENTES ENERGIEZENTRUM',
       
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
                    <span>– volle Kontrolle für Ihr Zuhause</span>
                </h2>
                <p className='font-normal font-montserrat text-secondary/70 mt-3'>
                   Der <span className='font-normal font-montserrat text-secondary'>Energie Solution </span>Home Energy Manager (HEMS) ist das intelligente Herzstück Ihres Energiesystems. Das kompakte, leistungsstarke System integriert sich nahtlos in Ihre Photovoltaikanlage und steuert Erzeugung, Speicherung und Verbrauch zentral und effizient.
                </p>
                <p className='font-normal font-montserrat text-secondary/70 mt-3'>
               Mit der Energie Solution Smart App behalten Sie Ihre Energieflüsse jederzeit im Blick. Verfolgen Sie Ihre Solarproduktion in Echtzeit, analysieren Sie Ihren Verbrauch und optimieren Sie gezielt Ihre Eigenversorgung.
                </p>
                <p className='font-normal font-montserrat text-secondary/70 mt-3'>
             Unser Energiemanagement greift automatisch ein, um Strom intelligent zu verteilen, Kosten zu senken und Ihre Autarkie zu erhöhen – ohne Einschränkungen im Alltag und bei vollem Komfort.
                </p>
            </div>
        </DefaultCardComp>

        <DefaultCardComp  order={true} image={item2.image} boxClassName={item2.boxClassName}>
            <div>
                <h2 className='text-lg lg:text-2xl font-semibold font-montserrat'>
                   Ihre Vorteile mit dem Energie Solution Energiemanager
                </h2>
                <p className='font-normal font-montserrat text-secondary/70 mt-3 lg:text-lg text-base'>
                 <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-secondary/70"></span>
                    <span className='font-normal font-montserrat text-secondary'>Transparenz & volle Kontrolle: </span>Mit der intuitiven Energie Solution App erhalten Sie jederzeit detaillierte Einblicke in Energieerzeugung, Speicherung und Verbrauch Ihres Zuhauses.
                </p>
               <p className='font-normal font-montserrat text-secondary/70 mt-3 lg:text-lg text-base'>
                 <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-secondary/70"></span>
                   <span className='font-normal font-montserrat text-secondary'>Maximaler Eigenverbrauch: </span>Durch intelligente Steuerung wird Ihr Solarstrom optimal genutzt – für mehr Unabhängigkeit vom Stromnetz und steigenden Energiekosten.
                </p>
                <p className='font-normal font-montserrat text-secondary/70 mt-3 lg:text-lg text-base'>
                 <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-secondary/70"></span>
                   <span className='font-normal font-montserrat text-secondary'>Intelligentes E-Auto-Laden: </span>Laden Sie Ihr Elektrofahrzeug bevorzugt mit überschüssigem Solarstrom und machen Sie Ihre Mobilität effizient und nachhaltig.
                </p>
                <p className='font-normal font-montserrat text-secondary/70 mt-3 lg:text-lg text-base'>
                 <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-secondary/70"></span>
                   <span className='font-normal font-montserrat text-secondary'>Dynamische Preisoptimierung: </span>Verschieben Sie energieintensive Anwendungen automatisch in Zeiten mit günstigen Stromtarifen und senken Sie so aktiv Ihre Kosten.
                </p>
                <p className='font-normal font-montserrat text-secondary/70 mt-3 lg:text-lg text-base'>
                 <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-secondary/70"></span>
                   <span className='font-normal font-montserrat text-secondary'>Zukunftssichere Technologie: </span>Bereit für kommende Innovationen – von bidirektionalem Laden bis hin zu erweiterten Smart-Home-Integrationen.
                </p>
            </div>
        </DefaultCardComp>
        
    </div>
    </div>
  )
}


export {CardThree}