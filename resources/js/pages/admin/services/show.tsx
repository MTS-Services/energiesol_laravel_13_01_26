import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { index, edit } from '@/actions/App/Http/Controllers/Admin/ServiceController';
import AdminLayout from '@/layouts/admin-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Service } from '@/types/models';


interface Props {
  service: Service;
}

export default function ShowService({ service }: Props) {
  return (
    <AdminLayout activeSlug="admin/services/index">
      <Head title={`Service: ${service.title}`} />

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Service Details</CardTitle>
          <Link href={index.url()}>
            <Button variant="outline">Back to Services</Button>
          </Link>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-1">
            <span className="font-semibold">ID</span>
            <span>{service.id}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Title</span>
            <span>{service.title}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Sub Title</span>
            <span>{service.sub_title}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Image</span>
            {service.image ? (
              <img
                src={`/storage/${service.image}`}
                alt={service.title}
                className="max-w-md w-full h-auto object-contain border rounded"
              />
            ) : (
              <span className="text-gray-400">No image uploaded</span>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Description</span>
            <p className="text-gray-700 whitespace-pre-wrap">
              {service.description || 'No description provided'}
            </p>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Created At</span>
            <span>{new Date(service.created_at).toLocaleString()}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Updated At</span>
            <span>{new Date(service.updated_at).toLocaleString()}</span>
          </div>

          <div className="flex gap-2 mt-6">
            <Link href={edit.url(service.id)}>
              <Button>Edit</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
