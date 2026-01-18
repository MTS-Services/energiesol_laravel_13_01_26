import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { index, edit } from '@/actions/App/Http/Controllers/Admin/ValueController';
import AdminLayout from '@/layouts/admin-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Values } from '@/types/models';


interface Props {
  value: Values;
}

export default function ShowValue({ value }: Props) {
  return (
    <AdminLayout activeSlug="values">
      <Head title={`Value: ${value.title}`} />

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Value Details</CardTitle>
          <Link href={index.url()}>
            <Button variant="outline">Back to Values</Button>
          </Link>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-1">
            <span className="font-semibold">ID</span>
            <span>{value.id}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Title</span>
            <span>{value.title}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Image</span>
            {value.image ? (
              <img 
                src={value.image} 
                alt={value.title}
                className="max-w-md w-full h-auto object-contain border rounded"
              />
            ) : (
              <span className="text-gray-400">No image uploaded</span>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Description</span>
            <p className="text-gray-700 whitespace-pre-wrap">
              {value.description || 'No description provided'}
            </p>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Action Text</span>
            <span>{value.action_text || 'N/A'}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Action URL</span>
            <span>{value.action_url || 'N/A'}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Created At</span>
            <span>{new Date(value.created_at).toLocaleString()}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Updated At</span>
            <span>{new Date(value.updated_at).toLocaleString()}</span>
          </div>

          <div className="flex gap-2 mt-6">
            <Link href={edit.url(value.id)}>
              <Button>Edit</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}