import { destroy, show, toggleStatus } from '@/actions/App/Http/Controllers/Admin/InquiryController';
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import AdminLayout from '@/layouts/admin-layout';
import { ActionConfig, ColumnConfig, PaginationData } from '@/types/data-table.types';
import { Inquiry } from '@/types/models';
import { Head, router } from '@inertiajs/react';
import { Eye, Trash2 } from 'lucide-react';
import React from 'react'
import { Switch } from '@/components/ui/switch';


interface Props {
  inquiries: Inquiry[];
  pagination: PaginationData;
  offset: number;
  filters: Record<string, string | number>;
  search: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

export default function Index({inquiries, pagination, offset, filters, search, sortBy, sortOrder}: Props) {
 
     const {
        isLoading,
        handleSearch,
        handleFilterChange,
        handleSort,
        handlePerPageChange,
        handlePageChange,
      } = useDataTable();

    const handleToggleStatus = (inquiry: Inquiry) => {
        router.put(toggleStatus.url(inquiry.id), {}, {
            preserveScroll: true,
            preserveState: true,
        });
    }
 
  const columns: ColumnConfig<Inquiry>[] = [
    {
      key: 'first_name',
      label: 'Name',
      sortable: true,
      render: (inquiry) => (
        <div className="font-medium text-gray-900 dark:text-gray-100">
          {inquiry.first_name} {inquiry.last_name}
        </div>
      ),
    },
    {
      key: 'email',
      label: 'Email',
      sortable: true,
      render: (inquiry) => (
        <div className="text-gray-600 dark:text-gray-400">
          {inquiry.email}
        </div>
      ),
    },
    {
      key: 'phone_number',
      label: 'Phone',
      sortable: true,
      render: (inquiry) => (
        <div className="text-gray-600 dark:text-gray-400">
          {inquiry.phone_number}
        </div>
      ),
    },
    {
      key: 'area',
      label: 'Area',
      sortable: true,
      render: (inquiry) => (
        <div className="text-gray-600 dark:text-gray-400">
          {inquiry.area}
        </div>
      ),
    },
    {
      key: 'solar_panel',
      label: 'Solar Panel',
      render: (inquiry) => (
        <div className="text-gray-600 dark:text-gray-400">
          {inquiry.solar_panel?.title || 'N/A'}
        </div>
      ),
    },
    {
      key: 'solar_inverter',
      label: 'Solar Inverter',
      render: (inquiry) => (
        <div className="text-gray-600 dark:text-gray-400">
          {inquiry.solar_inverter?.title || 'N/A'}
        </div>
      ),
    },
    {
      key: 'has_battery',
      label: 'Has Battery',
      render: (inquiry) => (
        <div className="text-gray-600 dark:text-gray-400">
          {inquiry.has_battery ? 'Yes' : 'No'}
        </div>
      ),
    },
    {
      key: 'has_charger',
      label: 'Has Charger',
      render: (inquiry) => (
        <div className="text-gray-600 dark:text-gray-400">
          {inquiry.has_charger ? 'Yes' : 'No'}
        </div>
      ),
    },
    {
      key: 'status',
      label: 'Completed',
      sortable: true,
      render: (inquiry) => (
        <Switch
            checked={inquiry.status}
            onCheckedChange={() => handleToggleStatus(inquiry)}
        />
      ),
    },
    {
      key: 'created_at',
      label: 'Created On',
      sortable: true,
      render: (inquiry) => (
        <div className="text-gray-600 dark:text-gray-400">
          {new Date(inquiry.created_at).toLocaleDateString()}
        </div>
      ),
    },
  ];



  const actions: ActionConfig<Inquiry>[] = [
    {
      label: 'View',
      icon: <Eye className="h-4 w-4" />,
      onClick: (inquiry) => {
        router.visit(show.url(inquiry.id));
      },
    },
    {
      label: 'Delete',
      icon: <Trash2 className="h-4 w-4" />,
      onClick: (inquiry) => {
        if (confirm(`Are you sure you want to delete inquiry from ${inquiry.first_name} ${inquiry.last_name}?`)) {
          router.delete(destroy.url(inquiry.id));
        }
      },
      variant: 'destructive',
    },
  ];

   return (
    <AdminLayout activeSlug="admin-inquiries">
      <Head title="Inquiries" />

      <div className="mx-auto">
        <DataTable
          data={inquiries}
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
          emptyMessage="No inquiries found"
          searchPlaceholder="Search inquiries by name, email, phone number..."
        />
      </div>
    </AdminLayout>
  );
}
