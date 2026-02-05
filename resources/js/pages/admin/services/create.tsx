import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import { store, index } from '@/actions/App/Http/Controllers/Admin/ServiceController';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import InputError from '@/components/input-error';
import FileUpload from '@/components/file-upload';
import { ActionButton } from '@/components/ui/action-button';
import { ArrowLeft, Save } from 'lucide-react';

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
      
      <CardHeader className="flex flex-row items-center justify-between">
        <h1 className="text-2xl font-bold">Create New Service</h1>
        <div className="flex gap-2">
          <ActionButton IconNode={ArrowLeft} href={index.url()}>
            Back to List
          </ActionButton>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Left Column - Main Information */}
            <div className="space-y-6 lg:col-span-2">
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
                  required
                />
                <InputError message={errors.description} />
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Service Image
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <FileUpload
                      value={data.image}
                      onChange={(file) => setData('image', file as File)}
                      multiple={false}
                      accept="image/*"
                    />
                    <InputError message={errors.image} />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Action Buttons */}
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-row justify-between gap-3">
                    <Button
                      type="submit"
                      disabled={processing}
                      className="flex h-auto w-full items-center justify-center bg-secondary px-6 py-0! hover:bg-secondary/80"
                    >
                      <Save className="mr-2 h-4 w-4" />
                      {processing ? 'Creating...' : 'Create Service'}
                    </Button>
                    <ActionButton
                      IconNode={ArrowLeft}
                      href={index.url()}
                    >
                      Cancel
                    </ActionButton>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </CardContent>
    </AdminLayout>
  );
}