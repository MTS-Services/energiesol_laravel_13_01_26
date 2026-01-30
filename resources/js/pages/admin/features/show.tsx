import { ActionButton } from '@/components/ui/action-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/layouts/admin-layout';
import { Features } from '@/types/models';
import { Head } from '@inertiajs/react';
import { ArrowLeft, SquarePen } from 'lucide-react';
import { index, edit } from '@/actions/App/Http/Controllers/Admin/FeatureController';

interface Props {
    feature: Features;
}

export default function ShowFeature({ feature }: Props) {
    return (
        <AdminLayout>
            <Head title="Feature Details" />

            <div className="container mx-auto py-6">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Feature Details</h1>
                    <div className="flex gap-2">
                        <ActionButton IconNode={ArrowLeft} href={index.url()}>Back to features</ActionButton>
                        <ActionButton IconNode={SquarePen} href={edit.url(feature.id)}>Edit</ActionButton>
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
                                <p className="text-lg text-muted-foreground">{feature.title}</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Description</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Image</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {feature.image && (
                                    <img src={`/storage/${feature.image}`} alt={feature.title} className="w-1/4 h-auto rounded-lg" />
                                )}
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Action</CardTitle>
                            </CardHeader>
                            <CardContent className='flex gap-2'>
                               <p className="text-muted-foreground font-semibold ">
                                    {feature.action_text}
                                </p>
                                <a href={feature.action_url} className="text-muted-foreground underline">
                                    {feature.action_url}
                                </a>
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
                                    <p className="font-medium">{new Date(feature.created_at).toLocaleDateString()}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                      Updated At
                                    </p>
                                    <p className="font-medium">{ feature.updated_at ? new Date(feature.updated_at).toLocaleDateString() : 'N/A' }</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
