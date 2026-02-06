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
}
