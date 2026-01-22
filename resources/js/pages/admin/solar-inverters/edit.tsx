import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import { update, index, show } from '@/actions/App/Http/Controllers/Admin/SolarInverterController';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import InputError from '@/components/input-error';
import { SolarInverters } from '@/types/models';

interface Props {
  solarInverter: SolarInverters;
}

export default function EditSolarInverter({ solarInverter }: Props) {
  const { data, setData, post, processing, errors } = useForm({
    brand_title: solarInverter.brand_title || '',
    brand_logo: null as File | null,
    title: solarInverter.title || '',
    image: null as File | null,
    description: solarInverter.description || '',
    status: solarInverter.status,
    price: solarInverter.price || 0,
    note: solarInverter.note || '',
    charger_price: solarInverter.charger_price || 0,
    battery_price: solarInverter.battery_price || 0,
    charger_image: null as File | null,
    battery_image: null as File | null,
    _method: 'PUT',
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    post(update.url(solarInverter.id), {
      forceFormData: true,
    });
  }

  return (
    <AdminLayout>
      <Head title="Edit Solar Inverter" />

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Edit Solar Inverter</h1>
          <div className="flex gap-2">
            <Link href={show.url(solarInverter.id)}>
              <Button variant="outline">View Details</Button>
            </Link>
            <Link href={index.url()}>
              <Button variant="outline">Back to List</Button>
            </Link>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Solar Inverter Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-2">
                <Label htmlFor="brand_title">Brand Title</Label>
                <Input
                  id="brand_title"
                  value={data.brand_title}
                  onChange={(e) => setData('brand_title', e.target.value)}
                  required
                />
                <InputError message={errors.brand_title} />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="brand_logo">Brand Logo</Label>
                {solarInverter.brand_logo && (
                  <div className="mb-2">
                    <img
                      src={solarInverter.brand_logo}
                      alt="Current logo"
                      className="h-32 w-auto object-contain border rounded"
                    />
                    <p className="text-sm text-gray-500 mt-1">Current logo</p>
                  </div>
                )}
                <Input
                  id="brand_logo"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setData('brand_logo', e.target.files?.[0] || null)}
                />
                <p className="text-sm text-gray-500">Leave empty to keep current logo</p>
                <InputError message={errors.brand_logo} />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={data.title}
                  onChange={(e) => setData('title', e.target.value)}
                  required
                />
                <InputError message={errors.title} />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="image">Image</Label>
                {solarInverter.image && (
                  <div className="mb-2">
                    <img
                      src={solarInverter.image}
                      alt="Current image"
                      className="h-32 w-auto object-contain border rounded"
                    />
                    <p className="text-sm text-gray-500 mt-1">Current image</p>
                  </div>
                )}
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setData('image', e.target.files?.[0] || null)}
                />
                <p className="text-sm text-gray-500">Leave empty to keep current image</p>
                <InputError message={errors.image} />
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

              <div className="grid gap-2">
                <Label htmlFor="price">Price</Label>
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
                <Label htmlFor="note">Note</Label>
                <Textarea
                  id="note"
                  value={data.note}
                  onChange={(e) => setData('note', e.target.value)}
                  rows={3}
                />
                <InputError message={errors.note} />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="charger_price">Charger Price</Label>
                <Input
                  id="charger_price"
                  type="number"
                  step="0.01"
                  value={data.charger_price}
                  onChange={(e) => setData('charger_price', parseFloat(e.target.value) || 0)}
                  required
                />
                <InputError message={errors.charger_price} />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="battery_price">Battery Price</Label>
                <Input
                  id="battery_price"
                  type="number"
                  step="0.01"
                  value={data.battery_price}
                  onChange={(e) => setData('battery_price', parseFloat(e.target.value) || 0)}
                  required
                />
                <InputError message={errors.battery_price} />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="charger_image">Charger Image</Label>
                {solarInverter.charger_image && (
                  <div className="mb-2">
                    <img
                      src={solarInverter.charger_image}
                      alt="Current charger image"
                      className="h-32 w-auto object-contain border rounded"
                    />
                    <p className="text-sm text-gray-500 mt-1">Current charger image</p>
                  </div>
                )}
                <Input
                  id="charger_image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setData('charger_image', e.target.files?.[0] || null)}
                />
                <p className="text-sm text-gray-500">Leave empty to keep current image</p>
                <InputError message={errors.charger_image} />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="battery_image">Battery Image</Label>
                {solarInverter.battery_image && (
                  <div className="mb-2">
                    <img
                      src={solarInverter.battery_image}
                      alt="Current battery image"
                      className="h-32 w-auto object-contain border rounded"
                    />
                    <p className="text-sm text-gray-500 mt-1">Current battery image</p>
                  </div>
                )}
                <Input
                  id="battery_image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setData('battery_image', e.target.files?.[0] || null)}
                />
                <p className="text-sm text-gray-500">Leave empty to keep current image</p>
                <InputError message={errors.battery_image} />
              </div>

              <div className="grid gap-2">
                <Label>Status</Label>
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

              <div className="flex items-center gap-4 pt-4">
                <Button type="submit" disabled={processing}>
                  {processing ? 'Updating...' : 'Update Solar Inverter'}
                </Button>
                <Link href={show.url(solarInverter.id)}>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}