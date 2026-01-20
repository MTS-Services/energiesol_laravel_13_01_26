import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import { update } from '@/actions/App/Http/Controllers/Admin/MonitoringSystemController';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import InputError from '@/components/input-error';
import { MonitoringSystem } from '@/types/models';


interface Props {
  monitoringSystem: MonitoringSystem;
}

export default function EditMonitoringSystem({ monitoringSystem }: Props) {
  const { data, setData, post, processing, errors } = useForm({
    title: monitoringSystem.title || '',
    sub_title: monitoringSystem.sub_title || '',
    description: monitoringSystem.description || '',
    image: null as File | null,
    _method: 'PUT',
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    post(update.url(), {
      forceFormData: true,
    });
  }

  return (
    <AdminLayout activeSlug="admin-monitoring-system-edit">
      <Head title={`Edit: ${monitoringSystem.title}`} />

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Edit Monitoring System</CardTitle>
          <div className="flex gap-2">
            <Link href={update.url()}>
              <Button variant="outline">
                Cancel
              </Button>
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
              {monitoringSystem.image && (
                <div className="mb-2">
                  <img 
                    src={monitoringSystem.image} 
                    alt="Current image" 
                    className="h-32 w-auto object-contain border rounded"
                  />
                  <p className="text-sm text-gray-500 mt-1">Current Image</p>
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

            <div className="flex items-center gap-4 pt-4">
              <Button type="submit" disabled={processing}>
                {processing ? 'Updating...' : 'Update Monitoring System'}
              </Button>
              <Link href={update.url()}>
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
