import {
    index,
    show,
    update,
} from '@/actions/App/Http/Controllers/Admin/SolarPanelController';
import FileUpload from '@/components/file-upload';
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
import { Head, useForm } from '@inertiajs/react';
import { ArrowLeft, PencilOff, Save } from 'lucide-react';
import React, { useEffect, useState } from 'react';

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
        price: solarPanel.price|| 0,
        note: solarPanel.note || '',
        delete_existing_brand_logo: false,
        delete_existing_image: false,
        _method: 'PUT',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(update.url(solarPanel.id), {
            forceFormData: true,
        });
    }
    const [brandLogo, setBrandLogo] = useState<any[]>([]);
    const [image, setImage] = useState<any[]>([]);
    useEffect(() => {
        if(solarPanel.brand_logo_url){
          setBrandLogo([
            {
                id: solarPanel.id,
                url: solarPanel.brand_logo_url,
                name: solarPanel.brand_logo?.split('/').pop() || 'brand-logo',
                mime_type: 'image/*',
                path: solarPanel.brand_logo || '',
            },
        ]);
        }
      if(solarPanel.image_url){
          setImage([
            {
                id: solarPanel.id,
                url: solarPanel.image_url,
                name: solarPanel.image?.split('/').pop() || 'image',
                mime_type: 'image/*',
                path: solarPanel.image || '',
            },
        ]);
      }
    }, [solarPanel]);

    console.log(brandLogo, image, solarPanel)
    const handleRemoveBrandExisting = () => {
        if (
            confirm(
                'Are you sure you want to remove this file? You must upload a new file to save the changes.',
            )
        ) {
            setBrandLogo([]);
           setData('delete_existing_brand_logo', true);
        }
    };
    
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
        <AdminLayout activeSlug="admin-solar-panels">
            <Head title={`Edit: ${solarPanel.title}`} />

            <CardHeader className="flex flex-row items-center justify-between">
                <h1 className="text-2xl font-bold">Edit Solar Panel</h1>
                <div className="flex gap-2">
                    <ActionButton
                        IconNode={ArrowLeft}
                        href={show.url(solarPanel.id)}
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
                                                setData('note', e.target.value)
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
                                    
                                    <div className="grid gap-2">
                                        <FileUpload
                                            id="brand_logo"
                                            accept="image/*"
                                            onChange={(file) =>
                                                setData(
                                                    'brand_logo',
                                                    file as File,
                                                )
                                            }
                                            existingFiles={brandLogo}
                                            onRemoveExisting={ handleRemoveBrandExisting }
                                        />
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
                                        <Label htmlFor="status">Status</Label>
                                        <Select
                                            value={data.status ? '1' : '0'}
                                            onValueChange={(value) =>
                                                setData('status', value === '1')
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
                                        <InputError message={errors.status} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="price">Price (€)</Label>
                                        <Input
                                            id="price"
                                            type="number"
                                            step="0.01"
                                            value={parseInt(data.price) || 0}
                                            onChange={(e) =>
                                                setData(
                                                    'price',
                                                    parseInt(
                                                        e.target.value,
                                                    ) || 0,
                                                )
                                            }
                                            required
                                        />
                                        <InputError message={errors.price} />
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
                                            className="flex h-auto w-full items-center justify-center bg-secondary px-6 py-0! hover:bg-secondary/80"
                                        >
                                            <Save className="mr-2 h-4 w-4" />
                                            {processing
                                                ? 'Updating...'
                                                : 'Update Solar Panel'}
                                        </Button>
                                        <ActionButton
                                            IconNode={PencilOff}
                                            href={show.url(solarPanel.id)}
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
