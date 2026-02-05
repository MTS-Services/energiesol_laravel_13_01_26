import { cn } from "@/lib/utils"

interface Props {
  item: {
    image_url?: string|null;
  };
  className?: string|null;
}
function PartnerSlide({item, className}:Props) {
  return (
    <div className={cn('', className)}>
        <div className="flex items-center justify-center">
          {
            item.image_url && (
              <img src={item.image_url} className="max-h-15 lg:max-h-20 rounded-md" />
            )
          }
        </div>
    </div>
  )
}

export {PartnerSlide}
