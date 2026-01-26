import { BoxCard } from "@/components/cards/box-card";
import { SectionHeader } from "@/components/cards/section-header";


export default function Service({ services }: { services?: any[] | null }) {
  type ServiceItem = {
    slogan: string;
    image: string;
    title: string;
    description: string;
    changeOrder?: boolean | null
  };

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
   
          <SectionHeader item={SectionHeaderData} />

          <div className="service grid grid-cols-1 gap-6 pt-6 lg:pt-10">


            {
              services?.map((item, index) => {
                const newItem = {
                  slogan: item.sub_title,
                  title: item.title,
                  image: item.image,
                  description: item.description,
                  changeOrder: index % 2 === 1,
                }
                return (<BoxCard key={index} item={newItem} className={`grid-cols-2 gap-10 from-transparent to-transparent ${services.length === index + 1 ? '' : 'border-b'} border-[primary/70] pb-10 rounded-none`} />)
             
              })
            }

        </div>
      </div>
    </div>
  );
}
