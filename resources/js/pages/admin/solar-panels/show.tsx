import { ActionButton } from '@/components/ui/action-button';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/layouts/admin-layout';
import { SolarPanels } from '@/types/models';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, SquarePen } from 'lucide-react';
import { index, edit } from '@/actions/App/Http/Controllers/Admin/SolarPanelController';

interface Props {
    solarPanel: SolarPanels;
}

export default function ShowSolarPanel({ solarPanel }: Props) {
    return (
        <AdminLayout activeSlug={'admin-solar-panels'}>
            <Head title="Solar Panel Details" />

            <div className="container mx-auto py-6">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Solar Panel Details</h1>
                    <div className="flex gap-2">
                      <ActionButton IconNode={ArrowLeft} href={index.url()}>Back to solar panels</ActionButton>
                      <ActionButton IconNode={SquarePen} href={edit.url(solarPanel.id)}>Edit</ActionButton>
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
                                <p className="text-lg text-muted-foreground">{solarPanel.title}</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Description</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {solarPanel.description}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Solar Panel Imange</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <img src={solarPanel.image_url} alt={solarPanel.title} className="w-1/4 h-auto rounded-lg" />
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Brand Title & Information</CardTitle>
                            </CardHeader>
                            <CardContent className='flex gap-2'>
                               <p className="text-muted-foreground font-semibold ">
                                    {solarPanel.brand_title} : 
                                </p><p className="text-muted-foreground">
                                    {solarPanel.note}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Brand Logo </CardTitle>
                            </CardHeader>
                            <CardContent >
                              {
                                solarPanel.brand_logo_url ?  (
                                  <img src={solarPanel.brand_logo_url} alt={solarPanel.brand_title} className="w-1/4 h-auto rounded-lg" />
                                ) : (
                                  <p className="text-muted-foreground">No brand logo</p>
                                )
                              }
                              
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
                                    <p className="font-medium">{new Date(solarPanel.created_at).toLocaleDateString()}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                      Updated At
                                    </p>
                                    <p className="font-medium">{ solarPanel.updated_at ? new Date(solarPanel.updated_at).toLocaleDateString() : 'N/A' }</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Status
                                    </p>
                                    <p className="font-medium"> {solarPanel.status ? 'Active' : 'Inactive'}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Price
                                    </p>
                                    <p className="font-medium">{ solarPanel.price ? `${parseInt(solarPanel.price)} €` : 'N/A' }</p>
                                </div>
                            </CardContent>
                        </Card>
                        {/* <Card>
                            <CardHeader>
                                <CardTitle>Additional Information</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    Use this area for notes, specifications, or
                                    any extra content. The spacing and
                                    typography keep the layout looking classic
                                    and professional.
                                </p>
                            </CardContent>
                        </Card> */}

                        
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
