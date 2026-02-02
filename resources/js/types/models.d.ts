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
    image_url: string;
    brand_logo_url: string;
}

interface SolarInverters {
    id: number;
    
    // Solar Inverter Fields
    brand_title: string;
    brand_logo: string;
    brand_logo_url?: string;
    title: string;
    image: string;
    image_url?: string;
    description: string;
    price: number;
    note: string;
    status: boolean;
    
    // Battery Fields
    battery_title?: string;
    battery_description?: string;
    battery_price?: number;
    battery_image?: string;
    battery_image_url?: string;
    battery_brand_title?: string;
    battery_brand_logo?: string;
    battery_brand_logo_url?: string;
    battery_note?: string;
    
    // Charger Fields
    charger_title?: string;
    charger_description?: string;
    charger_price?: number;
    charger_image?: string;
    charger_image_url?: string;
    charger_brand_title?: string;
    charger_brand_logo?: string;
    charger_brand_logo_url?: string;
    charger_note?: string;
    
    // Timestamps
    created_at: string;
    updated_at: string;
    
    // Allow additional properties
    [key: string]: unknown;
}

interface Partners {
    id: number;
    name: string;
    image: string;
    image_url: string;
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
    image_url: string;
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
    image_url: string;
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



interface Service {
    id: number;
    title: string;
    sub_title: string;
    image: string | null;
    image_url: string;
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
    image_url: string;
    action_text: string | null;
    action_url: string | null;
    created_at: string;
    updated_at: string;
}

interface Booking {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string | null;
    status: boolean;
    created_at: string;
    updated_at: string;
}

interface Advantage {
    id: number;
    title: string;
    description: string;
    icon: string;
    icon_url: string;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
}

export type { SolarPanels, SolarInverters, Partners, Feature, Service, Values, BatteryWithChargers, MonitoringSystem, Contact, Inquiry, Booking, Advantage };