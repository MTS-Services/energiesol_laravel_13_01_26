import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import { store, index } from '@/actions/App/Http/Controllers/Admin/ServiceController';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import InputError from '@/components/input-error';

export default function CreateService() {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    sub_title: '',
    image: null as File | null,
    description: '',
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    post(store.url(), {
      forceFormData: true, // Important for file uploads
    });
  }

  return (
    <AdminLayout activeSlug="admin/services/create">
      <Head title="Create Service" />

      <Card>
        <CardHeader>
          <CardTitle>Create New Service</CardTitle>
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
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={(e) => setData('image', e.target.files?.[0] || null)}
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
                required
              />
              <InputError message={errors.description} />
            </div>

            <div className="flex items-center gap-4">
              <Button type="submit" disabled={processing}>
                {processing ? 'Creating...' : 'Create Service'}
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
