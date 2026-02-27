import { BoxCard } from "@/components/cards/box-card";
import { SectionHeader } from "@/components/cards/section-header";
import { buttonVariants } from "@/components/ui/button";

export default function Values({values}: {values: any}) {
    
    

  const sectionHeaderData = {
    slogan: "UNSERE WERTE",
    title: {
      initial: "Was uns ",
      middle: "auszeichnet",
    },
    description: "Wir verbinden moderne Solartechnologie mit verantwortungsvoller, persönlicher Betreuung. Unser Anspruch ist es, Ihren Weg zu sauberer Energie transparent, effizient und zuverlässig zu gestalten – ehrlich, partnerschaftlich und auf Augenhöhe.",
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
                            return  (<BoxCard key={index} item={newItem} className={'grid grid-cols-1 md:grid-cols-2 gap-10 from-transparent to-transparent pb-10 '} contentBoxClassName="justify-start" /> )
                            })
                        }
                        
                    
                </div>
            </div>
        </div>
    );
}
