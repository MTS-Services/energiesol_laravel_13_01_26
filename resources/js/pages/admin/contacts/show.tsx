import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { index } from '@/actions/App/Http/Controllers/Admin/ContactController';
import AdminLayout from '@/layouts/admin-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Contact } from '@/types/models';


interface Props {
  contact: Contact;
}

export default function ShowContact({ contact }: Props) {
  return (
    <AdminLayout activeSlug="admin-contacts">
      <Head title={`Contact: ${contact.first_name} ${contact.last_name}`} />

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Contact Details</CardTitle>
          <Link href={index.url()}>
            <Button variant="outline">Back to Contacts</Button>
          </Link>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-1">
            <span className="font-semibold">ID</span>
            <span>{contact.id}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">First Name</span>
            <span>{contact.first_name}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Last Name</span>
            <span>{contact.last_name}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Email</span>
            <span>{contact.email}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Phone Number</span>
            <span>{contact.phone_number || 'N/A'}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Created At</span>
            <span>{new Date(contact.created_at).toLocaleString()}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Updated At</span>
            <span>{new Date(contact.updated_at).toLocaleString()}</span>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
