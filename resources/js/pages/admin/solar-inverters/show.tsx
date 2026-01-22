import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { index, edit } from '@/actions/App/Http/Controllers/Admin/SolarInverterController';
import AdminLayout from '@/layouts/admin-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SolarInverters } from '@/types/models';


interface Props {
  solarInverter: SolarInverters;
}

export default function ShowSolarInverter({ solarInverter }: Props) {
  return (
    <AdminLayout activeSlug="solar-inverters">
      <Head title={`Solar Inverter: ${solarInverter.title}`} />

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Solar Inverter Details</CardTitle>
          <Link href={index.url()}>
            <Button variant="outline">Back to Solar Inverters</Button>
          </Link>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-1">
            <span className="font-semibold">ID</span>
            <span>{solarInverter.id}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Brand</span>
            <span>{solarInverter.brand_title}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Brand Logo</span>
            {solarInverter.brand_logo ? (
              <img 
                src={solarInverter.brand_logo} 
                alt={`${solarInverter.brand_title} logo`}
                className="h-24 w-24 object-contain border rounded p-2"
              />
            ) : (
              <span className="text-gray-400">No logo uploaded</span>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Title</span>
            <span>{solarInverter.title}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Image</span>
            {solarInverter.image ? (
              <img 
                src={solarInverter.image} 
                alt={solarInverter.title}
                className="max-w-md w-full h-auto object-contain border rounded"
              />
            ) : (
              <span className="text-gray-400">No image uploaded</span>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Description</span>
            <p className="text-gray-700 whitespace-pre-wrap">
              {solarInverter.description || 'No description provided'}
            </p>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Price</span>
            <span className="text-lg font-medium">
              ${solarInverter.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Note</span>
            <p className="text-gray-700 whitespace-pre-wrap">
              {solarInverter.note || 'No notes'}
            </p>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Charger Price</span>
            <span className="text-lg font-medium">
              ${solarInverter.charger_price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Battery Price</span>
            <span className="text-lg font-medium">
              ${solarInverter.battery_price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Charger Image</span>
            {solarInverter.charger_image ? (
              <img 
                src={solarInverter.charger_image} 
                alt={`${solarInverter.title} charger image`}
                className="max-w-md w-full h-auto object-contain border rounded"
              />
            ) : (
              <span className="text-gray-400">No charger image uploaded</span>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Battery Image</span>
            {solarInverter.battery_image ? (
              <img 
                src={solarInverter.battery_image} 
                alt={`${solarInverter.title} battery image`}
                className="max-w-md w-full h-auto object-contain border rounded"
              />
            ) : (
              <span className="text-gray-400">No battery image uploaded</span>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Status</span>
            <Badge variant={solarInverter.status ? 'default' : 'secondary'}>
              {solarInverter.status ? 'Active' : 'Inactive'}
            </Badge>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Created At</span>
            <span>{new Date(solarInverter.created_at).toLocaleString()}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Updated At</span>
            <span>{new Date(solarInverter.updated_at).toLocaleString()}</span>
          </div>

          <div className="flex gap-2 mt-6">
            <Link href={edit.url(solarInverter.id)}>
              <Button>Edit</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
