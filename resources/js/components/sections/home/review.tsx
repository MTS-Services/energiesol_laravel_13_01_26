import { SectionHeader } from "@/components/cards/section-header"
import { Slider } from "@/components/cards/slider";

export default function review() {
    const SectionHeaderData = {
        slogan: 'Client Stories',
        title: {
            initial: 'Our clients love to ',
            middle: 'Recommend',
            last: ' us',
            breakPoint: {
                before: true, 
            }
        },
    }
    const sliders = [
        {
            image: '/images/review-image.png',
            description: "Working with this team on our home’s energy transition was a seamless experience. They were proactive, highly knowledgeable, and designed a solar system that truly exceeded our savings goals. The energy monitoring app they provided is both clean and incredibly easy to use. I wouldn't hesitate to recommend them to any homeowner looking for a reliable, long-term power solution.",
            name: "Jenna Carvalho",
            position: "Homeowner & Eco-Advocate"
        },
        {
            image: '/images/review-image.png',
            description: "Working with this team on our home’s energy transition was a seamless experience. They were proactive, highly knowledgeable, and designed a solar system that truly exceeded our savings goals. The energy monitoring app they provided is both clean and incredibly easy to use. I wouldn't hesitate to recommend them to any homeowner looking for a reliable, long-term power solution.",
            name: "Michael Rodriguez",
            position: "Homeowner & Tech Enthusiast"
        },
    ]
    return (
        <div>
            <div className="z-10 mx-auto max-w-7xl px-6 py-15 lg:px-0 lg:py-30">
                   
                    <SectionHeader item={SectionHeaderData} />
                

                <div className="features grid grid-cols-1 gap-6 pt-6 lg:pt-10">
                  
                   <Slider sliders={sliders}/>
                    
                </div>
            </div>
        </div>
    );
}
