import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icon } from "../ui/icon"
import { useState } from "react"
import { router } from "@inertiajs/react"

interface Props {
    item?: {
        changeOrder?: boolean | null
    }
}

function ConfiguratorCard({ item }: Props) {

    const [inputValue, setInputValue] = useState<number | ''>('')

    const handleConfigure = () => {
        if (inputValue !== '') {
           
           
            router.visit(route('configurator.step2', {area:inputValue}))
        }
    }
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-9'>

            <div className={`py-20 rounded-xl ${item?.changeOrder ? 'lg:order-last' : ''}`}>
                <div className="mb-3 flex flex-row items-center justify-start gap-3">
                    <span className='after:content-[""] relative inline-block h-5 w-5 rounded-[3px] bg-btn-primary after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-info'></span>
                    <p className="mt-1 text-sm font-normal uppercase md:text-base md:text-secondary">
                        3 Minuten Einrichtung
                    </p>
                </div>
                <div className="">
                    <h2 className="font-montserrat text-3xl font-semibold lg:text-[40px]">
                        PV-Anlage in {' '}
                        <span className="font-playfair-display font-semibold text-info italic">
                            nur 3 Minuten{' '}
                        </span>
                        konfiguriert
                    </h2>
                </div>
                <div className="flex flex-col">
                    <p className="mt-3 font-open-sans text-base text-secondary/50 lg:text-lg">
                        Kostenlose, individuelle Solar-Kostenschätzung – inklusive detaillierter Profitabilitätsanalyse.
                        Maßgeschneidert für Ihr Dach und Ihren Verbrauch. Planen Sie jetzt Ihre Energiezukunft mit präzisen Daten und voller Transparenz.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center overflow-hidden">
                    <div>
                        <Input 
                            type='number' 
                            className='rounded-full shadow-[inset_1px_1px_20px_3px_#fff] px-4 py-6' 
                            placeholder='80'
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value ? Number(e.target.value) : '')}
                        />
                    </div>
                    <div>
                        <Button className='text-sm lg:text-base w-full sm:w-auto!' variant={'default'}  onClick={handleConfigure} disabled={!inputValue}>
                            <Icon iconNode={ArrowRight} variant="circle" className="bg-primary!" iconClassName="text-secondary"></Icon>
                            Jetzt konfigurieren
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

export { ConfiguratorCard }