import { ConfiguratorCard } from '@/components/cards/configurator-card';


export default function StartConfigurator() {
    const item = {
        changeOrder: true,
    }
    return (
        <div className="relative   py-15 lg:py-30">
           
            <div className="relative z-10 mx-auto max-w-7xl px-6  lg:px-0 flex flex-row gap-5">
                 <ConfiguratorCard item={item} />
            </div>
        </div>
    );
}
