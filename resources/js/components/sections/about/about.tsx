import { DefaultCardComp } from "@/components/cards/default-card-comp";


 function About() {
        return (
        <div>
            <div className="z-10 mx-auto max-w-7xl px-6 py-15 lg:px-0 lg:py-30">
                <div className="mb-3 flex flex-row items-center justify-center gap-3">
                    <span className='after:content[" "] relative inline-block h-5 w-5 rounded-[3px] bg-btn-primary after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-info'></span>
                    <p className="mt-1 text-sm font-normal uppercase md:text-base md:text-secondary">
                 ÜBER UNS
                    </p>
                </div>
                <div className="flex flex-col items-center justify-start lg:items-center lg:justify-center ">
                    <h2 className="font-montserrat text-3xl font-semibold lg:text-[40px] mb-2 text-center">
               Unsere Geschichte
                    </h2>
                    <p className="text-center lg:px-78 text-base lg:text-lg text-secondary">Innovative Energie – getragen von Erfahrung.</p>
                </div>

                <div className="service grid grid-cols-1 gap-6">

                    <DefaultCardComp image="/images/about-image.png" >  
                        <div className="-mt-6">
                            <p className="text-base lg:text-lg  text-secondary/70 font-monserrat font-normal">Seit unserer Gründung stehen wir für eine moderne, effiziente und transparente Umsetzung von Solarprojekten. Unsere Kunden profitieren von fundierter Branchenerfahrung, klaren Prozessen und einem starken Netzwerk aus qualifizierten Fachpartnern. Dabei verbinden wir technische Kompetenz mit der Agilität eines dynamischen Unternehmens.</p>
                            <p className="text-base lg:text-lg  text-secondary/70 font-monserrat font-normal mt-3 ">Der Gründer unseres Unternehmens war über viele Jahre in führenden Solar- und Energieunternehmen tätig und hat dort Strukturen aufgebaut, Prozesse optimiert und Projekte maßgeblich mitgestaltet. Dieses gebündelte Know-how fließt heute in ein ganzheitliches Konzept ein, das Preis und Leistung konsequent optimiert – zum direkten Vorteil unserer Kunden.</p>
                            <p className="text-base lg:text-lg  text-secondary/70 font-monserrat font-normal mt-3 ">Von unserem zentralen Standort aus steuern wir Planung, Projektmanagement und technische Umsetzung. Unsere spezialisierten Teams arbeiten eng zusammen, um sicherzustellen, dass jedes System bundesweit nach höchsten Qualitätsstandards geplant, umgesetzt und betreut wird.</p>
                            <p className="text-base lg:text-lg  text-secondary/70 font-monserrat font-normal mt-3 ">Unser Leitsatz lautet: <span className="font-semibold">Erneuerbare Energie soll für jedes Zuhause einfach, effizient und bezahlbar sein.</span></p>
                            <p className="text-base lg:text-lg  text-secondary/70 font-monserrat font-normal mt-1 ">Mit diesem Anspruch gestalten wir den Weg zu sauberer Energie transparent, wirtschaftlich und nachhaltig – für heute und kommende Generationen.</p>
                        </div>
                    </DefaultCardComp>                    
                    
                </div>
            </div>
        </div>
    );
}

export {About}