import { ActionButton } from '@/components/ui/action-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/layouts/admin-layout';
import { Inquiry } from '@/types/models';
import { Head } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import { index } from '@/actions/App/Http/Controllers/Admin/InquiryController';

interface Props {
    inquiry: Inquiry;
}

export default function ShowInquiry({ inquiry }: Props) {
    return (
        <AdminLayout>
            <Head title="Inquiry Details" />

            <div className="container mx-auto py-6">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Inquiry Details</h1>
                    <div className="flex gap-2">
                        <ActionButton IconNode={ArrowLeft} href={index.url()}>Back to inquiries</ActionButton>
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
                                <p className="text-lg text-muted-foreground">{inquiry.first_name} {inquiry.last_name}</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Contact</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {inquiry.email}
                                </p>
                                <p className="text-muted-foreground">
                                    {inquiry.phone_number}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Installation Details</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Area: {inquiry.area}
                                </p>
                                <p className="text-muted-foreground">
                                    Solar Panel: {inquiry.solar_panel?.title}
                                </p>
                                <p className="text-muted-foreground">
                                    Solar Inverter: {inquiry.solar_inverter?.title}
                                </p>
                                <p className="text-muted-foreground">
                                    Battery: {inquiry.has_battery ? 'Yes' : 'No'}
                                </p>
                                <p className="text-muted-foreground">
                                    Charger: {inquiry.has_charger ? 'Yes' : 'No'}
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
                                    <p className="font-medium">{new Date(inquiry.created_at).toLocaleDateString()}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                      Updated At
                                    </p>
                                    <p className="font-medium">{ inquiry.updated_at ? new Date(inquiry.updated_at).toLocaleDateString() : 'N/A' }</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Status
                                    </p>
                                    <p className="font-medium"> {inquiry.status ? 'Completed' : 'Pending'}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
