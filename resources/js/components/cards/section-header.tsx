import { cn } from "@/lib/utils";
interface Props {
  item?: {
    slogan?: string | null,
    title?: {
      initial?: string | null,
      middle?: string | null,
      last?: string | null,
      breakPoint?: {
        before?: boolean | null,
        after?: boolean | null,
      } | null
    } | null,
    description?: string | null
  } | null,
  className?: string | null,
  children?: React.ReactNode | null,
}
function SectionHeader({ item, className, children }: Props) {
  return (
    <div className={cn("", className)}>

      {item?.slogan && (
        <div className="mb-3 flex flex-row items-center justify-center gap-3">
          <span className='after:content[" "] relative inline-block h-5 w-5 rounded-[3px] bg-info after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-btn-primary'></span>
          <p className="mt-1 text-sm font-normal uppercase md:text-base md:text-secondary">
            {item.slogan}
          </p>
        </div>
      )}


      <div className="flex flex-col items-start justify-start lg:items-center lg:justify-center ">
        {item?.title && (
          <h2 className="font-montserrat text-3xl font-semibold lg:text-[40px] mb-2 text-center">
            {item.title.initial}
            {item.title.breakPoint?.before && <br className="hidden lg:block " />}
            <span className="font-playfair-display text-info italic"> {item.title.middle} </span>
            {item.title.breakPoint?.after && <br className="hidden lg:block" />}
            {item.title.last}
          </h2>
        )}

        {
          item?.description && (
            <p className="text-center lg:px-78 text-base lg:text-lg text-secondary">
              {item?.description}
            </p>
          )
        }

      </div>

      {children}
    </div>
  )
}

export { SectionHeader }
