import Configurator5 from "@/components/sections/configurator/configurator-5";
import FrontendLayout from "@/layouts/frontend-layout";

export default function ConfiguratorStep5Page({ solarInverter, area, solar_id, inverter_id, battery }: any) {
    return (
        <FrontendLayout>
            <div className="flex-1">
                <Configurator5 solarInverter={solarInverter} area={area} solar_id={solar_id} inverter_id={inverter_id} battery={battery} />
            </div>
        </FrontendLayout>
    );
}
