import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { index, edit } from '@/actions/App/Http/Controllers/Admin/UserController';
import AdminLayout from '@/layouts/admin-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User } from '@/types/user';

interface Props {
  user: User;
}

export default function ShowUser({ user }: Props) {
  return (
    <AdminLayout activeSlug="admin-users">
      <Head title={`User: ${user.name}`} />

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>User Details</CardTitle>
          <Link href={index.url()}>
            <Button variant="outline">Back to Users</Button>
          </Link>
        </CardHeader>

        {/* Grid layout: 1 column on mobile, 2 on desktop */}
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column */}
          <div className="space-y-4">
            <div>
              <span className="font-semibold">ID</span>
              <p>{user.id}</p>
            </div>
            <div>
              <span className="font-semibold">Name</span>
              <p>{user.name}</p>
            </div>
            <div>
              <span className="font-semibold">Email</span>
              <p>{user.email}</p>
            </div>
            <div>
              <span className="font-semibold">Is Admin</span>
              <Badge variant={user.is_admin ? 'default' : 'secondary'}>
                {user.is_admin ? 'Yes' : 'No'}
              </Badge>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            <div>
              <span className="font-semibold">Created At</span>
              <p>{new Date(user.created_at).toLocaleString()}</p>
            </div>
            <div>
              <span className="font-semibold">Updated At</span>
              <p>{new Date(user.updated_at).toLocaleString()}</p>
            </div>
          </div>

          {/* Actions row spanning both columns */}
          <div className="col-span-1 md:col-span-2 flex gap-2 mt-6">
            <Link href={edit.url(user.id)}>
              <Button>Edit</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
