import { BoxCard } from "@/components/cards/box-card";


export default function Service() {
    type ServiceItem = {
    slogan: string;
    image: string;
    title: string;
    description: string;
    changeOrder?: boolean|null
    };
    const items: ServiceItem[] = [
  {
    slogan: "FULL-SERVICE APPROACH",
    image: "/images/service1.jpg",
    title: "End-to-End Solar Expertise.",
    description: "As your full-service solar partner, we support you at every step — from initial consultation to final commissioning and grid connection. Our digital process ensures clarity, comfort, and full transparency.",
   
  },
  {
    slogan: "PROJECT EXECUTION",
    image: "/images/service2.jpg",
    title: "Seamless Project Management",
    description: "We manage the complete implementation of your solar system — from sourcing high-quality components to coordinating professional installation — ensuring a smooth and reliable experience.",
     changeOrder: true,
  },
  {
    slogan: "SYSTEM PLANNING",
    image: "/images/service3.jpg",
    title: "Precision Planning for Maximum Efficiency",
    description: "Our data-driven planning ensures optimal panel placement and long-term performance through accurate roof analysis and intelligent system design.",
  },
  {
    slogan: "GRID CONNECTION",
    image: "/images/service4.jpg",
    title: "Hassle-Free Grid Connection",
    description: "We handle all approvals, technical coordination, and documentation to connect your system smoothly and securely to the local power grid.",
    changeOrder: true,
  },
];

    return (
        <div>
            <div className="z-10 mx-auto max-w-7xl px-6 py-15 lg:px-0 lg:py-30">
                <div className="mb-3 flex flex-row items-center justify-center gap-3">
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
                </div>

                <div className="service grid grid-cols-1 gap-6 pt-6 lg:pt-10">


                        {
                            items.map((item, index)=>(
                              
                              <BoxCard key={index} item={item} className={'grid-cols-2 gap-10 from-transparent to-transparent border-b border-[primary/70] pb-10 rounded-[0px]'} />

                                // <ServiceCard slogan={item.slogan} image={item.image} title={item.title} description={item.description} order={index % 2 !== 0} className={`mt-20 ${index === items.length - 1 ? 'border-none' : ''}`} />
                            ))
                        }
                    
                </div>
            </div>
        </div>
    );
}
