import { BoxCard } from "@/components/cards/box-card";
import { SectionHeader } from "@/components/cards/section-header";

export default function Values() {
    type ServiceItem = {
    slogan?: string|null;
    image: string;
    title: string;
    description: string;
    btn?: {label: string|null; href: string|null}|null;
    changeOrder?: boolean|null;
    };
    const items: ServiceItem[] = [
    {

      image: "/images/service1.jpg",
      title: "End-to-End Solar Expertise.",
      description: "As your full-service solar partner, we support you at every step — from initial consultation to final commissioning and grid connection. Our digital process ensures clarity, comfort, and full transparency.",
      btn: {
        label: "Start configurator",
        href: "#",
      }
      },
      {

        image: "/images/service2.jpg",
        title: "Seamless Project Management",
        description: "We manage the complete implementation of your solar system — from sourcing high-quality components to coordinating professional installation — ensuring a smooth and reliable experience.",
        btn: {
          label: "Start configurator",
          href: "#",
        },
        changeOrder: true,
    },
  ];

  const sectionHeaderData = {
    slogan: "CORE VALUES",
    title: {
      initial: "What Makes Us Different!",
    },
    description: "We blend advanced solar innovation with professional support to ensure your switch to clean energy is effortless and honest.",
  };

    return (
        <div>
            <div className="z-10 mx-auto max-w-7xl px-6 py-15 lg:px-0 lg:py-30">

               <SectionHeader item={sectionHeaderData} />

                <div className="service grid grid-cols-1 gap-6 pt-6 lg:pt-10">


                        {
                            items.map((item, index)=>(
                              <BoxCard key={index} item={item} className={'grid-cols-2 gap-10 from-transparent to-transparent pb-10 '} />
                                
                                // <ServiceCard slogan={item.slogan} image={item.image} title={item.title} description={item.description} order={index % 2 === 0} className={`mt-20 ${index === items.length - 1 ? 'border-none' : ''}`} btn={item.btn} />
                            ))
                        }
                    
                </div>
            </div>
        </div>
    );
}
