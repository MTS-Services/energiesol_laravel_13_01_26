import React, { useEffect, useState } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import { update } from '@/actions/App/Http/Controllers/Admin/MonitoringSystemController';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import InputError from '@/components/input-error';
import { MonitoringSystem } from '@/types/models';
import FileUpload from '@/components/file-upload';
import { ActionButton } from '@/components/ui/action-button';
import { Save } from 'lucide-react';


interface Props {
  monitoringSystem: MonitoringSystem;
}

export default function EditMonitoringSystem({ monitoringSystem }: Props) {
  const { data, setData, post, processing, errors } = useForm({
    title: monitoringSystem.title || '',
    sub_title: monitoringSystem.sub_title || '',
    description: monitoringSystem.description || '',
    delete_existing_image: false, 
    
    image: null as File | null,
    _method: 'PUT',
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    post(update.url());
  }
 const [image, setImage] = useState<any[]>([]);
  
    const handleRemoveImageExisting = () => {
        if (
            confirm(
                'Are you sure you want to remove this file? You must upload a new file to save the changes.',
            )
        ) {
            setImage([]);
           setData('delete_existing_image', true);
        }
    };
  useEffect(() => {
        if(monitoringSystem.image_url){
          setImage([
            {
                id: monitoringSystem.id,
                url: monitoringSystem.image_url,
                name: monitoringSystem.image?.split('/').pop() || 'image',
                mime_type: 'image/*',
                path: monitoringSystem.image || '',
            },
        ]);
        }
    }, [monitoringSystem]);

   return (
        <AdminLayout activeSlug="admin-monitoring-systems">
            <Head title={`Edit: ${monitoringSystem.title}`} />

            <CardHeader className="flex flex-row items-center justify-between">
                <h1 className="text-2xl font-bold">Manage Monitor</h1>

            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {/* Left Column - Main Information */}
                        <div className="space-y-6 lg:col-span-2">
                            <div className="grid gap-2">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    type="text"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData('title', e.target.value)
                                    }
                                    required
                                />
                                <InputError message={errors.title} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="sub_title">Sub Title</Label>
                                <Input
                                    id="sub_title"
                                    type="text"
                                    value={data.sub_title}
                                    onChange={(e) =>
                                        setData('sub_title', e.target.value)
                                    }
                                    required
                                />
                                <InputError message={errors.sub_title} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData('description', e.target.value)
                                    }
                                    rows={4}
                                />
                                <InputError message={errors.description} />
                            </div>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        Solar Panel Image
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                 
                                    <div className="grid gap-2">
                                        <FileUpload
                                            value={data.image}
                                           onChange={(file) =>
                                                setData(
                                                    'image',
                                                    file as File,
                                                )
                                            }
                                            existingFiles={image}
                                            onRemoveExisting={handleRemoveImageExisting}
                                            multiple={false}
                                            accept="image/*"
                                        />
                                    </div>
                                </CardContent>
                            </Card>


                        </div>

                        {/* Right Column - Insights/Meta Information */}
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        Insights
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label className="text-sm text-muted-foreground">
                                            Created At
                                        </Label>
                                        <p className="mt-1 text-sm font-medium">
                                            {new Date(
                                                monitoringSystem.created_at,
                                            ).toLocaleDateString()}
                                        </p>
                                    </div>

                                    <div>
                                        <Label className="text-sm text-muted-foreground">
                                            Updated At
                                        </Label>
                                        <p className="mt-1 text-sm font-medium">
                                            {monitoringSystem.updated_at
                                                ? new Date(
                                                      monitoringSystem.updated_at,
                                                  ).toLocaleDateString()
                                                : 'N/A'}
                                        </p>
                                    </div>

                                </CardContent>
                            </Card>

                            {/* Action Buttons */}
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex flex-row justify-between gap-3">
                                        <Button
                                            type="submit"
                                            disabled={processing}
                                            className="flex h-auto w-full items-center justify-center bg-secondary px-6 py-3! hover:bg-secondary/80"
                                        >
                                            <Save className="mr-2 h-4 w-4" />
                                            {processing
                                                ? 'Updating...'
                                                : 'Update Solar Panel'}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </form>
            </CardContent>
        </AdminLayout>
    );
}
