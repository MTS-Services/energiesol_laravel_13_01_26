import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { index, edit } from '@/actions/App/Http/Controllers/Admin/SolarPanelController';
import AdminLayout from '@/layouts/admin-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SolarPanels } from '@/types/models';


interface Props {
  solarPanel: SolarPanels;
}

export default function ShowSolarPanel({ solarPanel }: Props) {
  return (
    <AdminLayout activeSlug="solar-panels">
      <Head title={`Solar Panel: ${solarPanel.title}`} />

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Solar Panel Details</CardTitle>
          <Link href={index.url()}>
            <Button variant="outline">Back to Solar Panels</Button>
          </Link>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-1">
            <span className="font-semibold">ID</span>
            <span>{solarPanel.id}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Brand</span>
            <span>{solarPanel.brand_title}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Brand Logo</span>
            {solarPanel.brand_logo ? (
              <img 
                src={solarPanel.brand_logo} 
                alt={`${solarPanel.brand_title} logo`}
                className="h-24 w-24 object-contain border rounded p-2"
              />
            ) : (
              <span className="text-gray-400">No logo uploaded</span>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Title</span>
            <span>{solarPanel.title}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Image</span>
            {solarPanel.image ? (
              <img 
                src={solarPanel.image} 
                alt={solarPanel.title}
                className="max-w-md w-full h-auto object-contain border rounded"
              />
            ) : (
              <span className="text-gray-400">No image uploaded</span>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Description</span>
            <p className="text-gray-700 whitespace-pre-wrap">
              {solarPanel.description || 'No description provided'}
            </p>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Price</span>
            <span className="text-lg font-medium">
              ${solarPanel.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Note</span>
            <p className="text-gray-700 whitespace-pre-wrap">
              {solarPanel.note || 'No notes'}
            </p>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Status</span>
            <Badge variant={solarPanel.status ? 'default' : 'secondary'}>
              {solarPanel.status ? 'Active' : 'Inactive'}
            </Badge>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Created At</span>
            <span>{new Date(solarPanel.created_at).toLocaleString()}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Updated At</span>
            <span>{new Date(solarPanel.updated_at).toLocaleString()}</span>
          </div>

          <div className="flex gap-2 mt-6">
            <Link href={edit.url(solarPanel.id)}>
              <Button>Edit</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}