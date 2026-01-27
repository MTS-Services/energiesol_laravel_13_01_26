import React from 'react'

import { DefaultCardComp } from '@/components/cards/default-card-comp'
import { Link } from '@inertiajs/react'

function CardFour() {
    const item = {
        slogan: 'DAS HERZSTÜCK IHRES SYSTEMS',
        title: {
            middle: 'Hochleistungs-Wechselrichter: ',
            last: 'Wandeln Sie Solarenergie in nutzbaren Strom für Ihr Zuhause um.'
        },
    }
  return (
    <div className='bg-linear-to-r from-btn-primary/15 to-info/5'>
        <div className="z-10 mx-auto max-w-7xl px-6 py-0  lg:px-0 lg:py-0">
        <DefaultCardComp slogan={item.slogan} title={item.title} className={'grid-cols-1!'} >
            <div>
               
                <p className='font-normal font-montserrat text-secondary/70'>
                  Das Herzstück Ihrer Solaranlage: Bei Energiesol bieten unsere Wechselrichter maximale Flexibilität und Effizienz. Funktionen wie die integrierte Notstromversorgung stellen sicher, dass Ihre wichtigsten Geräte auch bei Stromausfällen weiterlaufen. Mit Wirkungsgraden von über 98 % verwandeln unsere robusten Systeme mehr Sonnenlicht in Ersparnisse und bieten gleichzeitig smartes Monitoring für die totale Kontrolle.
                </p>
            </div>

            <div className='mt-7'>
                <h3 className='text-secondary text-2xl font-semibold font-montserrat'>Innovation trifft Leistung</h3>
                <p className='font-normal font-montserrat text-secondary/70 mt-3'>
                  Unsere Solarmodule vereinen Spitzentechnologie mit außergewöhnlicher Langlebigkeit. Entwickelt für Spitzenleistungen selbst unter schwierigen Bedingungen – wie etwa bei Schwachlicht – bieten unsere Produkte eine nahtlose Kombination aus Sicherheit, Nachhaltigkeit und moderner Ästhetik.
                </p>
            </div>

            <div className='mt-7'>
                <h3 className='text-secondary text-2xl font-semibold font-montserrat'>Ihre Vorteile:</h3>
                 <p className='font-normal font-montserrat text-secondary/70 mt-1 lg:text-lg text-base'>
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-secondary/70"></span>  <span className='font-normal font-montserrat text-secondary'>Notstrom-Backup: </span>Zuverlässige Stromversorgung bei Netzausfällen.
                </p>
                <p className='font-normal font-montserrat text-secondary/70 mt-1 lg:text-lg text-base'>
                 <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-secondary/70"></span>   <span className='font-normal font-montserrat text-secondary'>Maximaler Ertrag: </span>Über 98 % Wirkungsgrad für eine optimale Energieumwandlung.
                </p>
                <p className='font-normal font-montserrat text-secondary/70 mt-1 lg:text-lg text-base'>
                   <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-secondary/70"></span> <span className='font-normal font-montserrat text-secondary'>Für die Ewigkeit gebaut: </span>Robuste Konstruktion, entwickelt für alle Wetterbedingungen.
                </p>
                <p className='font-normal font-montserrat text-secondary/70 mt-1 lg:text-lg text-base'>
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-secondary/70"></span>  <span className='font-normal font-montserrat text-secondary'>Smarte Integration: </span>Einfache Batterie-Kompatibilität zur Steigerung des Eigenverbrauchs.
                </p>
            </div>


            <div className='mt-7'>
                <h3 className='text-secondary text-2xl font-semibold font-montserrat'>Produktdatenblätter herunterladen:</h3>
                
                <div className='mt-3'>
                    <Link href={route('products')} className='mt-3 block text-[#FF383C] lg:text-lg text-base underline ' >ECOFLOW</Link>
                    <Link href={route('products')} className='block text-[#FF383C] lg:text-lg text-base underline' >SIGENERGY</Link>
                </div>
            </div>

        </DefaultCardComp>
    </div>
    </div>
  )
}


export {CardFour}