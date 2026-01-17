import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import { update, index, show } from '@/actions/App/Http/Controllers/Admin/PartnerController';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import InputError from '@/components/input-error';
import { Partner } from '@/types/models'; // Assuming a Partner type exists


interface Props {
  partner: Partner;
}

export default function EditPartner({ partner }: Props) {
  const { data, setData, post, processing, errors } = useForm({
    name: partner.name || '',
    image: null as File | null, // File input for new image
    _method: 'PUT',
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    post(update.url(partner.id), {
      forceFormData: true,
    });
  }

  return (
    <AdminLayout activeSlug="admin-partners">
      <Head title={`Edit: ${partner.name}`} />

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Edit Partner</CardTitle>
          <div className="flex gap-2">
            <Link href={show.url(partner.id)}>
              <Button variant="outline">View Details</Button>
            </Link>
            <Link href={index.url()}>
              <Button variant="outline">Back to List</Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Partner Name</Label>
              <Input
                id="name"
                type="text"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
                required
              />
              <InputError message={errors.name} />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="image">Partner Image</Label>
              {partner.image && (
                <div className="mb-2">
                  <img
                    src={`/storage/${partner.image}`} // Assuming image is stored in storage and accessible via /storage route
                    alt="Current partner image"
                    className="h-20 w-auto object-contain border rounded"
                  />
                  <p className="text-sm text-gray-500 mt-1">Current image</p>
                </div>
              )}
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={(e) => setData('image', e.target.files?.[0] || null)}
              />
              <p className="text-sm text-gray-500">Leave empty to keep current image</p>
              <InputError message={errors.image} />
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Button type="submit" disabled={processing}>
                {processing ? 'Updating...' : 'Update Partner'}
              </Button>
              <Link href={show.url(partner.id)}>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}