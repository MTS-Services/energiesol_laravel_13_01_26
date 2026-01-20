import { destroy, show } from '@/actions/App/Http/Controllers/Admin/ContactController';
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import AdminLayout from '@/layouts/admin-layout';
import { ActionConfig, ColumnConfig, PaginationData } from '@/types/data-table.types';
import { Contact } from '@/types/models';
import { Head, router } from '@inertiajs/react';
import { Eye, Trash2 } from 'lucide-react';
import React from 'react'


interface Props {
  contacts: Contact[];
  pagination: PaginationData;
  offset: number;
  filters: Record<string, string | number>;
  search: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

export default function Index({contacts, pagination, offset, filters, search, sortBy, sortOrder}: Props) {
 
     const {
        isLoading,
        handleSearch,
        handleFilterChange,
        handleSort,
        handlePerPageChange,
        handlePageChange,
      } = useDataTable();
 
 
  const columns: ColumnConfig<Contact>[] = [
    {
      key: 'first_name',
      label: 'First Name',
      sortable: true,
      render: (contact) => (
        <div className="font-medium text-gray-900 dark:text-gray-100">
          {contact.first_name}
        </div>
      ),
    },
    {
      key: 'last_name',
      label: 'Last Name',
      sortable: true,
      render: (contact) => (
        <div className="text-gray-600 dark:text-gray-400">
          {contact.last_name}
        </div>
      ),
    },
    {
      key: 'email',
      label: 'Email',
      sortable: true,
      render: (contact) => (
        <div className="text-gray-600 dark:text-gray-400">
          {contact.email}
        </div>
      ),
    },
    {
        key: 'phone_number',
        label: 'Phone Number',
        sortable: true,
        render: (contact) => (
            <div className="text-gray-600 dark:text-gray-400">
                {contact.phone_number}
            </div>
        ),
    },
    {
      key: 'created_at',
      label: 'Created On',
      sortable: true,
      render: (contact) => (
        <div className="text-gray-600 dark:text-gray-400">
          {new Date(contact.created_at).toLocaleDateString()}
        </div>
      ),
    },
  ];



  const actions: ActionConfig<Contact>[] = [
    {
      label: 'View',
      icon: <Eye className="h-4 w-4" />,
      onClick: (contact) => {
        router.visit(show.url(contact.id));
      },
    },
    {
      label: 'Delete',
      icon: <Trash2 className="h-4 w-4" />,
      onClick: (contact) => {
        if (confirm(`Are you sure you want to delete contact: ${contact.first_name} ${contact.last_name}?`)) {
          router.delete(destroy.url(contact.id));
        }
      },
      variant: 'destructive',
    },
  ];

   return (
    <AdminLayout activeSlug="admin-contacts">
      <Head title="Contacts" />

      <div className="mx-auto">
        <DataTable
          data={contacts}
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
          emptyMessage="No contacts found"
          searchPlaceholder="Search contacts by name, email, phone number..."
        />
      </div>
    </AdminLayout>
  );
}
