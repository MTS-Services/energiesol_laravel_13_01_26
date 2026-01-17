import { create, destroy, edit, show } from '@/actions/App/Http/Controllers/Admin/PartnerController';
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import AdminLayout from '@/layouts/admin-layout';
import { ActionConfig, ColumnConfig, PaginationData } from '@/types/data-table.types';
import { Partner } from '@/types/models'; // Assuming a Partner type exists
import { Button } from '@/components/ui/button';
import { Head, router, Link } from '@inertiajs/react';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import React from 'react';

interface Props {
  partners: Partner[];
  pagination: PaginationData;
  offset: number;
  filters: Record<string, string | number>;
  search: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

export default function Index({ partners, pagination, offset, filters, search, sortBy, sortOrder }: Props) {
  const {
    isLoading,
    handleSearch,
    handleFilterChange,
    handleSort,
    handlePerPageChange,
    handlePageChange,
  } = useDataTable();

  const columns: ColumnConfig<Partner>[] = [
    {
      key: 'name',
      label: 'Name',
      sortable: true,
      render: (partner) => (
        <div className="font-medium text-gray-900 dark:text-gray-100">
          {partner.name}
        </div>
      ),
    },
    {
      key: 'created_at',
      label: 'Posted on',
      sortable: true,
      render: (partner) => (
        <div className="text-gray-600 dark:text-gray-400">
          {new Date(partner.created_at).toLocaleDateString()}
        </div>
      ),
    },
  ];

  const actions: ActionConfig<Partner>[] = [
    {
      label: 'View',
      icon: <Eye className="h-4 w-4" />,
      onClick: (partner) => {
        router.visit(show.url(partner.id));
      },
    },
    {
      label: 'Edit',
      icon: <Pencil className="h-4 w-4" />,
      onClick: (partner) => {
        router.visit(edit.url(partner.id));
      },
    },
    {
      label: 'Delete',
      icon: <Trash2 className="h-4 w-4" />,
      onClick: (partner) => {
        if (confirm(`Are you sure you want to delete ${partner.name}?`)) {
          router.delete(destroy.url(partner.id));
        }
      },
      variant: 'destructive',
    },
  ];

  return (
    <AdminLayout activeSlug="admin-partners">
      <Head title="Partners" />

      <div className="flex justify-end mb-6">
        <Link href={create.url()}>
          <Button>Create Partner</Button>
        </Link>
      </div>

      <div className="mx-auto">
        <DataTable
          data={partners}
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
          // filterValues={filters} // No filters defined for now, can add later if needed
          sortBy={sortBy}
          sortOrder={sortOrder}
          isLoading={isLoading}
          emptyMessage="No partners found"
          searchPlaceholder="Search partners by name..."
        />
      </div>
    </AdminLayout>
  );
}