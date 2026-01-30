import { ActionButton } from '@/components/ui/action-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/layouts/admin-layout';
import { Booking } from '@/types/models';
import { Head } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import { index } from '@/actions/App/Http/Controllers/Admin/BookingController';

interface Props {
    booking: Booking;
}

export default function ShowBooking({ booking }: Props) {
    return (
        <AdminLayout>
            <Head title="Booking Details" />

            <div className="container mx-auto py-6">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Booking Details</h1>
                    <div className="flex gap-2">
                        <ActionButton IconNode={ArrowLeft} href={index.url()}>Back to bookings</ActionButton>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Left Column */}
                    <div className="space-y-6 lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Name</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-muted-foreground">{booking.name}</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Contact</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {booking.email}
                                </p>
                                <p className="text-muted-foreground">
                                    {booking.phone}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {booking.message}
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Insights</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Created At
                                    </p>
                                    <p className="font-medium">{new Date(booking.created_at).toLocaleDateString()}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                      Updated At
                                    </p>
                                    <p className="font-medium">{ booking.updated_at ? new Date(booking.updated_at).toLocaleDateString() : 'N/A' }</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Status
                                    </p>
                                    <p className="font-medium"> {booking.status}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Booking Date
                                    </p>
                                    <p className="font-medium"> {booking.booking_date ? new Date(booking.booking_date).toLocaleDateString() : 'N/A'}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
