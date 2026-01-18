import { create, destroy, edit, show } from '@/actions/App/Http/Controllers/Admin/ServiceController';
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import AdminLayout from '@/layouts/admin-layout';
import { ActionConfig, ColumnConfig, PaginationData } from '@/types/data-table.types';
import { Service } from '@/types/models'; // Assuming Service type exists in models.d.ts
import { Button } from '@/components/ui/button';
import { Head, router, Link } from '@inertiajs/react';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import React from 'react';

interface Props {
  services: Service[];
  pagination: PaginationData;
  offset: number;
  filters: Record<string, string | number>;
  search: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

export default function Index({ services, pagination, offset, filters, search, sortBy, sortOrder }: Props) {
  const {
    isLoading,
    handleSearch,
    handleFilterChange,
    handleSort,
    handlePerPageChange,
    handlePageChange,
  } = useDataTable();

  const columns: ColumnConfig<Service>[] = [
    {
      key: 'title',
      label: 'Title',
      sortable: true,
      render: (service) => (
        <div className="font-medium text-gray-900 dark:text-gray-100">
          {service.title}
        </div>
      ),
    },
    {
      key: 'sub_title',
      label: 'Sub Title',
      sortable: true,
      render: (service) => (
        <div className="text-gray-600 dark:text-gray-400">
          {service.sub_title}
        </div>
      ),
    },
    {
      key: 'description',
      label: 'Description',
      sortable: true,
      render: (service) => (
        <div className="text-gray-600 dark:text-gray-400">
          {service.description}
        </div>
      ),
    },
    {
      key: 'image',
      label: 'Image',
      render: (service) => (
        service.image ? (
          <img src={`/storage/${service.image}`} alt={service.title} className="h-10 w-10 object-cover rounded-full" />
        ) : (
          <span className="text-gray-500">No Image</span>
        )
      ),
    },
    {
      key: 'created_at',
      label: 'Created At',
      sortable: true,
      render: (service) => (
        <div className="text-gray-600 dark:text-gray-400">
          {new Date(service.created_at).toLocaleDateString()}
        </div>
      ),
    },
  ];

  const actions: ActionConfig<Service>[] = [
    {
      label: 'View',
      icon: <Eye className="h-4 w-4" />,
      onClick: (service) => {
        router.visit(show.url(service.id));
      },
    },
    {
      label: 'Edit',
      icon: <Pencil className="h-4 w-4" />,
      onClick: (service) => {
        router.visit(edit.url(service.id));
      },
    },
    {
      label: 'Delete',
      icon: <Trash2 className="h-4 w-4" />,
      onClick: (service) => {
        if (confirm(`Are you sure you want to delete ${service.title}?`)) {
          router.delete(destroy.url(service.id));
        }
      },
      variant: 'destructive',
    },
  ];

  return (
    <AdminLayout activeSlug="admin/services">
      <Head title="Services" />

      <div className="flex justify-end mb-6">
        <Link href={create.url()}>
          <Button>Create Service</Button>
        </Link>
      </div>

      <div className="mx-auto">
        <DataTable
          data={services}
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
          emptyMessage="No services found"
          searchPlaceholder="Search services by title, sub-title, description..."
        />
      </div>
    </AdminLayout>
  );
}
