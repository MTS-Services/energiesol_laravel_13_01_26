import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import { store, index } from '@/actions/App/Http/Controllers/Admin/PartnerController';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import InputError from '@/components/input-error';
import { ActionButton } from '@/components/ui/action-button';
import { ArrowLeft, PencilOff, Save } from 'lucide-react';
import FileUpload from '@/components/file-upload';

export default function CreatePartner() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    image : null as File | null,
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    post(store.url(), {
      forceFormData: true, // Important for file uploads
    });
  }

  return (
    // <AdminLayout activeSlug="admin-partners">
    //   <Head title="Create Partner" />

    //   <Card>
    //     <CardHeader>
    //       <CardTitle>Create New Partner</CardTitle>
    //     </CardHeader>
    //     <CardContent>
    //       <form onSubmit={handleSubmit} className="space-y-6">
    //         <div className="grid gap-2">
    //           <Label htmlFor="name">Partner Name</Label>
    //           <Input
    //             id="name"
    //             type="text"
    //             value={data.name}
    //             onChange={(e) => setData('name', e.target.value)}
    //             required
    //           />
    //           <InputError message={errors.name} />
    //         </div>

    //         <div className="grid gap-2">
    //           <Label htmlFor="image">Partner Image</Label>
    //           <Input
    //             id="image"
    //             type="file"
    //             accept="image/*"
    //             onChange={(e) => setData('image', e.target.files?.[0] || null)}
    //           />
    //           <InputError message={errors.image} />
    //         </div>

    //         <div className="flex items-center gap-4">
    //           <Button type="submit" disabled={processing}>
    //             {processing ? 'Creating...' : 'Create Partner'}
    //           </Button>
    //           <Link href={index.url()}>
    //             <Button type="button" variant="outline">
    //               Cancel
    //             </Button>
    //           </Link>
    //         </div>
    //       </form>
    //     </CardContent>
    //   </Card>
    // </AdminLayout>

     <AdminLayout activeSlug="admin-solar-panels">
            <Head title="Create Partner" />

            <CardHeader className="flex flex-row items-center justify-between">
                <h1 className="text-2xl font-bold">Create Solar Panel</h1>
                <div className="flex gap-2">
                    <ActionButton IconNode={ArrowLeft} href={index.url()}>
                        Back to List
                    </ActionButton>
                </div>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {/* Left Column - Main Information */}
                        <div className="space-y-6 lg:col-span-2">
                            <div className="grid gap-2">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    type="text"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    required
                                />
                                <InputError message={errors.name} />
                            </div>
                            

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                       Partner Logo|Image
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <FileUpload
                                            value={data.image}
                                            onChange={(file) =>
                                                setData('image', file as File)
                                            }
                                            multiple={false}
                                            accept="image/*"
                                        />
                                        <InputError message={errors.image} />
                                    </div>
                                </CardContent>
                            </Card>

                        </div>

                        {/* Right Column - Settings & Meta Information */}
                        <div className="space-y-6">

                            {/* Action Buttons */}
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex flex-row justify-between gap-3">
                                        <Button
                                            type="submit"
                                            disabled={processing}
                                            className="flex h-auto w-full items-center justify-center bg-secondary px-6 py-0! hover:bg-secondary/80"
                                        >
                                            <Save className="mr-2 h-4 w-4" />
                                            {processing
                                                ? 'Creating...'
                                                : 'Create Partner'}
                                        </Button>
                                        <ActionButton
                                            IconNode={PencilOff}
                                            href={index.url()}
                                        >
                                            Cancel
                                        </ActionButton>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </form>
            </CardContent>
        </AdminLayout>
  );
}