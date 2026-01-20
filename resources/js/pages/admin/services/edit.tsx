import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import { update, index, show } from '@/actions/App/Http/Controllers/Admin/ServiceController';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import InputError from '@/components/input-error';
import { Service } from '@/types/models';
import { Checkbox } from '@/components/ui/checkbox';


interface Props {
  service: Service;
}

export default function EditService({ service }: Props) {
  const { data, setData, post, processing, errors } = useForm({
    title: service.title || '',
    sub_title: service.sub_title || '',
    image: null as File | null,
    description: service.description || '',
    remove_image: false, // New field to handle image removal
    _method: 'PUT',
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    post(update.url(service.id), {
      forceFormData: true,
    });
  }

  return (
    <AdminLayout activeSlug="admin/services/index">
      <Head title={`Edit: ${service.title}`} />

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Edit Service</CardTitle>
          <div className="flex gap-2">
            <Link href={show.url(service.id)}>
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
              <Label htmlFor="sub_title">Sub Title</Label>
              <Input
                id="sub_title"
                type="text"
                value={data.sub_title}
                onChange={(e) => setData('sub_title', e.target.value)}
                required
              />
              <InputError message={errors.sub_title} />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="image">Image</Label>
              {service.image && !data.remove_image && (
                <div className="mb-2">
                  <img
                    src={`/storage/${service.image}`}
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
                onChange={(e) => {
                    setData('image', e.target.files?.[0] || null);
                    if (e.target.files?.[0]) {
                        setData('remove_image', false);
                    }
                }}
              />
              <p className="text-sm text-gray-500">Leave empty to keep current image</p>
              <InputError message={errors.image} />

              {service.image && (
                <div className="flex items-center space-x-2 mt-2">
                  <Checkbox
                    id="remove_image"
                    checked={data.remove_image}
                    onCheckedChange={(checked) => setData('remove_image', checked)}
                  />
                  <label
                    htmlFor="remove_image"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remove current image
                  </label>
                </div>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={data.description}
                onChange={(e) => setData('description', e.target.value)}
                rows={4}
                required
              />
              <InputError message={errors.description} />
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Button type="submit" disabled={processing}>
                {processing ? 'Updating...' : 'Update Service'}
              </Button>
              <Link href={show.url(service.id)}>
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
