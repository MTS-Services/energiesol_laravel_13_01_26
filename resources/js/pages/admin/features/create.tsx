import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import { store, index } from '@/actions/App/Http/Controllers/Admin/FeatureController';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import InputError from '@/components/input-error';

export default function CreateFeature() {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    description: '',
    image: null as File | null,
    action_text: '',
    action_url: '',
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    post(store.url(), {
      forceFormData: true, // Important for file uploads
    });
  }

  return (
    <AdminLayout activeSlug="features">
      <Head title="Create Feature" />

      <Card>
        <CardHeader>
          <CardTitle>Create New Feature</CardTitle>
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
              <Label htmlFor="action_text">Action Text</Label>
              <Input
                id="action_text"
                type="text"
                value={data.action_text}
                onChange={(e) => setData('action_text', e.target.value)}
              />
              <InputError message={errors.action_text} />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="action_url">Action URL</Label>
              <Input
                id="action_url"
                type="text"
                value={data.action_url}
                onChange={(e) => setData('action_url', e.target.value)}
              />
              <InputError message={errors.action_url} />
            </div>

            <div className="flex items-center gap-4">
              <Button type="submit" disabled={processing}>
                {processing ? 'Creating...' : 'Create Feature'}
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
