import { create, destroy, edit, show } from '@/actions/App/Http/Controllers/Admin/AdvantageController';
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import AdminLayout from '@/layouts/admin-layout';
import { ActionConfig, ColumnConfig, PaginationData } from '@/types/data-table.types'; 
import { Button } from '@/components/ui/button';
import { Head, router, Link } from '@inertiajs/react';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import React from 'react'
import { Booking } from '@/types/models';


interface Props {
  Bookings: Booking[]; // Changed from solarPanels to advantages
  pagination: PaginationData;
  offset: number;
  filters: Record<string, string | number>;
  search: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

export default function Index({Bookings, pagination, offset, filters, search, sortBy, sortOrder}: Props) {
 
     const {
        isLoading,
        handleSearch,
        handleFilterChange,
        handleSort,
        handlePerPageChange,
        handlePageChange,
      } = useDataTable();
 
 
  const columns: ColumnConfig<Booking>[] = [ // Changed from SolarPanels to Advantage
    {
      key: 'first_name',
      label: 'Name',
      sortable: true,
      render: (booking) => (
        <div className="font-medium text-gray-900 dark:text-gray-100">
          {booking.first_name}
        </div>
      ),
    }, {
      key: 'email',
      label: 'Email',
      sortable: true,
      render: (booking) => (
        <div className="font-medium text-gray-900 dark:text-gray-100">
          {booking.email}
        </div>
      ),
    },
    {
      key: 'created_at',
      label: 'Posted on',
      sortable: true,
      render: (advantage) => (
        <div className="text-gray-600 dark:text-gray-400">
          {new Date(advantage.created_at).toLocaleDateString()}
        </div>
      ),
    },
  ];



  const actions: ActionConfig<Booking>[] = [ // Changed from SolarPanels to Advantage
    {
      label: 'View',
      icon: <Eye className="h-4 w-4" />,
      onClick: (advantage) => {
        router.visit(show.url(advantage.id));
      },
    },
    {
      label: 'Delete',
      icon: <Trash2 className="h-4 w-4" />,
      onClick: (advantage) => {
        if (confirm(`Are you sure you want to delete ${advantage.title}?`)) { // Changed `solarPanel.name` to `advantage.title`
          router.delete(destroy.url(advantage.id));
        }
      },
      variant: 'destructive',
    },
  ];

   return (
    <AdminLayout activeSlug="admin-advantages"> {/* Changed activeSlug */}
      <Head title="Advantages" /> {/* Changed title */}

      <div className="flex justify-end mb-6">
        <Link href={create.url()}>
          <Button>Create Advantage</Button> {/* Changed button text */}
        </Link>
      </div>

      <div className="mx-auto">
        <DataTable
          data={Bookings} // Changed from solarPanels to advantages
          columns={columns}
          pagination={pagination}
          offset={offset}
          showNumbering={true}
          actions={actions}
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
          onSort={handleSort}
          onPerPageChange={handlePerPageChange}
          onPageChange={handlePageChange}
          searchValue={search}
          filterValues={filters}
          sortBy={sortBy}
          sortOrder={sortOrder}
          isLoading={isLoading}
          emptyMessage="No Bookings found" // Changed empty message
          searchPlaceholder="Search booking by number..." // Changed search placeholder
        />
      </div>
    </AdminLayout>
  );
}
