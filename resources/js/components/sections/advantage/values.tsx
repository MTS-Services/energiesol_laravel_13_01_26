import { BoxCard } from "@/components/cards/box-card";
import { SectionHeader } from "@/components/cards/section-header";
import { buttonVariants } from "@/components/ui/button";

export default function Values({values}: {values: any}) {
    
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
    slogan: "UNSERE WERTE",
    title: {
      initial: "Was uns ",
      middle: "auszeichnet!",
    },
    description: "Wir verbinden modernste Solar-Innovation mit professioneller Betreuung, um Ihren Wechsel zu sauberer Energie so einfach und ehrlich wie möglich zu gestalten.",
  };

    return (
        <div>
            <div className="z-10 mx-auto max-w-7xl px-6 py-15 lg:px-0 lg:py-30">

               <SectionHeader item={sectionHeaderData} />

                <div className="service grid grid-cols-1 gap-6 pt-6 lg:pt-10">


                        {
                            values?.map((item, index)=> {
                              const newItem = {
                                ...item,
                                 btn: {
                                label: item.action_text,
                                buttonClassName: 'bg-btn-primary!',
                                href: item.action_url || '#',
                                iconVariant: 'circle',
                                iconParentClassName: 'bg-primary!',
                                iconClassName: 'text-secondary!', 
                               },
                               changeOrder: index % 2 === 1,
                              }
                            return  (<BoxCard key={index} item={newItem} className={'grid-cols-2 gap-10 from-transparent to-transparent pb-10 '} /> )
                            })
                        }
                        
                    
                </div>
            </div>
        </div>
    );
}
