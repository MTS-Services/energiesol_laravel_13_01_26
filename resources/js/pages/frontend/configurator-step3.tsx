import Configurator3 from "@/components/sections/configurator/configurator-3";
import FrontendLayout from "@/layouts/frontend-layout";

export default function ConfiguratorStep3Page({area, solar_id, solarInverterService }: any) {
    return (
        <FrontendLayout>
            <div className="flex-1">
                <Configurator3 area={area} solar_id={solar_id} solarInverterService={solarInverterService}/>
            </div>
        </FrontendLayout>
    );
}
