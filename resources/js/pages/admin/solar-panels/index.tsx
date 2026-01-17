import { create, destroy, edit, show } from '@/actions/App/Http/Controllers/Admin/SolarPanelController';
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import AdminLayout from '@/layouts/admin-layout';
import { ActionConfig, ColumnConfig, PaginationData } from '@/types/data-table.types';
import { SolarPanels } from '@/types/models';
import { Button } from '@/components/ui/button';
import { Head, router, Link } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import {  Eye, Pencil, Trash2 } from 'lucide-react';
import React from 'react'


interface Props {
  solarPanels: SolarPanels[];
  pagination: PaginationData;
  offset: number;
  filters: Record<string, string | number>;
  search: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

export default function Index({solarPanels, pagination, offset, filters, search, sortBy, sortOrder}: Props) {
 
     const {
        isLoading,
        handleSearch,
        handleFilterChange,
        handleSort,
        handlePerPageChange,
        handlePageChange,
      } = useDataTable();
 
 
  const columns: ColumnConfig<SolarPanels>[] = [
    {
      key: 'brand_title',
      label: 'Brand',
      sortable: true,
      render: (solarPanel) => (
        <div className="font-medium text-gray-900 dark:text-gray-100">
          {solarPanel.brand_title}
        </div>
      ),
    },
    {
      key: 'title',
      label: 'Title',
      sortable: true,
      render: (solarPanel) => (
        <div className="text-gray-600 dark:text-gray-400">
          {solarPanel.title}
        </div>
      ),
    },
    {
      key: 'description',
      label: 'Description',
      sortable: true,
      render: (solarPanel) => (
        <div className="text-gray-600 dark:text-gray-400">
          {solarPanel.description}
        </div>
      ),
    },
    {
        key: 'status',
        label: 'Status',
        sortable: false,
        render: (solarPanel) => (
            <Badge variant={solarPanel.status ? 'default' : 'secondary'}>
                {solarPanel.status ? 'Yes' : 'No'}
            </Badge>
        ),
    },
    {
      key: 'created_at',
      label: 'Posted on',
      sortable: true,
      render: (solarPanel) => (
        <div className="text-gray-600 dark:text-gray-400">
          {new Date(solarPanel.created_at).toLocaleDateString()}
        </div>
      ),
    },
  ];



  const actions: ActionConfig<SolarPanels>[] = [
    {
      label: 'View',
      icon: <Eye className="h-4 w-4" />,
      onClick: (solarPanel) => {
        router.visit(show.url(solarPanel.id));
      },
    },
    {
      label: 'Edit',
      icon: <Pencil className="h-4 w-4" />,
      onClick: (solarPanel) => {
        router.visit(edit.url(solarPanel.id));
      },
    },
    {
      label: 'Delete',
      icon: <Trash2 className="h-4 w-4" />,
      onClick: (solarPanel) => {
        if (confirm(`Are you sure you want to delete ${solarPanel.name}?`)) {
          router.delete(destroy.url(solarPanel.id));
        }
      },
      variant: 'destructive',
    },
  ];

   return (
    <AdminLayout activeSlug="admin/solar-panels/create">
      <Head title="Solar Panels" />

      <div className="flex justify-end mb-6">
        <Link href={create.url()}>
          <Button>Create Solar Panel</Button>
        </Link>
      </div>

      <div className="mx-auto">
        <DataTable
          data={solarPanels}
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
          emptyMessage="No solar panels found"
          searchPlaceholder="Search solar panels by name, title..."
        />
      </div>
    </AdminLayout>
  );
}
