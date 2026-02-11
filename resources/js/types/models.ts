export interface MonitoringSystem {
    id: number;
    title: string;
    sub_title: string;
    description: string;
    image: string;
    image_url: string;
    created_at: string;
    updated_at: string;
    price: number;
}

export interface SystemSetting {
    id: number;
    vat: string;
    discount: string;
    module_unit_in_meter: string;
    created_at: string;
    updated_at: string;
    wallbox_price: number;
    evu_fees: number;
    delivery_fees: number;
    service_charge: number;
    generate_electricity_per_module: number;
    unit_price: number;
    wallbox_boost_electricity: number;
}
