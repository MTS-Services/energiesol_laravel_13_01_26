import React from 'react'

import { DefaultCardComp } from '@/components/cards/default-card-comp'
import { Link } from '@inertiajs/react'

function CardTwo() {
    const item = {
        slogan: 'SOLARMODULE',
        title: {
            middle: 'Hocheffiziente ',
            last: 'Solarmodule'

        },
    }
  return (
    <div className='bg-linear-to-r from-btn-primary/15 to-info/5'>
        <div className="z-10 mx-auto max-w-7xl px-6 py-0  lg:px-0 lg:py-0">
        <DefaultCardComp slogan={item.slogan} title={item.title} className={'grid-cols-1!'} >
            <div>
                <p className='font-normal font-montserrat text-secondary/70 mb-3'>
                   Bei Energiesol ist es unser Anspruch, Solarlösungen anzubieten, die exakt auf Ihre individuellen Anforderungen abgestimmt sind. Unser Portfolio umfasst eine vielfältige Auswahl leistungsstarker Module – von designorientierten Varianten bis hin zu technisch optimierten Hochleistungsmodulen für maximale Wirtschaftlichkeit.
                </p>
                <p className='font-normal font-montserrat text-secondary/70'>
                 Ob Sie besonderen Wert auf hochwertige Verarbeitung und anspruchsvolle Optik legen oder ein optimales Preis-Leistungs-Verhältnis suchen – wir liefern zuverlässige Lösungen ohne Kompromisse bei Effizienz und Qualität.
                </p>
            </div>

            <div className='mt-7'>
                <h3 className='text-secondary text-2xl font-semibold font-montserrat'>Innovation trifft Leistung</h3>
                <p className='font-normal font-montserrat text-secondary/70 mt-3'>
                  Unsere Solarmodule vereinen moderne Zelltechnologie mit hoher Langlebigkeit. Selbst bei anspruchsvollen Bedingungen, wie diffusem Licht oder wechselhaftem Wetter, erzielen sie stabile und überzeugende Erträge. So profitieren Sie von einer sicheren, nachhaltigen und zukunftsfähigen Energiequelle.
                </p>
            </div>

            <div className='mt-7'>
                <h3 className='text-secondary text-2xl font-semibold '>Ihre Vorteile im Überblick:</h3>
                {/* <p className='font-normal font-montserrat text-secondary/70 mt-3'>
              Detaillierte technische Daten finden Sie in unseren Produktdatenblättern zum Download. Entdecken Sie die passende Lösung für Ihr Projekt:
                </p> */}
                <div>
                    <Link href={route('products')} className='mt-3 block text-[#FF383C] lg:text-lg text-base ' >Spitzentechnologie für maximale Effizienz</Link>
                    <Link href={route('products')} className='block text-[#FF383C] lg:text-lg text-base' >Leistungsstark, zuverlässig und langlebig</Link>
                    <Link href={route('products')} className='block text-[#FF383C] lg:text-lg text-base' >Nachhaltig und optisch ansprechend</Link>
                </div>
                <p className='font-normal font-montserrat text-secondary/70 mt-3'>
                Unsere Experten beraten Sie gerne bei der richtigen Wahl – egal ob für kleine Anlagen oder Großprojekte. Wir setzen auf Qualität, Vielfalt und Lösungen, die exakt auf Ihre Anforderungen zugeschnitten sind.
                 </p>
            </div>
            

            <div className='mt-7'>
                <h3 className='text-secondary text-2xl font-semibold font-montserrat'>Expertenberatung für jedes Projekt</h3>
                <p className='font-normal font-montserrat text-secondary/70 mt-3'>
                 Von privaten Wohnhäusern bis zu gewerblichen Großanlagen – wir unterstützen Sie bei der Auswahl der passenden Module. Unsere Experten beraten Sie transparent und lösungsorientiert, damit Ihre Anlage technisch wie wirtschaftlich optimal aufgestellt ist.

                </p>
            </div>


        </DefaultCardComp>
    </div>
    </div>
  )
}


export {CardTwo}