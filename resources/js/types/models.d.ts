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
export type { SolarPanels, SolarInverters, Partners, Feature };