import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import { store, index } from '@/actions/App/Http/Controllers/Admin/EstimateController';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import InputError from '@/components/input-error';
import { ActionButton } from '@/components/ui/action-button';
import { ArrowLeft, Save } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { SolarInverter, SolarPanel } from '@/types/models';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface Props {
    solarPanels: SolarPanel[];
    solarInverters: SolarInverter[];
}

export default function CreateEstimate({
    solarPanels,
    solarInverters,
}: Props) {
    const { data, setData, post, processing, errors } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        consent: false,
        area: '',
        solar_id: '',
        inverter_id: '',
        battery: false,
        charger: false,
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(store.url());
    }

    return (
        <AdminLayout activeSlug="admin/estimates">
            <Head title="Create Estimate" />

            <CardHeader className="flex flex-row items-center justify-between">
                <h1 className="text-2xl font-bold">Create New Estimate</h1>
                <div className="flex gap-2">
                    <ActionButton IconNode={ArrowLeft} href={index.url()}>
                        Back to List
                    </ActionButton>
                </div>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {/* Left Column - Main Information */}
                        <div className="space-y-6 lg:col-span-2">
                            <div className="grid gap-2">
                                <Label htmlFor="first_name">First Name</Label>
                                <Input
                                    id="first_name"
                                    type="text"
                                    value={data.first_name}
                                    onChange={(e) =>
                                        setData('first_name', e.target.value)
                                    }
                                    required
                                />
                                <InputError message={errors.first_name} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="last_name">Last Name</Label>
                                <Input
                                    id="last_name"
                                    type="text"
                                    value={data.last_name}
                                    onChange={(e) =>
                                        setData('last_name', e.target.value)
                                    }
                                    required
                                />
                                <InputError message={errors.last_name} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                    required
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                    id="phone"
                                    type="text"
                                    value={data.phone}
                                    onChange={(e) =>
                                        setData('phone', e.target.value)
                                    }
                                    required
                                />
                                <InputError message={errors.phone} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="area">Area</Label>
                                <Input
                                    id="area"
                                    type="number"
                                    value={data.area}
                                    onChange={(e) =>
                                        setData('area', e.target.value)
                                    }
                                    required
                                />
                                <InputError message={errors.area} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="solar_id">Solar Panel</Label>
                                <Select
                                    onValueChange={(value) =>
                                        setData('solar_id', value)
                                    }
                                    value={data.solar_id}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a solar panel" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {solarPanels.map((panel) => (
                                            <SelectItem
                                                key={panel.id}
                                                value={String(panel.id)}
                                            >
                                                {panel.title}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <InputError message={errors.solar_id} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="inverter_id">
                                    Solar Inverter
                                </Label>
                                <Select
                                    onValueChange={(value) =>
                                        setData('inverter_id', value)
                                    }
                                    value={data.inverter_id}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a solar inverter" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {solarInverters.map((inverter) => (
                                            <SelectItem
                                                key={inverter.id}
                                                value={String(inverter.id)}
                                            >
                                                {inverter.title}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <InputError message={errors.inverter_id} />
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="consent"
                                    checked={data.consent}
                                    onCheckedChange={(checked) =>
                                        setData('consent', checked as boolean)
                                    }
                                />
                                <Label htmlFor="consent">
                                    Consent to terms and conditions
                                </Label>
                                <InputError message={errors.consent} />
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="battery"
                                    checked={data.battery}
                                    onCheckedChange={(checked) =>
                                        setData('battery', checked as boolean)
                                    }
                                />
                                <Label htmlFor="battery">
                                    Include Battery
                                </Label>
                                <InputError message={errors.battery} />
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="charger"
                                    checked={data.charger}
                                    onCheckedChange={(checked) =>
                                        setData('charger', checked as boolean)
                                    }
                                />
                                <Label htmlFor="charger">
                                    Include Charger
                                </Label>
                                <InputError message={errors.charger} />
                            </div>
                        </div>

                        {/* Right Column - Action Buttons */}
                        <div className="space-y-6">
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
                                                ? 'Creating...'
                                                : 'Create Estimate'}
                                        </Button>
                                        <ActionButton
                                            IconNode={ArrowLeft}
                                            href={index.url()}
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
