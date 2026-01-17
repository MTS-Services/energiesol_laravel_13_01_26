import { create, destroy, edit, show } from '@/actions/App/Http/Controllers/Admin/SolarInverterController';
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import AdminLayout from '@/layouts/admin-layout';
import { ActionConfig, ColumnConfig, PaginationData } from '@/types/data-table.types';
import { SolarInverters } from '@/types/models';
import { Button } from '@/components/ui/button';
import { Head, router, Link } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import {  Eye, Pencil, Trash2 } from 'lucide-react';
import React from 'react'


interface Props {
  solarInverters: SolarInverters[];
  pagination: PaginationData;
  offset: number;
  filters: Record<string, string | number>;
  search: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

export default function Index({solarInverters, pagination, offset, filters, search, sortBy, sortOrder}: Props) {
 
     const {
        isLoading,
        handleSearch,
        handleFilterChange,
        handleSort,
        handlePerPageChange,
        handlePageChange,
      } = useDataTable();
 
 
  const columns: ColumnConfig<SolarInverters>[] = [
    {
      key: 'brand_title',
      label: 'Brand',
      sortable: true,
      render: (solarInverter) => (
        <div className="font-medium text-gray-900 dark:text-gray-100">
          {solarInverter.brand_title}
        </div>
      ),
    },
    {
      key: 'title',
      label: 'Title',
      sortable: true,
      render: (solarInverter) => (
        <div className="text-gray-600 dark:text-gray-400">
          {solarInverter.title}
        </div>
      ),
    },
    {
      key: 'description',
      label: 'Description',
      sortable: true,
      render: (solarInverter) => (
        <div className="text-gray-600 dark:text-gray-400">
          {solarInverter.description}
        </div>
      ),
    },
    {
        key: 'status',
        label: 'Status',
        sortable: false,
        render: (solarInverter) => (
            <Badge variant={solarInverter.status ? 'default' : 'secondary'}>
                {solarInverter.status ? 'Yes' : 'No'}
            </Badge>
        ),
    },
    {
      key: 'created_at',
      label: 'Posted on',
      sortable: true,
      render: (solarInverter) => (
        <div className="text-gray-600 dark:text-gray-400">
          {new Date(solarInverter.created_at).toLocaleDateString()}
        </div>
      ),
    },
  ];



  const actions: ActionConfig<SolarInverters>[] = [
    {
      label: 'View',
      icon: <Eye className="h-4 w-4" />,
      onClick: (solarInverter) => {
        router.visit(show.url(solarInverter.id));
      },
    },
    {
      label: 'Edit',
      icon: <Pencil className="h-4 w-4" />,
      onClick: (solarInverter) => {
        router.visit(edit.url(solarInverter.id));
      },
    },
    {
      label: 'Delete',
      icon: <Trash2 className="h-4 w-4" />,
      onClick: (solarInverter) => {
        if (confirm(`Are you sure you want to delete ${solarInverter.name}?`)) {
          router.delete(destroy.url(solarInverter.id));
        }
      },
      variant: 'destructive',
    },
  ];

   return (
    <AdminLayout activeSlug="admin/solar-inverters/create">
      <Head title="Solar Inverters" />

      <div className="flex justify-end mb-6">
        <Link href={create.url()}>
          <Button>Create Solar Inverter</Button>
        </Link>
      </div>

      <div className="mx-auto">
        <DataTable
          data={solarInverters}
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
          emptyMessage="No solar inverters found"
          searchPlaceholder="Search solar inverters by name, title..."
        />
      </div>
    </AdminLayout>
  );
}
