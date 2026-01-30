import {
    index,
    show,
    update,
} from '@/actions/App/Http/Controllers/Admin/SolarInverterController';
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
import { SolarInverters } from '@/types/models';
import { Head, useForm } from '@inertiajs/react';
import { ArrowLeft, PencilOff, Save } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface Props {
    solarInverter: SolarInverters;
}

export default function EditSolarInverter({ solarInverter }: Props) {
    const [brandLogo, setBrandLogo] = useState<any[]>([]);
    const [image, setImage] = useState<any[]>([]);
    const [batteryImage, setBatteryImage] = useState<any[]>([]);
    const [batteryBrandLogo, setBatteryBrandLogo] = useState<any[]>([]);
    const [chargerImage, setChargerImage] = useState<any[]>([]);
    const [chargerBrandLogo, setChargerBrandLogo] = useState<any[]>([]);

    const { data, setData, post, processing, errors } = useForm({
        brand_title: solarInverter.brand_title || '',
        brand_logo: null as File | null,
        title: solarInverter.title || '',
        image: null as File | null,
        description: solarInverter.description || '',
        status: solarInverter.status,
        price: solarInverter.price || 0,
        note: solarInverter.note || '',

        // Battery fields
        battery_title: solarInverter.battery_title || '',
        battery_description: solarInverter.battery_description || '',
        battery_price: solarInverter.battery_price || 0,
        battery_image: null as File | null,
        battery_brand_title: solarInverter.battery_brand_title || '',
        battery_brand_logo: null as File | null,
        battery_note: solarInverter.battery_note || '',

        // Charger fields
        charger_title: solarInverter.charger_title || '',
        charger_description: solarInverter.charger_description || '',
        charger_price: solarInverter.charger_price || 0,
        charger_image: null as File | null,
        charger_brand_title: solarInverter.charger_brand_title || '',
        charger_brand_logo: null as File | null,
        charger_note: solarInverter.charger_note || '',

        // Delete flags
        delete_existing_brand_logo: false,
        delete_existing_image: false,
        delete_existing_battery_image: false,
        delete_existing_battery_brand_logo: false,
        delete_existing_charger_image: false,
        delete_existing_charger_brand_logo: false,
        _method: 'PUT',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(update.url(solarInverter.id), {
            forceFormData: true,
        });
    }

    useEffect(() => {
        // Solar Inverter Brand Logo
        if (solarInverter.brand_logo_url) {
            setBrandLogo([
                {
                    id: solarInverter.id,
                    url: solarInverter.brand_logo_url,
                    name:
                        solarInverter.brand_logo?.split('/').pop() ||
                        'brand-logo',
                    mime_type: 'image/*',
                    path: solarInverter.brand_logo || '',
                },
            ]);
        }

        // Solar Inverter Image
        if (solarInverter.image_url) {
            setImage([
                {
                    id: solarInverter.id,
                    url: solarInverter.image_url,
                    name: solarInverter.image?.split('/').pop() || 'image',
                    mime_type: 'image/*',
                    path: solarInverter.image || '',
                },
            ]);
        }

        // Battery Image
        if (solarInverter.battery_image_url) {
            setBatteryImage([
                {
                    id: solarInverter.id,
                    url: solarInverter.battery_image_url,
                    name:
                        solarInverter.battery_image?.split('/').pop() ||
                        'battery-image',
                    mime_type: 'image/*',
                    path: solarInverter.battery_image || '',
                },
            ]);
        }

        // Battery Brand Logo
        if (solarInverter.battery_brand_logo_url) {
            setBatteryBrandLogo([
                {
                    id: solarInverter.id,
                    url: solarInverter.battery_brand_logo_url,
                    name:
                        solarInverter.battery_brand_logo?.split('/').pop() ||
                        'battery-brand-logo',
                    mime_type: 'image/*',
                    path: solarInverter.battery_brand_logo || '',
                },
            ]);
        }

        // Charger Image
        if (solarInverter.charger_image_url) {
            setChargerImage([
                {
                    id: solarInverter.id,
                    url: solarInverter.charger_image_url,
                    name:
                        solarInverter.charger_image?.split('/').pop() ||
                        'charger-image',
                    mime_type: 'image/*',
                    path: solarInverter.charger_image || '',
                },
            ]);
        }

        // Charger Brand Logo
        if (solarInverter.charger_brand_logo_url) {
            setChargerBrandLogo([
                {
                    id: solarInverter.id,
                    url: solarInverter.charger_brand_logo_url,
                    name:
                        solarInverter.charger_brand_logo?.split('/').pop() ||
                        'charger-brand-logo',
                    mime_type: 'image/*',
                    path: solarInverter.charger_brand_logo || '',
                },
            ]);
        }
    }, [solarInverter]);

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

    const handleRemoveBatteryImageExisting = () => {
        if (
            confirm(
                'Are you sure you want to remove this file? You must upload a new file to save the changes.',
            )
        ) {
            setBatteryImage([]);
            setData('delete_existing_battery_image', true);
        }
    };

    const handleRemoveBatteryBrandLogoExisting = () => {
        if (
            confirm(
                'Are you sure you want to remove this file? You must upload a new file to save the changes.',
            )
        ) {
            setBatteryBrandLogo([]);
            setData('delete_existing_battery_brand_logo', true);
        }
    };

    const handleRemoveChargerImageExisting = () => {
        if (
            confirm(
                'Are you sure you want to remove this file? You must upload a new file to save the changes.',
            )
        ) {
            setChargerImage([]);
            setData('delete_existing_charger_image', true);
        }
    };

    const handleRemoveChargerBrandLogoExisting = () => {
        if (
            confirm(
                'Are you sure you want to remove this file? You must upload a new file to save the changes.',
            )
        ) {
            setChargerBrandLogo([]);
            setData('delete_existing_charger_brand_logo', true);
        }
    };

    return (
        <AdminLayout activeSlug="admin-solar-inverters">
            <Head title={`Edit: ${solarInverter.title}`} />

            <CardHeader className="flex flex-row items-center justify-between">
                <h1 className="text-2xl font-bold">Edit Solar Inverter</h1>
                <div className="flex gap-2">
                    <ActionButton
                        IconNode={ArrowLeft}
                        href={show.url(solarInverter.id)}
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
                                        Solar Inverter Image
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
                                            onRemoveExisting={
                                                handleRemoveBrandExisting
                                            }
                                        />
                                        <InputError
                                            message={errors.brand_logo}
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Battery Information */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        Battery Information
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="battery_title">
                                            Title
                                        </Label>
                                        <Input
                                            id="battery_title"
                                            type="text"
                                            value={data.battery_title}
                                            onChange={(e) =>
                                                setData(
                                                    'battery_title',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.battery_title}
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="battery_description">
                                            Description
                                        </Label>
                                        <Textarea
                                            id="battery_description"
                                            value={data.battery_description}
                                            onChange={(e) =>
                                                setData(
                                                    'battery_description',
                                                    e.target.value,
                                                )
                                            }
                                            rows={3}
                                        />
                                        <InputError
                                            message={errors.battery_description}
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        Battery Image
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <FileUpload
                                            value={data.battery_image}
                                            onChange={(file) =>
                                                setData(
                                                    'battery_image',
                                                    file as File,
                                                )
                                            }
                                            existingFiles={batteryImage}
                                            onRemoveExisting={
                                                handleRemoveBatteryImageExisting
                                            }
                                            multiple={false}
                                            accept="image/*"
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        Battery Brand Information
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="battery_brand_title">
                                            Brand
                                        </Label>
                                        <Input
                                            id="battery_brand_title"
                                            type="text"
                                            value={data.battery_brand_title}
                                            onChange={(e) =>
                                                setData(
                                                    'battery_brand_title',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.battery_brand_title}
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="battery_note">
                                            Note
                                        </Label>
                                        <Textarea
                                            id="battery_note"
                                            value={data.battery_note}
                                            onChange={(e) =>
                                                setData(
                                                    'battery_note',
                                                    e.target.value,
                                                )
                                            }
                                            rows={3}
                                        />
                                        <InputError
                                            message={errors.battery_note}
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        Battery Brand Logo
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <FileUpload
                                            accept="image/*"
                                            onChange={(file) =>
                                                setData(
                                                    'battery_brand_logo',
                                                    file as File,
                                                )
                                            }
                                            existingFiles={batteryBrandLogo}
                                            onRemoveExisting={
                                                handleRemoveBatteryBrandLogoExisting
                                            }
                                        />
                                        <InputError
                                            message={errors.battery_brand_logo}
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Charger Information */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        Charger Information
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="charger_title">
                                            Title
                                        </Label>
                                        <Input
                                            id="charger_title"
                                            type="text"
                                            value={data.charger_title}
                                            onChange={(e) =>
                                                setData(
                                                    'charger_title',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.charger_title}
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="charger_description">
                                            Description
                                        </Label>
                                        <Textarea
                                            id="charger_description"
                                            value={data.charger_description}
                                            onChange={(e) =>
                                                setData(
                                                    'charger_description',
                                                    e.target.value,
                                                )
                                            }
                                            rows={3}
                                        />
                                        <InputError
                                            message={errors.charger_description}
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        Charger Image
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <FileUpload
                                            value={data.charger_image}
                                            onChange={(file) =>
                                                setData(
                                                    'charger_image',
                                                    file as File,
                                                )
                                            }
                                            existingFiles={chargerImage}
                                            onRemoveExisting={
                                                handleRemoveChargerImageExisting
                                            }
                                            multiple={false}
                                            accept="image/*"
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        Charger Brand Information
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="charger_brand_title">
                                            Brand
                                        </Label>
                                        <Input
                                            id="charger_brand_title"
                                            type="text"
                                            value={data.charger_brand_title}
                                            onChange={(e) =>
                                                setData(
                                                    'charger_brand_title',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.charger_brand_title}
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="charger_note">
                                            Note
                                        </Label>
                                        <Textarea
                                            id="charger_note"
                                            value={data.charger_note}
                                            onChange={(e) =>
                                                setData(
                                                    'charger_note',
                                                    e.target.value,
                                                )
                                            }
                                            rows={3}
                                        />
                                        <InputError
                                            message={errors.charger_note}
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        Charger Brand Logo
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <FileUpload
                                            id="charger_brand_logo"
                                            accept="image/*"
                                            onChange={(file) =>
                                                setData(
                                                    'charger_brand_logo',
                                                    file as File,
                                                )
                                            }
                                            existingFiles={chargerBrandLogo}
                                            onRemoveExisting={
                                                handleRemoveChargerBrandLogoExisting
                                            }
                                        />
                                        <InputError
                                            message={errors.charger_brand_logo}
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
                                                solarInverter.created_at,
                                            ).toLocaleDateString()}
                                        </p>
                                    </div>

                                    <div>
                                        <Label className="text-sm text-muted-foreground">
                                            Updated At
                                        </Label>
                                        <p className="mt-1 text-sm font-medium">
                                            {solarInverter.updated_at
                                                ? new Date(
                                                      solarInverter.updated_at,
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
                                        <InputError message={errors.price} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="battery_price">Battery Price (€)</Label>
                                        <Input
                                            id="battery_price"
                                            type="number"
                                            step="0.01"
                                            value={data.battery_price}
                                            onChange={(e) =>
                                                setData(
                                                    'battery_price',
                                                    parseFloat(
                                                        e.target.value,
                                                    ) || 0,
                                                )
                                            }
                                            required
                                        />
                                        <InputError message={errors.price} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="charger_price">Charger Price (€)</Label>
                                        <Input
                                            id="charger_price"
                                            type="number"
                                            step="0.01"
                                            value={data.charger_price}
                                            onChange={(e) =>
                                                setData(
                                                    'charger_price',
                                                    parseFloat(
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
                                                : 'Update Solar Inverter'}
                                        </Button>
                                        <ActionButton
                                            IconNode={PencilOff}
                                            href={show.url(solarInverter.id)}
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
