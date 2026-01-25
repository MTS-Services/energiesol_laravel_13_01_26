import { SectionHeader } from "@/components/cards/section-header"
import { BadgeCheck } from "lucide-react"

function Calendar() {
  return (
      <div>
          <div className="relative mx-auto grid max-w-7xl lg:py-10 py-5 items-center gap-6 sm:flex-row"  style={
                {
                  background: "url('/images/calendar-bg.png')",
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover',
                }
              }>

              <div>
                 <div className="w-full">
                   <h2 className="text-3xl lg:text-[40px] font-semibold text-white  text-center px-5 lg:px-30 ">
                    Secure Your Expert Consultation. We’re Excited to Help You Go Solar!  
                  </h2>
                 </div>
                 <div className="p-5 w-4xl h-225 mx-auto bg-white rounded-md flex justify-center items-center my-10">
                    <h2> Calender Here</h2>
                 </div>

                 <div className="flex justify-center items-center gap-5 pb-5 lg:pb-10 flex-col">
                    <div className="w-15 h-15 rounded-full overflow-hidden">
                      <img src="/images/profile.jpg" alt="Profile" />
                    </div>
                    <div>
                      <p className="mb-2  text-lg lg:text-2xl text-primary font-normal font-open-sans text-center">If your schedule permits, could we jump on a short call</p>
                      <p className="mb-2 font-open-sans text-3xl lg:text-[40px] font-semibold  text-primary text-center">+56 6434 35455 35</p>
                      <p className="font-open-sans text-primary/70 text-xs lg:text-base text-center">Tuesday to Friday 9am to 7pm</p>
                    </div>
                 </div>

              </div>
          </div>
      </div>
  )
}

export {Calendar}
