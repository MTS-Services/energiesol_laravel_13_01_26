import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import { update } from '@/actions/App/Http/Controllers/Admin/SystemSettingController';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import InputError from '@/components/input-error';
import { SystemSetting } from '@/types/models';
import { Save } from 'lucide-react';

interface Props {
  systemSetting: SystemSetting;
}

export default function EditSystemSetting({ systemSetting }: Props) {
  const { data, setData, post, processing, errors } = useForm({
    vat: systemSetting.vat || '',
    discount: systemSetting.discount || '',
    module_unit_in_meter: systemSetting.module_unit_in_meter || '',
    _method: 'PUT',
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    post(update.url());
  }

   return (
        <AdminLayout activeSlug="admin-system-settings">
            <Head title="Edit System Settings" />

            <CardHeader>
                <h1 className="text-2xl font-bold">Manage System Settings</h1>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <div className="space-y-6 lg:col-span-2">
                            <div className="grid gap-2">
                                <Label htmlFor="vat">VAT (%)</Label>
                                <Input
                                    id="vat"
                                    type="number"
                                    value={data.vat}
                                    onChange={(e) =>
                                        setData('vat', e.target.value)
                                    }
                                    required
                                />
                                <InputError message={errors.vat} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="discount">Discount (%)</Label>
                                <Input
                                    id="discount"
                                    type="number"
                                    value={data.discount}
                                    onChange={(e) =>
                                        setData('discount', e.target.value)
                                    }
                                    required
                                />
                                <InputError message={errors.discount} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="module_unit_in_meter">Module Unit (in meter)</Label>
                                <Input
                                    id="module_unit_in_meter"
                                    type="number"
                                    value={data.module_unit_in_meter}
                                    onChange={(e) =>
                                        setData('module_unit_in_meter', e.target.value)
                                    }
                                />
                                <InputError message={errors.module_unit_in_meter} />
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
                                                systemSetting.created_at,
                                            ).toLocaleDateString()}
                                        </p>
                                    </div>

                                    <div>
                                        <Label className="text-sm text-muted-foreground">
                                            Updated At
                                        </Label>
                                        <p className="mt-1 text-sm font-medium">
                                            {systemSetting.updated_at
                                                ? new Date(
                                                      systemSetting.updated_at,
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
                                            className="flex h-auto w-full items-center justify-center bg-secondary px-6 py-3! hover:bg-secondary/80"
                                        >
                                            <Save className="mr-2 h-4 w-4" />
                                            {processing
                                                ? 'Updating...'
                                                : 'Update Settings'}
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
