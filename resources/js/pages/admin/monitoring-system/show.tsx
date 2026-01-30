import { ActionButton } from '@/components/ui/action-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/layouts/admin-layout';
import { MonitoringSystem } from '@/types/models';
import { Head } from '@inertiajs/react';
import { SquarePen } from 'lucide-react';
import { show, edit } from '@/actions/App/Http/Controllers/Admin/MonitoringSystemController';

interface Props {
    monitoringSystem: MonitoringSystem;
}

export default function ShowMonitoringSystem({ monitoringSystem }: Props) {
    return (
        <AdminLayout>
            <Head title="Monitoring System Details" />

            <div className="container mx-auto py-6">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Monitoring System Details</h1>
                    <div className="flex gap-2">
                        <ActionButton IconNode={SquarePen} href={edit.url(monitoringSystem.id)}>Edit</ActionButton>
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
                                <p className="text-lg text-muted-foreground">{monitoringSystem.title}</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Sub Title</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {monitoringSystem.sub_title}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Description</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {monitoringSystem.description}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Image</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {monitoringSystem.image ? (
                                    <img
                                        src={`/storage/${monitoringSystem.image}`}
                                        alt={monitoringSystem.title}
                                        className="max-w-md w-full h-auto object-contain border rounded"
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
                                    <p className="font-medium">{new Date(monitoringSystem.created_at).toLocaleDateString()}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                      Updated At
                                    </p>
                                    <p className="font-medium">{ monitoringSystem.updated_at ? new Date(monitoringSystem.updated_at).toLocaleDateString() : 'N/A' }</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
