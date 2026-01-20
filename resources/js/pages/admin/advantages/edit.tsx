import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import { update, index, show } from '@/actions/App/Http/Controllers/Admin/AdvantageController';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import InputError from '@/components/input-error';
import { Advantage } from '@/types/models';


interface Props {
  advantage: Advantage;
}

export default function EditAdvantage({ advantage }: Props) {
  const { data, setData, post, processing, errors } = useForm({
    title: advantage.title || '',
    description: advantage.description || '',
    icon: null as File | null, // Change to File | null for file input
    _method: 'PUT',
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    post(update.url(advantage.id), {
      forceFormData: true, // Important for file uploads
    });
  }

  return (
    <AdminLayout activeSlug="admin-advantages">
      <Head title={`Edit: ${advantage.title}`} />

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Edit Advantage</CardTitle>
          <div className="flex gap-2">
            <Link href={show.url(advantage.id)}>
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
              <Label htmlFor="icon">Icon</Label>
              {advantage.icon && (
                <div className="mb-2">
                  <img
                    src={`/storage/${advantage.icon}`} // Assuming icon is stored in public/storage
                    alt="Current icon"
                    className="h-20 w-20 object-contain border rounded"
                  />
                  <p className="text-sm text-gray-500 mt-1">Current icon</p>
                </div>
              )}
              <Input
                id="icon"
                type="file"
                accept="image/*"
                onChange={(e) => setData('icon', e.target.files?.[0] || null)}
              />
              <p className="text-sm text-gray-500">Leave empty to keep current icon</p>
              <InputError message={errors.icon} />
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Button type="submit" disabled={processing}>
                {processing ? 'Updating...' : 'Update Advantage'}
              </Button>
              <Link href={show.url(advantage.id)}>
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
