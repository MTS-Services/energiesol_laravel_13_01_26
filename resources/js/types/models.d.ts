interface SolarPanels {
    id: number;
    brand_title: string;
    brand_logo: string;
    title: string;
    image: string;
    description: string;
    price: number;
    note: string;
    status: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
}

interface SolarInverters {
    id: number;
    brand_title: string;
    brand_logo: string;
    title: string;
    image: string;
    description: string;
    price: number;
    note: string;
    status: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
}

interface Partners {
    id: number;
    name: string;
    image: string;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
}

interface Feature {
    id: number;
    title: string;
    description: string | null;
    image: string | null;
    action_text: string | null;
    action_url: string | null;
    created_at: string;
    updated_at: string;
}

interface BatteryWithChargers {
    id: number;
    yes_image: string | null;
    no_image: string | null;
    type: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
}

interface MonitoringSystem {
    id: number;
    title: string;
    sub_title: string;
    description: string | null;
    image: string | null;
    created_at: string;
    updated_at: string;
}

interface Contact {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string | null;
    created_at: string;
    updated_at: string;
}

interface Inquiry {
    id: number;
    area: number;
    solar_panel_id: number;
    solar_inverter_id: number;
    has_battery: boolean;
    has_charger: boolean;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string | null;
    status: boolean;
    created_at: string;
    updated_at: string;
    solar_panel?: SolarPanels; // Optional, for eager loading
    solar_inverter?: SolarInverters; // Optional, for eager loading
}

export type { SolarPanels, SolarInverters, Partners, Feature, Service, Values, BatteryWithChargers, MonitoringSystem, Contact, Inquiry };

interface Service {
    id: number;
    title: string;
    sub_title: string;
    image: string | null;
    description: string;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
}

interface Values {
    id: number;
    title: string;
    description: string | null;
    image: string | null;
    action_text: string | null;
    action_url: string | null;
    created_at: string;
    updated_at: string;
}