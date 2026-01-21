import { DefaultCardComp } from "@/components/cards/default-card-comp";
import { ServiceCard } from "@/components/cards/service-card";

 function About() {
        return (
        <div>
            <div className="z-10 mx-auto max-w-7xl px-6 py-15 lg:px-0 lg:py-30">
                <div className="mb-3 flex flex-row items-center justify-center gap-3">
                    <span className='after:content[" "] relative inline-block h-5 w-5 rounded-[3px] bg-btn-primary after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-info'></span>
                    <p className="mt-1 text-sm font-normal uppercase md:text-base md:text-secondary">
                   WHO WE ARE
                    </p>
                </div>
                <div className="flex flex-col items-center justify-start lg:items-center lg:justify-center ">
                    <h2 className="font-montserrat text-3xl font-semibold lg:text-[40px] mb-2 text-center">
                    About Us
                    </h2>
                    <p className="text-center lg:px-78 text-base lg:text-lg text-secondary">Innovative Energy, Backed by Experience.</p>
                </div>

                <div className="service grid grid-cols-1 gap-6">

                    <DefaultCardComp image="/images/about-image.png" >  
                        <div className="-mt-6">
                            <p className="text-base lg:text-lg  text-secondary/70 font-monserrat font-normal">Since our strategic partnership with global energy leaders, our customers have enjoyed enhanced stability and security. We combine the reliability of established infrastructure with the innovative agility of a modern technology firm. Experience the future of intelligent energy management with our dedicated team of experts.</p>
                            <p className="text-base lg:text-lg  text-secondary/70 font-monserrat font-normal mt-3 ">Since our strategic partnership with global energy leaders, our customers have enjoyed enhanced stability and security. We combine the reliability of established infrastructure with the innovative agility of a modern technology firm. Experience the future of intelligent energy management with our dedicated team of experts.</p>
                            <p className="text-base lg:text-lg  text-secondary/70 font-monserrat font-normal mt-3 ">Since our strategic partnership with global energy leaders, our customers have enjoyed enhanced stability and security. We combine the reliability of established infrastructure with the innovative agility of a modern technology firm. Experience the future of intelligent energy management with our dedicated team of experts.</p>
                        </div>
                    </DefaultCardComp>                    
                    
                </div>
            </div>
        </div>
    );
}

export {About}