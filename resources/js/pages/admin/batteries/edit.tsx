import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import { update } from '@/actions/App/Http/Controllers/Admin/BatteryController';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import InputError from '@/components/input-error';
import { BatteryWithChargers } from '@/types/models';


interface Props {
  battery: BatteryWithChargers;
}

export default function EditBattery({ battery }: Props) {
  const { data, setData, post, processing, errors } = useForm({
    yes_image: null as File | null,
    no_image: null as File | null,
    _method: 'PUT',
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    post(update.url(), { // Removed battery.id
      forceFormData: true,
    });
  }

  return (
    <AdminLayout activeSlug="admin-batteries-edit"> {/* Updated activeSlug */}
      <Head title={`Edit: ${battery.type}`} />

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Edit Battery</CardTitle>
          <div className="flex gap-2">
            <Link href={update.url()}> {/* Changed to go back to edit page */}
              <Button variant="outline">
                Cancel
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="yes_image">Yes Image</Label>
              {battery.yes_image && (
                <div className="mb-2">
                  <img 
                    src={battery.yes_image} 
                    alt="Current yes image" 
                    className="h-32 w-auto object-contain border rounded"
                  />
                  <p className="text-sm text-gray-500 mt-1">Current Yes Image</p>
                </div>
              )}
              <Input
                id="yes_image"
                type="file"
                accept="image/*"
                onChange={(e) => setData('yes_image', e.target.files?.[0] || null)}
              />
              <p className="text-sm text-gray-500">Leave empty to keep current image</p>
              <InputError message={errors.yes_image} />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="no_image">No Image</Label>
              {battery.no_image && (
                <div className="mb-2">
                  <img 
                    src={battery.no_image} 
                    alt="Current no image" 
                    className="h-32 w-auto object-contain border rounded"
                  />
                  <p className="text-sm text-gray-500 mt-1">Current No Image</p>
                </div>
              )}
              <Input
                id="no_image"
                type="file"
                accept="image/*"
                onChange={(e) => setData('no_image', e.target.files?.[0] || null)}
              />
              <p className="text-sm text-gray-500">Leave empty to keep current image</p>
              <InputError message={errors.no_image} />
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Button type="submit" disabled={processing}>
                {processing ? 'Updating...' : 'Update Battery'}
              </Button>
              <Link href={update.url()}> {/* Changed to go back to edit page */}
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
