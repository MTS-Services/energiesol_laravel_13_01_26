import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import { store, index } from '@/actions/App/Http/Controllers/Admin/SolarInverterController';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import InputError from '@/components/input-error';
import FileUpload from '@/components/file-upload';
import { ActionButton } from '@/components/ui/action-button';
import { ArrowLeft, Save } from 'lucide-react';

export default function CreateSolarInverter() {
    const { data, setData, post, processing, errors } = useForm({
        // Solar Inverter Fields
        brand_title: '',
        brand_logo: null as File | null,
        title: '',
        image: null as File | null,
        description: '',
        status: true,
        price: 0,
        note: '',

        // Battery Fields
        battery_title: '',
        battery_description: '',
        battery_price: 0,
        battery_image: null as File | null,
        battery_brand_title: '',
        battery_brand_logo: null as File | null,
        battery_note: '',

        // Charger Fields
        charger_title: '',
        charger_description: '',
        charger_price: 0,
        charger_image: null as File | null,
        charger_brand_title: '',
        charger_brand_logo: null as File | null,
        charger_note: '',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(store.url(), {
            forceFormData: true,
        });
    }

    return (
        <AdminLayout activeSlug="admin-solar-inverters">
            <Head title="Create Solar Inverter" />

            <CardHeader className="flex flex-row items-center justify-between">
                <h1 className="text-2xl font-bold">Create Solar Inverter</h1>
                <div className="flex gap-2">
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
                                    onChange={(e) => setData('title', e.target.value)}
                                    required
                                />
                                <InputError message={errors.title} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
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
                                            onChange={(file) => setData('image', file as File)}
                                            multiple={false}
                                            accept="image/*"
                                        />
                                        <InputError message={errors.image} />
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
                                        <Label htmlFor="brand_title">Brand</Label>
                                        <Input
                                            id="brand_title"
                                            type="text"
                                            value={data.brand_title}
                                            onChange={(e) => setData('brand_title', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.brand_title} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="note">Note</Label>
                                        <Textarea
                                            id="note"
                                            value={data.note}
                                            onChange={(e) => setData('note', e.target.value)}
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
                                            onChange={(file) => setData('brand_logo', file as File)}
                                        />
                                        <InputError message={errors.brand_logo} />
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
                                        <Label htmlFor="battery_title">Title</Label>
                                        <Input
                                            id="battery_title"
                                            type="text"
                                            value={data.battery_title}
                                            onChange={(e) => setData('battery_title', e.target.value)}
                                        />
                                        <InputError message={errors.battery_title} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="battery_description">Description</Label>
                                        <Textarea
                                            id="battery_description"
                                            value={data.battery_description}
                                            onChange={(e) => setData('battery_description', e.target.value)}
                                            rows={3}
                                        />
                                        <InputError message={errors.battery_description} />
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
                                            onChange={(file) => setData('battery_image', file as File)}
                                            multiple={false}
                                            accept="image/*"
                                        />
                                        <InputError message={errors.battery_image} />
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
                                        <Label htmlFor="battery_brand_title">Brand</Label>
                                        <Input
                                            id="battery_brand_title"
                                            type="text"
                                            value={data.battery_brand_title}
                                            onChange={(e) => setData('battery_brand_title', e.target.value)}
                                        />
                                        <InputError message={errors.battery_brand_title} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="battery_note">Note</Label>
                                        <Textarea
                                            id="battery_note"
                                            value={data.battery_note}
                                            onChange={(e) => setData('battery_note', e.target.value)}
                                            rows={3}
                                        />
                                        <InputError message={errors.battery_note} />
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
                                            onChange={(file) => setData('battery_brand_logo', file as File)}
                                        />
                                        <InputError message={errors.battery_brand_logo} />
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
                                        <Label htmlFor="charger_title">Title</Label>
                                        <Input
                                            id="charger_title"
                                            type="text"
                                            value={data.charger_title}
                                            onChange={(e) => setData('charger_title', e.target.value)}
                                        />
                                        <InputError message={errors.charger_title} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="charger_description">Description</Label>
                                        <Textarea
                                            id="charger_description"
                                            value={data.charger_description}
                                            onChange={(e) => setData('charger_description', e.target.value)}
                                            rows={3}
                                        />
                                        <InputError message={errors.charger_description} />
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
                                            onChange={(file) => setData('charger_image', file as File)}
                                            multiple={false}
                                            accept="image/*"
                                        />
                                        <InputError message={errors.charger_image} />
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
                                        <Label htmlFor="charger_brand_title">Brand</Label>
                                        <Input
                                            id="charger_brand_title"
                                            type="text"
                                            value={data.charger_brand_title}
                                            onChange={(e) => setData('charger_brand_title', e.target.value)}
                                        />
                                        <InputError message={errors.charger_brand_title} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="charger_note">Note</Label>
                                        <Textarea
                                            id="charger_note"
                                            value={data.charger_note}
                                            onChange={(e) => setData('charger_note', e.target.value)}
                                            rows={3}
                                        />
                                        <InputError message={errors.charger_note} />
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
                                            onChange={(file) => setData('charger_brand_logo', file as File)}
                                        />
                                        <InputError message={errors.charger_brand_logo} />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Right Column - Settings */}
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        Settings
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="status">Status</Label>
                                        <Select
                                            value={data.status ? '1' : '0'}
                                            onValueChange={(value) => setData('status', value === '1')}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1">Active</SelectItem>
                                                <SelectItem value="0">Inactive</SelectItem>
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
                                            onChange={(e) => setData('price', parseFloat(e.target.value) || 0)}
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
                                            onChange={(e) => setData('battery_price', parseFloat(e.target.value) || 0)}
                                        />
                                        <InputError message={errors.battery_price} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="charger_price">Charger Price (€)</Label>
                                        <Input
                                            id="charger_price"
                                            type="number"
                                            step="0.01"
                                            value={data.charger_price}
                                            onChange={(e) => setData('charger_price', parseFloat(e.target.value) || 0)}
                                        />
                                        <InputError message={errors.charger_price} />
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Action Buttons */}
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex flex-col gap-3">
                                        <Button
                                            type="submit"
                                            disabled={processing}
                                            className="flex h-auto w-full items-center justify-center  py-3! bg-secondary px-6 hover:bg-secondary/80"
                                        >
                                            <Save className="mr-2 h-4 w-4" />
                                            {processing ? 'Creating...' : 'Create Solar Inverter'}
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