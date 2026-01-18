import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { index } from '@/actions/App/Http/Controllers/Admin/InquiryController';
import AdminLayout from '@/layouts/admin-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Inquiry } from '@/types/models';
import { Badge } from '@/components/ui/badge';


interface Props {
  inquiry: Inquiry;
}

export default function ShowInquiry({ inquiry }: Props) {
  return (
    <AdminLayout activeSlug="admin-inquiries">
      <Head title={`Inquiry: ${inquiry.first_name} ${inquiry.last_name}`} />

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Inquiry Details</CardTitle>
          <Link href={index.url()}>
            <Button variant="outline">Back to Inquiries</Button>
          </Link>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-1">
            <span className="font-semibold">ID</span>
            <span>{inquiry.id}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">First Name</span>
            <span>{inquiry.first_name}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Last Name</span>
            <span>{inquiry.last_name}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Email</span>
            <span>{inquiry.email}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Phone Number</span>
            <span>{inquiry.phone_number || 'N/A'}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Area</span>
            <span>{inquiry.area}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Solar Panel</span>
            <span>{inquiry.solar_panel?.title || 'N/A'}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Solar Inverter</span>
            <span>{inquiry.solar_inverter?.title || 'N/A'}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Has Battery</span>
            <Badge variant={inquiry.has_battery ? 'default' : 'secondary'}>
              {inquiry.has_battery ? 'Yes' : 'No'}
            </Badge>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Has Charger</span>
            <Badge variant={inquiry.has_charger ? 'default' : 'secondary'}>
              {inquiry.has_charger ? 'Yes' : 'No'}
            </Badge>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Status</span>
            <Badge variant={inquiry.status ? 'default' : 'secondary'}>
              {inquiry.status ? 'Completed' : 'Pending'}
            </Badge>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Created At</span>
            <span>{new Date(inquiry.created_at).toLocaleString()}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Updated At</span>
            <span>{new Date(inquiry.updated_at).toLocaleString()}</span>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
