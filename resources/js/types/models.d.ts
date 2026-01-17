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
export type { SolarPanels };