import {
    index,
    show,
    update,
} from '@/actions/App/Http/Controllers/Admin/SolarPanelController';
import InputError from '@/components/input-error';
import { ActionButton } from '@/components/ui/action-button';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import AdminLayout from '@/layouts/admin-layout';
import { SolarPanels } from '@/types/models';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, PencilOff, Save, SquarePen } from 'lucide-react';
import React from 'react';

interface Props {
    solarPanel: SolarPanels;
}

export default function EditSolarPanel({ solarPanel }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        brand_title: solarPanel.brand_title || '',
        brand_logo: null as File | null,
        title: solarPanel.title || '',
        image: null as File | null,
        description: solarPanel.description || '',
        status: solarPanel.status,
        price: solarPanel.price || 0,
        note: solarPanel.note || '',
        _method: 'PUT',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(update.url(solarPanel.id), {
            forceFormData: true,
        });
    }

    return (
        <AdminLayout activeSlug="admin-solar-panels">
            <Head title={`Edit: ${solarPanel.title}`} />

                <CardHeader className="flex flex-row items-center justify-between">
                   <h1 className="text-2xl font-bold">Edit Solar Panel</h1>
                    <div className="flex gap-2">
                      <ActionButton IconNode={ArrowLeft} href={show.url(solarPanel.id)}>Back to Details</ActionButton>
                      <ActionButton IconNode={ArrowLeft} href={index.url()}>Back to List</ActionButton>
                    </div>
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
                                    <Label htmlFor="description">
                                        Description
                                    </Label>
                                    <Textarea
                                        id="description"
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                'description',
                                                e.target.value,
                                            )
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
                                        {solarPanel.image && (
                                            <div className="mb-2">
                                                <img
                                                    src={solarPanel.image}
                                                    alt="Current image"
                                                    className="h-48 w-auto rounded border object-contain"
                                                />
                                                <p className="mt-1 text-sm text-gray-500">
                                                    Current image
                                                </p>
                                            </div>
                                        )}
                                        <div className="grid gap-2">
                                            <Label htmlFor="image">
                                                Upload New Image
                                            </Label>
                                            <Input
                                                id="image"
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) =>
                                                    setData(
                                                        'image',
                                                        e.target.files?.[0] ||
                                                            null,
                                                    )
                                                }
                                            />
                                            <p className="text-sm text-gray-500">
                                                Leave empty to keep current
                                                image
                                            </p>
                                            <InputError
                                                message={errors.image}
                                            />
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">
                                            Brand Title & Information
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="brand_title">
                                                Brand
                                            </Label>
                                            <Input
                                                id="brand_title"
                                                type="text"
                                                value={data.brand_title}
                                                onChange={(e) =>
                                                    setData(
                                                        'brand_title',
                                                        e.target.value,
                                                    )
                                                }
                                                required
                                            />
                                            <InputError
                                                message={errors.brand_title}
                                            />
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor="note">Note</Label>
                                            <Textarea
                                                id="note"
                                                value={data.note}
                                                onChange={(e) =>
                                                    setData(
                                                        'note',
                                                        e.target.value,
                                                    )
                                                }
                                                rows={3}
                                            />
                                            <InputError message={errors.note} />
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">
                                            Brand Logo
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {solarPanel.brand_logo && (
                                            <div className="mb-2">
                                                <img
                                                    src={solarPanel.brand_logo}
                                                    alt="Current brand logo"
                                                    className="h-20 w-20 rounded border object-contain"
                                                />
                                                <p className="mt-1 text-sm text-gray-500">
                                                    Current logo
                                                </p>
                                            </div>
                                        )}
                                        <div className="grid gap-2">
                                            <Label htmlFor="brand_logo">
                                                Upload New Brand Logo
                                            </Label>
                                            <Input
                                                id="brand_logo"
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) =>
                                                    setData(
                                                        'brand_logo',
                                                        e.target.files?.[0] ||
                                                            null,
                                                    )
                                                }
                                            />
                                            <p className="text-sm text-gray-500">
                                                Leave empty to keep current logo
                                            </p>
                                            <InputError
                                                message={errors.brand_logo}
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
                                                    solarPanel.created_at,
                                                ).toLocaleDateString()}
                                            </p>
                                        </div>

                                        <div>
                                            <Label className="text-sm text-muted-foreground">
                                                Updated At
                                            </Label>
                                            <p className="mt-1 text-sm font-medium">
                                                {solarPanel.updated_at
                                                    ? new Date(
                                                          solarPanel.updated_at,
                                                      ).toLocaleDateString()
                                                    : 'N/A'}
                                            </p>
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor="status">
                                                Status
                                            </Label>
                                            <Select
                                                value={data.status ? '1' : '0'}
                                                onValueChange={(value) =>
                                                    setData(
                                                        'status',
                                                        value === '1',
                                                    )
                                                }
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Status" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="1">
                                                        Active
                                                    </SelectItem>
                                                    <SelectItem value="0">
                                                        Inactive
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <InputError
                                                message={errors.status}
                                            />
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor="price">
                                                Price (€)
                                            </Label>
                                            <Input
                                                id="price"
                                                type="number"
                                                step="0.01"
                                                value={data.price}
                                                onChange={(e) =>
                                                    setData(
                                                        'price',
                                                        parseFloat(
                                                            e.target.value,
                                                        ) || 0,
                                                    )
                                                }
                                                required
                                            />
                                            <InputError
                                                message={errors.price}
                                            />
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
                                                className="w-full flex items-center justify-center px-6 py-0! h-auto bg-secondary hover:bg-secondary/80"
                                            >
                                                <Save className="mr-2 h-4 w-4" />
                                                {processing
                                                    ? 'Updating...'
                                                    : 'Update Solar Panel'}
                                            </Button>
                                            <ActionButton IconNode={PencilOff} href={show.url(solarPanel.id)}>Cancel</ActionButton>
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
