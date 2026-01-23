import { BoxCard } from "@/components/cards/box-card";
import { SectionHeader } from "@/components/cards/section-header";


export default function Service() {
  type ServiceItem = {
    slogan: string;
    image: string;
    title: string;
    description: string;
    changeOrder?: boolean | null
  };
  const items: ServiceItem[] = [
    {
      slogan: "VOLLSERVICEANSATZ",
      image: "/images/service1.jpg",
      title: "Umfassende Solarexpertise.",
      description: `Als Ihr Komplettanbieter für Solarenergie unterstützen wir Sie in jedem Schritt –
von der ersten Beratung bis zur finalen Inbetriebnahme und dem Netzanschluss. Unser digitaler Prozess sorgt für Klarheit, Komfort und volle Transparenz.`,

    },
    {
      slogan: "PROJEKTDURCHFÜHRUNG",
      image: "/images/service2.jpg",
      title: "Nahtloses Projektmanagement",
      description: `Wir übernehmen die komplette Umsetzung Ihrer Solaranlage – von der Beschaffung hochwertiger Komponenten bis zur Koordination der professionellen Installation –
und gewährleisten so ein reibungsloses und zuverlässiges Erlebnis.`,
      changeOrder: true,
    },
    {
      slogan: "SYSTEMPLANUNG",
      image: "/images/service3.jpg",
      title: "Maximale Planungs-Effizienz",
      description: `Unsere datengestützte Planung gewährleistet durch präzise Dachanalyse und intelligentes Systemdesign eine optimale Paneelplatzierung und langfristige Leistungsfähigkeit.So sichern wir Ihnen maximale Energieerträge und eine nachhaltige Rendite über die gesamte Lebensdauer Ihrer Anlage.`,
    },
    {
      slogan: "GNetzanschluss",
      image: "/images/service4.jpg",
      title: "Problemloser Netzanschluss",
      description: `Wir übernehmen sämtliche Genehmigungsverfahren, die technische Abstimmung sowie die komplette Dokumentation, um Ihre Anlage reibungslos und sicher an das lokale Stromnetz anzuschließen.
Dabei kümmern wir uns um alle bürokratischen Details, damit Sie sich entspannt auf Ihre eigene saubere Energie freuen können.`,
      changeOrder: true,
    },
  ];

  const SectionHeaderData = {
    slogan: 'PROJEKTDURCHFÜHRUNG',
    title: {
      initial: 'Solar ',
      middle: 'Expertise',
      last: ' aus einer Hand',
    },
    description: "Als Full-Service-Partner begleiten wir Sie vom Erstgespräch bis zum Netzanschluss. Unser digitaler Prozess garantiert Ihnen maximale Transparenz, Komfort und absolute Klarheit – einfach এবং zuverlässig."
  }

  return (
    <div>
      <div className="z-10 mx-auto max-w-7xl px-6 py-15 lg:px-0 lg:py-30">
        {/* <div className="mb-3 flex flex-row items-center justify-center gap-3">
                    <span className='after:content[" "] relative inline-block h-5 w-5 rounded-[3px] bg-btn-primary after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-info'></span>
                    <p className="mt-1 text-sm font-normal uppercase md:text-base md:text-secondary">
                       FULL-SERVICE APPROACH
                    </p>
                </div>
                <div className="flex flex-col items-start justify-start lg:items-center lg:justify-center lg:mb-10 mb-5">
                    <h2 className="font-montserrat text-3xl font-semibold lg:text-[40px] mb-2 text-center">
                      End-to-End Solar Expertise
                    </h2>
                    <p className="text-center lg:px-78 text-base lg:text-lg text-secondary">As your full-service solar partner, we support you at every step — from initial consultation to final commissioning and grid connection. Our digital process ensures clarity, comfort, and full transparency.</p>
                </div> */}
        <SectionHeader item={SectionHeaderData} />

        <div className="service grid grid-cols-1 gap-6 pt-6 lg:pt-10">


          {
            items.map((item, index) => (

              <BoxCard key={index} item={item} className={'grid-cols-2 gap-10 from-transparent to-transparent border-b border-[primary/70] pb-10 rounded-[0px]'} />

              // <ServiceCard slogan={item.slogan} image={item.image} title={item.title} description={item.description} order={index % 2 !== 0} className={`mt-20 ${index === items.length - 1 ? 'border-none' : ''}`} />
            ))
          }

        </div>
      </div>
    </div>
  );
}
