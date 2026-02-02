import {
    index,
    show,
    update,
} from '@/actions/App/Http/Controllers/Admin/ServiceController';
import FileUpload from '@/components/file-upload';
import InputError from '@/components/input-error';
import { ActionButton } from '@/components/ui/action-button';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AdminLayout from '@/layouts/admin-layout';
import { Service } from '@/types/models';
import { Head, useForm } from '@inertiajs/react';
import { ArrowLeft, PencilOff, Save } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface Props {
    service: Service;
}

export default function EditService({ service }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        title: service.title || '',
        sub_title: service.sub_title || '',
        image: null as File | null,
        description: service.description || '',
        delete_existing_image: false,
        _method: 'PUT',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(update.url(service.id), {
            forceFormData: true,
        });
    }

    const [image, setImage] = useState<any[]>([]);
    useEffect(() => {
        if (service.image_url) {
            setImage([
                {
                    id: service.id,
                    url: service.image_url,
                    name: service.image?.split('/').pop() || 'image',
                    mime_type: 'image/*',
                    path: service.image || '',
                },
            ]);
        }
    }, [service]);

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
    return (
        <AdminLayout activeSlug="admin-services">
            <Head title={`Edit: ${service.title}`} />

            <CardHeader className="flex flex-row items-center justify-between">
                <h1 className="text-2xl font-bold">Edit Service</h1>
                <div className="flex gap-2">
                    <ActionButton
                        IconNode={ArrowLeft}
                        href={show.url(service.id)}
                    >
                        Back to Details
                    </ActionButton>
                    <ActionButton IconNode={ArrowLeft} href={index.url()}>
                        Back to List
                    </ActionButton>
                </div>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
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
                                        Service Image
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <FileUpload
                                            value={data.image}
                                            onChange={(file) =>
                                                setData('image', file as File)
                                            }
                                            existingFiles={image}
                                            onRemoveExisting={
                                                handleRemoveImageExisting
                                            }
                                            multiple={false}
                                            accept="image/*"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

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
                                                service.created_at,
                                            ).toLocaleDateString()}
                                        </p>
                                    </div>

                                    <div>
                                        <Label className="text-sm text-muted-foreground">
                                            Updated At
                                        </Label>
                                        <p className="mt-1 text-sm font-medium">
                                            {service.updated_at
                                                ? new Date(
                                                      service.updated_at,
                                                  ).toLocaleDateString()
                                                : 'N/A'}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex flex-row justify-between gap-3">
                                        <Button
                                            type="submit"
                                            disabled={processing}
                                            className="flex h-auto w-full items-center justify-center bg-secondary px-6 py-0! hover:bg-secondary/80"
                                        >
                                            <Save className="mr-2 h-4 w-4" />
                                            {processing
                                                ? 'Updating...'
                                                : 'Update Service'}
                                        </Button>
                                        <ActionButton
                                            IconNode={PencilOff}
                                            href={show.url(service.id)}
                                        >
                                            Cancel
                                        </ActionButton>
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