import {
    index,
    show,
    update,
} from '@/actions/App/Http/Controllers/Admin/AdvantageController';
import FileUpload from '@/components/file-upload';
import InputError from '@/components/input-error';
import { ActionButton } from '@/components/ui/action-button';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AdminLayout from '@/layouts/admin-layout';
import { Advantage } from '@/types/models';
import { Head, useForm } from '@inertiajs/react';
import { ArrowLeft, PencilOff, Save } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface Props {
    advantage: Advantage;
}

export default function EditAdvantage({ advantage }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        title: advantage.title || '',
        description: advantage.description || '',
        icon: null as File | null,
        delete_existing_icon: false,
        _method: 'PUT',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(update.url(advantage.id), {
            forceFormData: true,
        });
    }

    const [icon, setIcon] = useState<any[]>([]);
    useEffect(() => {
        if (advantage.icon_url) {
            setIcon([
                {
                    id: advantage.id,
                    url: advantage.icon_url,
                    name: advantage.icon?.split('/').pop() || 'icon',
                    mime_type: 'image/*',
                    path: advantage.icon || '',
                },
            ]);
        }
    }, [advantage]);

    const handleRemoveIconExisting = () => {
        if (
            confirm(
                'Are you sure you want to remove this file? You must upload a new file to save the changes.',
            )
        ) {
            setIcon([]);
            setData('delete_existing_icon', true);
        }
    };

    return (
        <AdminLayout activeSlug="admin-advantages">
            <Head title={`Edit: ${advantage.title}`} />

            <CardHeader className="flex flex-row items-center justify-between">
                <h1 className="text-2xl font-bold">Edit Advantage</h1>
                <div className="flex gap-2">
                    <ActionButton
                        IconNode={ArrowLeft}
                        href={show.url(advantage.id)}
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

                            {/* <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        Advantage Icon
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <FileUpload
                                            value={data.icon}
                                            onChange={(file) =>
                                                setData('icon', file as File)
                                            }
                                            existingFiles={icon}
                                            onRemoveExisting={
                                                handleRemoveIconExisting
                                            }
                                            multiple={false}
                                            accept="image/*"
                                        />
                                        <InputError message={errors.icon} />
                                    </div>
                                </CardContent>
                            </Card> */}
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
                                                advantage.created_at,
                                            ).toLocaleDateString()}
                                        </p>
                                    </div>

                                    <div>
                                        <Label className="text-sm text-muted-foreground">
                                            Updated At
                                        </Label>
                                        <p className="mt-1 text-sm font-medium">
                                            {advantage.updated_at
                                                ? new Date(
                                                      advantage.updated_at,
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
                                                : 'Update Advantage'}
                                        </Button>
                                        <ActionButton
                                            IconNode={PencilOff}
                                            href={show.url(advantage.id)}
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