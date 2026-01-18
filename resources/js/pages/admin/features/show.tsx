import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Features } from '@/types/models';
import { index, edit } from '@/actions/App/Http/Controllers/Admin/FeatureController'; // Import edit action
import { Pencil } from 'lucide-react'; // Import Pencil icon

interface Props {
  feature: Features;
}

export default function ShowFeature({ feature }: Props) {
  return (
    <AdminLayout activeSlug="features">
      <Head title={`View ${feature.title}`} />

      <div className="flex justify-end items-center mb-6"> {/* Container for top buttons */}
        <Link href={index.url()}>
          <Button type="button" variant="outline">
            Back to Features
          </Button>
        </Link>
       
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Feature Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Title:</h3>
              <p>{feature.title}</p>
            </div>
            <div>
              <h3 className="font-semibold">Description:</h3>
              <p>{feature.description}</p>
            </div>
            {feature.image && (
              <div>
                <h3 className="font-semibold">Image:</h3>
                <img src={`/storage/${feature.image}`} alt={feature.title} className="max-w-xs h-auto" />
              </div>
            )}
            <div>
              <h3 className="font-semibold">Action Text:</h3>
              <p>{feature.action_text}</p>
            </div>
            <div>
              <h3 className="font-semibold">Action URL:</h3>
              <p>{feature.action_url}</p>
            </div>
            <div>
              <h3 className="font-semibold">Created At:</h3>
              <p>{new Date(feature.created_at).toLocaleDateString()}</p>
            </div>
            <div>
              <h3 className="font-semibold">Updated At:</h3>
              <p>{new Date(feature.updated_at).toLocaleDateString()}</p>
            </div>
            
           <div className="flex gap-2 mt-2">
              <Link href={edit.url(feature.id)} >
                <Button>
                  Edit
                </Button>
            </Link>
           </div>
          </div>
          

        </CardContent>
      </Card>
    </AdminLayout>
  );
}
