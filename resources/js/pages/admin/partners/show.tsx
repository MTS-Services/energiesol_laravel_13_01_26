import { ActionButton } from '@/components/ui/action-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/layouts/admin-layout';
import { Partner } from '@/types/models';
import { Head } from '@inertiajs/react';
import { ArrowLeft, SquarePen } from 'lucide-react';
import { index, edit } from '@/actions/App/Http/Controllers/Admin/PartnerController';

interface Props {
    partner: Partner;
}

export default function ShowPartner({ partner }: Props) {
    return (
        <AdminLayout>
            <Head title="Partner Details" />

            <div className="container mx-auto py-6">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Partner Details</h1>
                    <div className="flex gap-2">
                        <ActionButton IconNode={ArrowLeft} href={index.url()}>Back to partners</ActionButton>
                        <ActionButton IconNode={SquarePen} href={edit.url(partner.id)}>Edit</ActionButton>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Left Column */}
                    <div className="space-y-6 lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Name</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-muted-foreground">{partner.name}</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Image</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {partner.image ? (
                                    <img
                                        src={`/storage/${partner.image}`}
                                        alt={`${partner.name} image`}
                                        className="h-24 w-auto object-contain border rounded p-2"
                                    />
                                ) : (
                                    <p className="text-muted-foreground">No image uploaded</p>
                                )}
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
                                    <p className="font-medium">{new Date(partner.created_at).toLocaleDateString()}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                      Updated At
                                    </p>
                                    <p className="font-medium">{ partner.updated_at ? new Date(partner.updated_at).toLocaleDateString() : 'N/A' }</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}