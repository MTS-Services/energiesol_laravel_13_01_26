import { ActionButton } from '@/components/ui/action-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/layouts/admin-layout';
import { Estimate, SolarInverter, SolarPanel } from '@/types/models';
import { Head } from '@inertiajs/react';
import { ArrowLeft, SquarePen } from 'lucide-react';
import { index, edit } from '@/actions/App/Http/Controllers/Admin/EstimateController';

interface Props {
    estimate: Estimate & {
        solar_panel: SolarPanel;
        solar_inverter: SolarInverter;
    };
}

export default function ShowEstimate({ estimate }: Props) {
    console.log(estimate);
    return (
        <AdminLayout activeSlug="admin/estimates">
            <Head
                title={`Estimate: ${estimate.first_name} ${estimate.last_name}`}
            />

            <div className="container mx-auto py-6">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Estimate Details</h1>
                    <div className="flex gap-2">
                        <ActionButton IconNode={ArrowLeft} href={index.url()}>
                            Back to Estimates
                        </ActionButton>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Left Column */}
                    <div className="space-y-6 lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>First Name</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-muted-foreground">
                                    {estimate.first_name}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Last Name</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-muted-foreground">
                                    {estimate.last_name}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Email</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-muted-foreground">
                                    {estimate.email}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Phone</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-muted-foreground">
                                    {estimate.phone}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Area</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-muted-foreground">
                                    {estimate.area}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Solar Panel</CardTitle>
                            </CardHeader>
                            <CardContent className='grid gap-2'>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Title</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-lg text-muted-foreground">
                                            {estimate.solar_panel?.title || 'N/A'}
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Description</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-lg text-muted-foreground">
                                            {estimate.solar_panel?.description || 'N/A'}
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Image</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                       {
                                        estimate.solar_panel?.image ? (
                                            <img src={estimate.solar_panel?.image_url ?? estimate.solar_panel?.image} alt={estimate.solar_panel?.title} />
                                        ) : (
                                            <p className="text-lg text-muted-foreground">N/A</p>
                                        )
                                       }
                                    </CardContent>
                                </Card>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Solar Inverter</CardTitle>
                            </CardHeader>
                            <CardContent className='grid gap-2'>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Title</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-lg text-muted-foreground">
                                            {estimate.solar_inverter?.title || 'N/A'}
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Description</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-lg text-muted-foreground">
                                            {estimate.solar_inverter?.description || 'N/A'}
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Image</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                       {
                                        estimate.solar_panel?.image ? (
                                            <img src={estimate.solar_inverter?.image_url ?? estimate.solar_inverter?.image } alt={estimate.solar_panel?.title} />
                                        ) : (
                                            <p className="text-lg text-muted-foreground">N/A</p>
                                        )
                                       }
                                    </CardContent>
                                </Card>
                            </CardContent>
                        </Card>



                        <Card>
                            <CardHeader>
                                <CardTitle>Consent</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-muted-foreground">
                                    {estimate.consent ? 'Yes' : 'No'}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Battery Included</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-muted-foreground">
                                    {estimate.battery ? 'Yes' : 'No'}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Charger Included</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-muted-foreground">
                                    {estimate.charger ? 'Yes' : 'No'}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Is Valid Order</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-muted-foreground">
                                    {estimate.is_valid_order ? 'Yes' : 'No'}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Status</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-muted-foreground">
                                    {estimate.status ? 'Processed' : 'Pending'}
                                </p>
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
                                    <p className="font-medium">
                                        {new Date(
                                            estimate.created_at,
                                        ).toLocaleDateString()}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Updated At
                                    </p>
                                    <p className="font-medium">
                                        {estimate.updated_at
                                            ? new Date(
                                                  estimate.updated_at,
                                              ).toLocaleDateString()
                                            : 'N/A'}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
