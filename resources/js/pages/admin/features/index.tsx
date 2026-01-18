import { create, destroy, edit, show } from '@/actions/App/Http/Controllers/Admin/FeatureController';
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import AdminLayout from '@/layouts/admin-layout';
import { ActionConfig, ColumnConfig, PaginationData } from '@/types/data-table.types';
import { Features } from '@/types/models';
import { Button } from '@/components/ui/button';
import { Head, router, Link } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import React from 'react'


interface Props {
  features: Features[];
  pagination: PaginationData;
  offset: number;
  filters: Record<string, string | number>;
  search: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

export default function Index({features, pagination, offset, filters, search, sortBy, sortOrder}: Props) {
 
     const {
        isLoading,
        handleSearch,
        handleFilterChange,
        handleSort,
        handlePerPageChange,
        handlePageChange,
      } = useDataTable();
 
 
  const columns: ColumnConfig<Features>[] = [
    {
      key: 'title',
      label: 'Title',
      sortable: true,
      render: (feature) => (
        <div className="font-medium text-gray-900 dark:text-gray-100">
          {feature.title}
        </div>
      ),
    },
    {
      key: 'description',
      label: 'Description',
      sortable: true,
      render: (feature) => (
        <div className="text-gray-600 dark:text-gray-400">
          {feature.description}
        </div>
      ),
    },
    {
      key: 'action_text',
      label: 'Action Text',
      sortable: true,
      render: (feature) => (
        <div className="text-gray-600 dark:text-gray-400">
          {feature.action_text}
        </div>
      ),
    },
    {
      key: 'action_url',
      label: 'Action URL',
      sortable: true,
      render: (feature) => (
        <div className="text-gray-600 dark:text-gray-400">
          {feature.action_url}
        </div>
      ),
    },
    {
      key: 'created_at',
      label: 'Posted on',
      sortable: true,
      render: (feature) => (
        <div className="text-gray-600 dark:text-gray-400">
          {new Date(feature.created_at).toLocaleDateString()}
        </div>
      ),
    },
  ];



  const actions: ActionConfig<Features>[] = [
    {
      label: 'View',
      icon: <Eye className="h-4 w-4" />,
      onClick: (feature) => {
        router.visit(show.url(feature.id));
      },
    },
    {
      label: 'Edit',
      icon: <Pencil className="h-4 w-4" />,
      onClick: (feature) => {
        router.visit(edit.url(feature.id));
      },
    },
    {
      label: 'Delete',
      icon: <Trash2 className="h-4 w-4" />,
      onClick: (feature) => {
        if (confirm(`Are you sure you want to delete ${feature.title}?`)) {
          router.delete(destroy.url(feature.id));
        }
      },
      variant: 'destructive',
    },
  ];

   return (
    <AdminLayout activeSlug="admin/features/create">
      <Head title="Features" />

      <div className="flex justify-end mb-6">
        <Link href={create.url()}>
          <Button>Create Feature</Button>
        </Link>
      </div>

      <div className="mx-auto">
        <DataTable
          data={features}
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
          emptyMessage="No features found"
          searchPlaceholder="Search features by title, description..."
        />
      </div>
    </AdminLayout>
  );
}
