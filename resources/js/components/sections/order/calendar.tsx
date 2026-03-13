import { SectionHeader } from "@/components/cards/section-header"
import { BadgeCheck } from "lucide-react"
import { Calendly } from "./calendly"
import { ContactForm } from "@/components/cards/contact-form";

function Calendar({is_valid_order}: {is_valid_order: boolean}) {
  if (!is_valid_order) {
    return <></>;
  }

  return (
    <div 
      style={{
        background: "url('/images/calendar-bg.png')",
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
      className="mb-10"

      id="appointment"
    >
      <div className="relative mx-auto grid max-w-7xl lg:py-10 py-5 items-center gap-6 sm:flex-row" >
        <div>
          <div className="w-full">
            <h2 className="text-3xl lg:text-[40px] font-semibold text-white text-center px-5 lg:px-30">
              Sichern Sie sich Ihre Expertenberatung. Wir freuen uns darauf, Ihnen beim Umstieg auf Solarenergie zu helfen!
            </h2>
          </div>
          <div className="lg:w-4xl h-auto lg:mx-auto rounded-md flex justify-center items-center ">
           <ContactForm className="backdrop-blur-3xl bg-white rounded-2xl my-10 px-20" />
          </div>

          <div className="flex justify-center items-center gap-5 pb-5 lg:pb-10 flex-col">
            <div className="w-15 h-15 rounded-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=faces" alt="Profile" />
            </div>
            <div>
              <p className="mb-2 text-lg lg:text-2xl text-primary font-normal font-open-sans text-center">
                Wenn es Ihr Zeitplan erlaubt, könnten wir einen kurzen Anruf vereinbaren?
              </p>
              <p className="mb-2 font-open-sans text-3xl lg:text-[40px] font-semibold text-primary text-center">
                040 / 764 84 844
              </p>
              <p className="font-open-sans text-primary/70 text-xs lg:text-base text-center">
                Montag bis Freitag, 9:00 Uhr bis 20:00 Uhr.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export {Calendar}
