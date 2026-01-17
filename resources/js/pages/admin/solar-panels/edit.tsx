import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import { update, index, show } from '@/actions/App/Http/Controllers/Admin/SolarPanelController';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import InputError from '@/components/input-error';
import { SolarPanels } from '@/types/models';


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
    <AdminLayout activeSlug="solar-panels">
      <Head title={`Edit: ${solarPanel.title}`} />

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Edit Solar Panel</CardTitle>
          <div className="flex gap-2">
            <Link href={show.url(solarPanel.id)}>
              <Button variant="outline">View Details</Button>
            </Link>
            <Link href={index.url()}>
              <Button variant="outline">Back to List</Button>
            </Link>
          </div>
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
              {solarPanel.brand_logo && (
                <div className="mb-2">
                  <img 
                    src={solarPanel.brand_logo} 
                    alt="Current brand logo" 
                    className="h-20 w-20 object-contain border rounded"
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
                type="text"
                value={data.title}
                onChange={(e) => setData('title', e.target.value)}
                required
              />
              <InputError message={errors.title} />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="image">Image</Label>
              {solarPanel.image && (
                <div className="mb-2">
                  <img 
                    src={solarPanel.image} 
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
                {processing ? 'Updating...' : 'Update Solar Panel'}
              </Button>
              <Link href={show.url(solarPanel.id)}>
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