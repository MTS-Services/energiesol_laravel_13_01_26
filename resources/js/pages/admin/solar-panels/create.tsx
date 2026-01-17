import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import { store, index } from '@/actions/App/Http/Controllers/Admin/SolarPanelController';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import InputError from '@/components/input-error';

export default function CreateSolarPanel() {
  const { data, setData, post, processing, errors } = useForm({
    brand_title: '',
    brand_logo: null as File | null,
    title: '',
    image: null as File | null,
    description: '',
    status: true,
    price: 0,
    note: '',
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    post(store.url(), {
      forceFormData: true, // Important for file uploads
    });
  }

  return (
    <AdminLayout activeSlug="solar-panels">
      <Head title="Create Solar Panel" />

      <Card>
        <CardHeader>
          <CardTitle>Create New Solar Panel</CardTitle>
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
                {processing ? 'Creating...' : 'Create Solar Panel'}
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