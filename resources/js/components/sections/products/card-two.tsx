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
                    At <span className='font-bold font-montserrat text-secondary'>Bei Energiesol</span>,  ist es unser Anspruch, Solarlösungen anzubieten, die perfekt auf Ihre individuellen Bedürfnisse und Prioritäten abgestimmt sind. Wir bieten eine breite Auswahl an Solarmodulen, die unterschiedlichsten Anforderungen gerecht werden – von ästhetischen Vorlieben bis hin zu spezifischen technischen Standards.
                </p>
                <p className='font-normal font-montserrat text-secondary/70'>
                 Egal ob Sie Wert auf deutsche Ingenieurskunst und anspruchsvolles Design legen oder das ultimative Preis-Leistungs-Verhältnis suchen – Energiesol liefert erstklassige Lösungen, die bei der Effizienz keine Kompromisse eingehen.
                </p>
            </div>

            <div className='mt-7'>
                <h3 className='text-secondary text-2xl font-semibold font-montserrat'>Innovation trifft Leistung</h3>
                <p className='font-normal font-montserrat text-secondary/70 mt-3'>
                  Unsere Solarmodule vereinen modernste Technologie mit außergewöhnlicher Langlebigkeit. Entwickelt für Spitzenleistungen selbst unter schwierigen Bedingungen – wie zum Beispiel bei schwachem Licht – bieten unsere Produkte eine perfekte Kombination aus Sicherheit, Nachhaltigkeit und moderner Ästhetik.Whether you prioritize German-engineered precision and sophisticated design or you are looking for the ultimate cost-performance ratio, Energiesol delivers high-quality solutions that never compromise on efficiency.
                </p>
            </div>

            <div className='mt-7'>
                <h3 className='text-secondary text-2xl font-semibold '>Entdecken Sie unsere Premium-Auswahl</h3>
                <p className='font-normal font-montserrat text-secondary/70 mt-3'>
              Detaillierte technische Daten finden Sie in unseren Produktdatenblättern zum Download. Entdecken Sie die passende Lösung für Ihr Projekt:
                </p>
                <div>
                    <Link href={route('products')} className='mt-3 block text-[#FF383C] lg:text-lg text-base ' >Spitzentechnologie für maximale Effizienz</Link>
                    <Link href={route('products')} className='block text-[#FF383C] lg:text-lg text-base' >Leistungsstark, zuverlässig und zukunftssicher</Link>
                </div>
                <p className='font-normal font-montserrat text-secondary/70 mt-3'>
                Unsere Experten beraten Sie gerne bei der richtigen Wahl – egal ob für kleine Anlagen oder Großprojekte. Wir setzen auf Qualität, Vielfalt und Lösungen, die exakt auf Ihre Anforderungen zugeschnitten sind.
                 </p>
            </div>
            

            <div className='mt-7'>
                <h3 className='text-secondary text-2xl font-semibold font-montserrat'>Expertenberatung für jedes Projekt</h3>
                <p className='font-normal font-montserrat text-secondary/70 mt-3'>
                 Von privaten Hausdächern bis hin zu gewerblichen Großanlagen – das Expertenteam von Energiesol steht Ihnen beratend zur Seite. Wir setzen auf Vielfalt und Qualität, um sicherzustellen, dass Ihr Energiewechsel reibungslos und erfolgreich verläuft.
                </p>
            </div>


        </DefaultCardComp>
    </div>
    </div>
  )
}


export {CardTwo}