import React from 'react'

import { DefaultCardComp } from '@/components/cards/default-card-comp'
import { Link } from '@inertiajs/react'

function CardFour() {
    const item = {
        slogan: 'DAS HERZSTÜCK IHRES SYSTEMS',
        title: {
            middle: 'Hochleistungs-Wechselrichter ',
            last: 'Hochleistungs-Wechselrichter für maximale Effizienz'
        },
    }
  return (
    <div className='bg-linear-to-r from-btn-primary/15 to-info/5'>
        <div className="z-10 mx-auto max-w-7xl px-6 py-0  lg:px-0 lg:py-0">
        <DefaultCardComp slogan={item.slogan} title={item.title} className={'grid-cols-1!'} >
            <div>
               
                <p className='font-normal font-montserrat text-secondary/70'>
                  Der Wechselrichter ist das zentrale Element Ihrer Solaranlage – er wandelt erzeugte Solarenergie in nutzbaren Strom für Ihr Zuhause um. Unsere leistungsstarken Systeme stehen für höchste Effizienz, Flexibilität und intelligente Steuerung.
                </p>
                <p className='font-normal font-montserrat text-secondary/70 mt-2'>
                 Mit Wirkungsgraden von über 98 % holen Sie das Maximum aus Ihrer Anlage heraus. Dank integrierter Notstromfunktion bleiben wichtige Verbraucher auch bei einem Netzausfall zuverlässig versorgt. Intelligentes Monitoring sorgt zusätzlich für volle Transparenz und Kontrolle über Ihre Energieflüsse.
                </p>
            </div>

            <div className='mt-7'>
                <h3 className='text-secondary text-2xl font-semibold font-montserrat'>Innovation trifft Leistung</h3>
                <p className='font-normal font-montserrat text-secondary/70 mt-3'>
                 Unsere Wechselrichter vereinen moderne Technologie mit robuster Bauweise und sind für langfristige Zuverlässigkeit unter verschiedensten Bedingungen ausgelegt. Sie ermöglichen eine nahtlose Integration von Batteriespeichern und weiteren Systemkomponenten – für mehr Eigenverbrauch und maximale Unabhängigkeit.
                 </p>
            </div>

            <div className='mt-7'>
                <h3 className='text-secondary text-2xl font-semibold font-montserrat'>Ihre Vorteile im Überblick</h3>
                 <p className='font-normal font-montserrat text-secondary/70 mt-1 lg:text-lg text-base'>
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-secondary/70"></span>  <span className='font-normal font-montserrat text-secondary'>Notstrom-Backup: </span>Versorgung wichtiger Geräte bei Netzausfällen
                </p>
                <p className='font-normal font-montserrat text-secondary/70 mt-1 lg:text-lg text-base'>
                 <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-secondary/70"></span>   <span className='font-normal font-montserrat text-secondary'>Maximaler Ertrag: </span>Über 98 % Wirkungsgrad für optimale Energieumwandlung.
                </p>
                <p className='font-normal font-montserrat text-secondary/70 mt-1 lg:text-lg text-base'>
                   <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-secondary/70"></span> <span className='font-normal font-montserrat text-secondary'>Robuste Bauweise: </span>: Langlebig und wetterbeständig
                </p>
                <p className='font-normal font-montserrat text-secondary/70 mt-1 lg:text-lg text-base'>
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-secondary/70"></span>  <span className='font-normal font-montserrat text-secondary'>Smarte Integration:  </span>Batterie- und Systemkompatibilität für höhere Autarkie
                </p>
            </div>


            <div className='mt-7'>
                <h3 className='text-secondary text-2xl font-semibold font-montserrat'>Produktdatenblätter herunterladen:</h3>
                
                <div className='mt-3'>
                    <Link href='https://homebattery.ecoflow.com/de/documentation' target="_blank" className='mt-3 block text-[#FF383C] lg:text-lg text-base underline ' >ECOFLOW</Link>
                    <Link href={'https://www.sigenergy.com/de/support/download'} target="_blank" className='block text-[#FF383C] lg:text-lg text-base underline' >SIGENERGY</Link>
                </div>
            </div>

        </DefaultCardComp>
    </div>
    </div>
  )
}


export {CardFour}