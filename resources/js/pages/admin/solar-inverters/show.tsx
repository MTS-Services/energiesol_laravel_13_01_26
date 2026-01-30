import { ActionButton } from '@/components/ui/action-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/layouts/admin-layout';
import { SolarInverters } from '@/types/models';
import { Head } from '@inertiajs/react';
import { ArrowLeft, SquarePen } from 'lucide-react';
import { index, edit } from '@/actions/App/Http/Controllers/Admin/SolarInverterController';

interface Props {
    solarInverter: SolarInverters;
}

export default function ShowSolarInverter({ solarInverter }: Props) {
    return (
        <AdminLayout>
            <Head title="Solar Inverter Details" />

            <div className="container mx-auto py-6">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Solar Inverter Details</h1>
                    <div className="flex gap-2">
                        <ActionButton IconNode={ArrowLeft} href={index.url()}>Back to solar inverters</ActionButton>
                        <ActionButton IconNode={SquarePen} href={edit.url(solarInverter.id)}>Edit</ActionButton>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Left Column */}
                    <div className="space-y-6 lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Title</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-muted-foreground">{solarInverter.title}</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Description</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {solarInverter.description}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Solar Inverter Image</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <img src={solarInverter.image_url || ''} alt={solarInverter.title} className="w-1/4 h-auto rounded-lg" />
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Brand Title & Information</CardTitle>
                            </CardHeader>
                            <CardContent className='flex gap-2'>
                               <p className="text-muted-foreground font-semibold ">
                                    {solarInverter.brand_title} :
                                </p><p className="text-muted-foreground">
                                    {solarInverter.note}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Brand Logo </CardTitle>
                            </CardHeader>
                            <CardContent >
                              {
                                solarInverter.brand_logo_url ?  (
                                  <img src={solarInverter.brand_logo_url} alt={solarInverter.brand_title} className="w-1/4 h-auto rounded-lg" />
                                ) : (
                                  <p className="text-muted-foreground">No brand logo</p>
                                )
                              }
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Charger Details</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-muted-foreground">{solarInverter.charger_title}</p>
                                <p className="text-muted-foreground">
                                    {solarInverter.charger_description}
                                </p>
                                <p className="text-muted-foreground">
                                    {solarInverter.charger_brand_title}
                                </p>
                                <img src={solarInverter.charger_brand_logo_url || ''} alt={solarInverter.charger_brand_title} className="w-1/4 h-auto rounded-lg" />
                                <p className="text-muted-foreground">
                                    {solarInverter.charger_note}
                                </p>
                                <img src={solarInverter.charger_image_url || ''} alt={solarInverter.charger_title} className="w-1/4 h-auto rounded-lg" />
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Battery Details</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-muted-foreground mb-1">{solarInverter.battery_title}</p>
                                <p className="text-muted-foreground mb-1">
                                    {solarInverter.battery_description}
                                </p>
                                <p className="text-muted-foreground mb-1">
                                    {solarInverter.battery_brand_title}
                                </p>
                                <img src={solarInverter.battery_brand_logo_url   || ''} alt={solarInverter.battery_brand_title} className="w-1/4 h-auto rounded-lg" />
                                <p className="text-muted-foreground mb-1">
                                    {solarInverter.battery_note}
                                </p>
                                <img src={solarInverter.battery_image_url || ''} alt={solarInverter.battery_title} className="w-1/4 h-auto rounded-lg" />
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Insights</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Created At
                                    </p>
                                    <p className="font-medium">{new Date(solarInverter.created_at).toLocaleDateString()}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                      Updated At
                                    </p>
                                    <p className="font-medium">{ solarInverter.updated_at ? new Date(solarInverter.updated_at).toLocaleDateString() : 'N/A' }</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Status
                                    </p>
                                    <p className="font-medium"> {solarInverter.status ? 'Active' : 'Inactive'}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Price
                                    </p>
                                    <p className="font-medium">{ solarInverter.price ? `${solarInverter.price} €` : 'N/A' }</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Charger Price
                                    </p>
                                    <p className="font-medium">{ solarInverter.charger_price ? `${solarInverter.charger_price} €` : 'N/A' }</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Battery Price
                                    </p>
                                    <p className="font-medium">{ solarInverter.battery_price ? `${solarInverter.battery_price} €` : 'N/A' }</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
