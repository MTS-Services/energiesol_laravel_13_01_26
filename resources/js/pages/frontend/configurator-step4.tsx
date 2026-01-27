import Configurator4 from "@/components/sections/configurator/configurator-4";
import FrontendLayout from "@/layouts/frontend-layout";

export default function ConfiguratorStep4Page({ solarInverter   , area, solar_id, inverter_id }: { solarInverter: any, area: any, solar_id: any, inverter_id: any }) {
    return (
        <FrontendLayout>
            <div className="flex-1">
                <Configurator4 solarInverter={solarInverter} area={area} solar_id={solar_id} inverter_id={inverter_id} />
            </div>
        </FrontendLayout>
    );
}
