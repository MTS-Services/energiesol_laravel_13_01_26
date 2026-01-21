import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Props {
   item?: {
     changeOrder?: boolean | null
   }
}

function ConfiguratorCard({item}: Props) {
  return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-9'>

            <div className={`py-20 rounded-xl ${item?.changeOrder ? 'lg:order-last' : ''}`}>
                <div className="mb-3 flex flex-row items-center justify-start gap-3">
                    <span className='after:content-[""] relative inline-block h-5 w-5 rounded-[3px] bg-btn-primary after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-info'></span>
                    <p className="mt-1 text-sm font-normal uppercase md:text-base md:text-secondary">
                        3 Min Setup
                    </p>
                </div>
                <div className="">
                    <h2 className="font-montserrat text-3xl font-semibold lg:text-[40px]">
                        PV system in{' '}
                        <span className="font-playfair-display font-semibold text-info italic">
                        only 3 minutes{' '}
                        </span>
                        configured
                    </h2>
                </div>
                <div className="flex flex-col">
                    <p className="mt-3 font-open-sans text-base text-secondary/50 lg:text-lg">
                    Receive a free, personalized solar cost estimate—including a detailed profitability calculation—designed specifically for your roof and energy usage.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-4 items-center overflow-hidden">
                    <div>
                        <Input type='number' className='rounded-full shadow-[inset_1px_1px_20px_3px_#fff] px-4 py-6' placeholder='80'/>
                    </div>
                    <div>
                        <Button className='text-sm lg:text-base' variant={'default'}>
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Start Configurator
                    </Button>
                    </div>
                </div>
            </div>

            <div className={`hidden lg:grid grid-cols-1 gap-6 py-8.5 ${item?.changeOrder ? 'lg:order-first' : ''}`}>
                <div className='w-full h-full rounded-2xl'
                style={{
                    backgroundImage: "url('images/photo-group.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                }}
                >
                </div>
            </div>
        </div>
  )
}

export {ConfiguratorCard}