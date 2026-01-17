import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { index, edit } from '@/actions/App/Http/Controllers/Admin/PartnerController';
import AdminLayout from '@/layouts/admin-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Partner } from '@/types/models'; // Assuming a Partner type exists


interface Props {
  partner: Partner;
}

export default function ShowPartner({ partner }: Props) {
  return (
    <AdminLayout activeSlug="admin-partners">
      <Head title={`Partner: ${partner.name}`} />

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Partner Details</CardTitle>
          <Link href={index.url()}>
            <Button variant="outline">Back to Partners</Button>
          </Link>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-1">
            <span className="font-semibold">ID</span>
            <span>{partner.id}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Name</span>
            <span>{partner.name}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Image</span>
            {partner.image ? (
              <img
                src={`/storage/${partner.image}`} // Assuming image is stored in storage and accessible via /storage route
                alt={`${partner.name} image`}
                className="h-24 w-auto object-contain border rounded p-2"
              />
            ) : (
              <span className="text-gray-400">No image uploaded</span>
            )}
          </div>


          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Created At</span>
            <span>{new Date(partner.created_at).toLocaleString()}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Updated At</span>
            <span>{new Date(partner.updated_at).toLocaleString()}</span>
          </div>

          <div className="flex gap-2 mt-6">
            <Link href={edit.url(partner.id)}>
              <Button>Edit</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}