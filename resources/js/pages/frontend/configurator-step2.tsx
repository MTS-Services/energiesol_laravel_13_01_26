import Configurator2 from "@/components/sections/configurator/configurator-2";
import FrontendLayout from "@/layouts/frontend-layout";

export default function ConfiguratorStep2Page({ solarPanels , area}: { solarPanels: any[] , area?: number}) {
    return (
        <FrontendLayout>
            <div className="flex-1">
                <Configurator2 solarPanels={solarPanels} area={area}/>
            </div>
        </FrontendLayout>
    );
}
