import Configurator6 from "@/components/sections/configurator/configurator-6";
import FrontendLayout from "@/layouts/frontend-layout";

export default function ConfiguratorStep6Page({ area, solar_id, inverter_id, battery, charger }: { area: number, solar_id: number, inverter_id: number, battery: boolean, charger: boolean }) {
    return (
        <FrontendLayout>
            <div className="flex-1">
                <Configurator6 area={area} solar_id={solar_id} inverter_id={inverter_id} battery={battery} charger={charger} />
            </div>
        </FrontendLayout>
    );
}
