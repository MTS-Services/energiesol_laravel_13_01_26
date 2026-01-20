import { ConfiguratorCard } from '@/components/cards/configurator-card';


export default function StartConfigurator() {
    return (
        <div className="relative bg-linear-to-r from-btn-primary/15 to-info/5  mb-15 lg:mb-30">
           
            <div className="relative z-10 mx-auto max-w-7xl px-6  lg:px-0 flex flex-row gap-5">
                 <ConfiguratorCard />
            </div>
        </div>
    );
}
