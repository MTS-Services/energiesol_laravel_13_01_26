import { DefaultCardComp } from "@/components/cards/default-card-comp";
import { ServiceCard } from "@/components/cards/service-card";

 function About() {
        return (
        <div>
            <div className="z-10 mx-auto max-w-7xl px-6 py-15 lg:px-0 lg:py-30">
                <div className="mb-3 flex flex-row items-center justify-center gap-3">
                    <span className='after:content[" "] relative inline-block h-5 w-5 rounded-[3px] bg-btn-primary after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-info'></span>
                    <p className="mt-1 text-sm font-normal uppercase md:text-base md:text-secondary">
                  Über uns
                    </p>
                </div>
                <div className="flex flex-col items-center justify-start lg:items-center lg:justify-center ">
                    <h2 className="font-montserrat text-3xl font-semibold lg:text-[40px] mb-2 text-center">
                  Unsere Geschichte
                    </h2>
                    <p className="text-center lg:px-78 text-base lg:text-lg text-secondary">Innovative Energy, Backed by Experience.</p>
                </div>

                <div className="service grid grid-cols-1 gap-6">

                    <DefaultCardComp image="/images/about-image.png" >  
                        <div className="-mt-6">
                            <p className="text-base lg:text-lg  text-secondary/70 font-monserrat font-normal">Seit Beginn unserer strategischen Partnerschaft mit weltweit führenden Energieunternehmen profitieren unsere Kunden von erhöhter Stabilität und Sicherheit. Wir verbinden die Zuverlässigkeit bewährter Infrastruktur mit der innovativen Agilität eines modernen Technologieunternehmens. Erleben Sie die Zukunft des intelligenten Energiemanagements mit unserem engagierten Expertenteam.</p>
                            <p className="text-base lg:text-lg  text-secondary/70 font-monserrat font-normal mt-3 ">Von unserem zentralen Hub aus arbeiten unsere spezialisierten Teams – darunter Engineering, Projektmanagement und technische Integration – Hand in Hand, um sicherzustellen, dass jedes System landesweit nach den höchsten Standards gebaut und gewartet wird.</p>
                            <p className="text-base lg:text-lg  text-secondary/70 font-monserrat font-normal mt-3 ">Unser Leitsatz „Erneuerbare Energie sollte für jedes Zuhause einfach, effizient und bezahlbar sein“ treibt unser Führungsteam an. Gemeinsam machen wir den weltweiten Übergang zu sauberer Energie für alle mühelos und kosteneffizient.</p>
                        </div>
                    </DefaultCardComp>                    
                    
                </div>
            </div>
        </div>
    );
}

export {About}