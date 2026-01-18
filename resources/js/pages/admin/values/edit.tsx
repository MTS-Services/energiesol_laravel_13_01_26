import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import { update, index, show } from '@/actions/App/Http/Controllers/Admin/ValueController';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import InputError from '@/components/input-error';
import { Values } from '@/types/models';


interface Props {
  value: Values;
}

export default function EditValue({ value }: Props) {
  const { data, setData, post, processing, errors } = useForm({
    title: value.title || '',
    description: value.description || '',
    image: null as File | null,
    action_text: value.action_text || '',
    action_url: value.action_url || '',
    _method: 'PUT',
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    post(update.url(value.id), {
      forceFormData: true,
    });
  }

  return (
    <AdminLayout activeSlug="values">
      <Head title={`Edit: ${value.title}`} />

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Edit Value</CardTitle>
          <div className="flex gap-2">
            <Link href={show.url(value.id)}>
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
              <Label htmlFor="image">Image</Label>
              {value.image && (
                <div className="mb-2">
                  <img 
                    src={value.image} 
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


            <div className="flex items-center gap-4 pt-4">
              <Button type="submit" disabled={processing}>
                {processing ? 'Updating...' : 'Update Value'}
              </Button>
              <Link href={show.url(value.id)}>
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