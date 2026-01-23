import { cn } from "@/lib/utils"

interface Props {
  item: {
    image?: string|null;
    description?: string|null;
    name?: string|null;
    position?: string|null;
  };
  className?: string|null;
}
function Slide({item, className}:Props) {
  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-3 gap-4", className)}>
        <div className="lg:col-span-1 rounded-md ">
          {
            item.image && (
              <img src={item.image} className="w-full h-full rounded-md" />
            )
          }
        </div>
        <div className="lg:col-span-2 relative">
            { item.description && (
              <div className="flex items-start gap-2 flex-col just-start pt-2">
                <img src="/images/quote-sign.png" className="w-3 h-3" />
                <p className="text-primary font-open-sans font-normal text-base lg:text-2xl">{item.description}</p>
              </div>
            )}


          {
            item.name && (
                <div className="lg:absolute bottom-0 left-0 right-0 flex justify-between pt-2">
                <div>
                  <p className="text-primary font-montserrat font-semibold text-base lg:text-3xl mb-2">{item.name}</p>
                  { item.position && (
                    <p className="text-primary/70 font-open-sans text-sm  lg:text-base">{item.position}</p>
                  )}
                </div>

                <div>
                  <img src="/images/google-rating.png" alt="" />
                </div>
            </div>
            )
          }


        </div>
    </div>
  )
}

export {Slide}
