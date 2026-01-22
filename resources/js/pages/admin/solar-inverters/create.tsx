import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import { store, index } from '@/actions/App/Http/Controllers/Admin/SolarInverterController';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import InputError from '@/components/input-error';

export default function CreateSolarInverter() {
  const { data, setData, post, processing, errors } = useForm({
    brand_title: '',
    brand_logo: null as File | null,
    title: '',
    image: null as File | null,
    description: '',
    status: true,
    price: 0,
    note: '',
    charger_price: 0,
    battery_price: 0,
    charger_image: null as File | null,
    battery_image: null as File | null,
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    post(store.url(), {
      forceFormData: true, // Important for file uploads
    });
  }

  return (
    <AdminLayout activeSlug="solar-inverters">
      <Head title="Create Solar Inverter" />

      <Card>
        <CardHeader>
          <CardTitle>Create New Solar Inverter</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
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
              <Label htmlFor="brand_logo">Brand Logo</Label>
              <Input
                id="brand_logo"
                type="file"
                accept="image/*"
                onChange={(e) => setData('brand_logo', e.target.files?.[0] || null)}
                required
              />
              <InputError message={errors.brand_logo} />
            </div>

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
              <Label htmlFor="image">Image</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={(e) => setData('image', e.target.files?.[0] || null)}
                required
              />
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
              <Input
                id="charger_image"
                type="file"
                accept="image/*"
                onChange={(e) => setData('charger_image', e.target.files?.[0] || null)}
              />
              <InputError message={errors.charger_image} />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="battery_image">Battery Image</Label>
              <Input
                id="battery_image"
                type="file"
                accept="image/*"
                onChange={(e) => setData('battery_image', e.target.files?.[0] || null)}
              />
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

            <div className="flex items-center gap-4">
              <Button type="submit" disabled={processing}>
                {processing ? 'Creating...' : 'Create Solar Inverter'}
              </Button>
              <Link href={index.url()}>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
