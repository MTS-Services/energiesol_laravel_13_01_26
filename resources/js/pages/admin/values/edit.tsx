import {
    index,
    show,
    update,
} from '@/actions/App/Http/Controllers/Admin/ValueController';
import FileUpload from '@/components/file-upload';
import InputError from '@/components/input-error';
import { ActionButton } from '@/components/ui/action-button';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AdminLayout from '@/layouts/admin-layout';
import { Values } from '@/types/models';
import { Head, useForm } from '@inertiajs/react';
import { ArrowLeft, PencilOff, Save } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface Props {
    value: Values;
}

export default function EditValue({ value }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        title: value.title || '',
        description: value.description || '',
        image: null as File | null,
        action_text: value.action_text || '',
        action_url: value.action_url || '',
        delete_existing_image: false,
        _method: 'PUT',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(update.url(value.id), {
            forceFormData: true,
        });
    }
 console.log(value);
    const [image, setImage] = useState<any[]>([]);
    useEffect(() => {
        if (value.image_url) {
            setImage([
                {
                    id: value.id,
                    url: value.image_url,
                    name: value.image?.split('/').pop() || 'image',
                    mime_type: 'image/*',
                    path: value.image || '',
                },
            ]);
        }
    }, [value]);

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
        <AdminLayout activeSlug="admin-values">
            <Head title={`Edit: ${value.title}`} />

            <CardHeader className="flex flex-row items-center justify-between">
                <h1 className="text-2xl font-bold">Edit Value</h1>
                <div className="flex gap-2">
                    <ActionButton
                        IconNode={ArrowLeft}
                        href={show.url(value.id)}
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
                                        Value Image
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
                                        <InputError message={errors.image} />
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="grid gap-2">
                                <Label htmlFor="action_text">Action Text</Label>
                                <Input
                                    id="action_text"
                                    type="text"
                                    value={data.action_text}
                                    onChange={(e) =>
                                        setData('action_text', e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.action_text}
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="action_url">Action URL</Label>
                                <Input
                                    id="action_url"
                                    type="text"
                                    value={data.action_url}
                                    onChange={(e) =>
                                        setData('action_url', e.target.value)
                                    }
                                />
                                <InputError message={errors.action_url} />
                            </div>
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
                                                value.created_at,
                                            ).toLocaleDateString()}
                                        </p>
                                    </div>

                                    <div>
                                        <Label className="text-sm text-muted-foreground">
                                            Updated At
                                        </Label>
                                        <p className="mt-1 text-sm font-medium">
                                            {value.updated_at
                                                ? new Date(
                                                      value.updated_at,
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
                                                : 'Update Value'}
                                        </Button>
                                        <ActionButton
                                            IconNode={PencilOff}
                                            href={show.url(value.id)}
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
