import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { index, edit } from '@/actions/App/Http/Controllers/Admin/AdvantageController';
import AdminLayout from '@/layouts/admin-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Advantage } from '@/types/models';


interface Props {
  advantage: Advantage;
}

export default function ShowAdvantage({ advantage }: Props) {
  return (
    <AdminLayout activeSlug="admin-advantages">
      <Head title={`Advantage: ${advantage.title}`} />

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Advantage Details</CardTitle>
          <Link href={index.url()}>
            <Button variant="outline">Back to Advantages</Button>
          </Link>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-1">
            <span className="font-semibold">ID</span>
            <span>{advantage.id}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Title</span>
            <span>{advantage.title}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Description</span>
            <p className="text-gray-700 whitespace-pre-wrap">
              {advantage.description || 'No description provided'}
            </p>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Icon</span>
            <span>{advantage.icon || 'No icon provided'}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Created At</span>
            <span>{new Date(advantage.created_at).toLocaleString()}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Updated At</span>
            <span>{new Date(advantage.updated_at).toLocaleString()}</span>
          </div>

          <div className="flex gap-2 mt-6">
            <Link href={edit.url(advantage.id)}>
              <Button>Edit</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
