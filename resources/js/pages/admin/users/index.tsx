import React from 'react';
import { Head, router } from '@inertiajs/react';
import { Pencil, Trash2, Eye, UserCheck, UserX } from 'lucide-react';
import AdminLayout from '@/layouts/admin-layout';
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import { ColumnConfig, FilterConfig, ActionConfig } from '@/types/data-table.types';
import { Badge } from '@/components/ui/badge';

interface Role {
  id: number;
  name: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive' | 'banned';
  // roles: Role[];
  created_at: string;
}

interface Props {
  users: User[];
  pagination: any;
  offset: number;
  filters: Record<string, any>;
  search: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  filterOptions: {
    status: Array<{ label: string; value: string }>;
    // 'roles.name': Array<{ label: string; value: string }>;
  };
}

export default function UsersIndex({
  users,
  pagination,
  offset,
  filters,
  search,
  sortBy,
  sortOrder,
  filterOptions,
}: Props) {
  const {
    isLoading,
    handleSearch,
    handleFilterChange,
    handleSort,
    handlePerPageChange,
    handlePageChange,
  } = useDataTable();

  // Define columns
  const columns: ColumnConfig<User>[] = [
    {
      key: 'name',
      label: 'Name',
      sortable: true,
      render: (user) => (
        <div className="font-medium text-gray-900 dark:text-gray-100">
          {user.name}
        </div>
      ),
    },
    {
      key: 'email',
      label: 'Email',
      sortable: true,
      render: (user) => (
        <div className="text-gray-600 dark:text-gray-400">
          {user.email}
        </div>
      ),
    },
    // {
    //   key: 'roles',
    //   label: 'Roles',
    //   sortable: false,
    //   render: (user) => (
    //     <div className="flex gap-1 flex-wrap">
    //       {user.roles.map((role) => (
    //         <Badge key={role.id} variant="secondary">
    //           {role.name}
    //         </Badge>
    //       ))}
    //     </div>
    //   ),
    // },
    // {
    //   key: 'status',
    //   label: 'Status',
    //   sortable: true,
    //   render: (user) => {
    //     const statusColors = {
    //       active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    //       inactive: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    //       banned: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    //     };

    //     return (
    //       <Badge className={statusColors[user.status]}>
    //         {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
    //       </Badge>
    //     );
    //   },
    // },
    {
      key: 'created_at',
      label: 'Joined Date',
      sortable: true,
      render: (user) => (
        <div className="text-gray-600 dark:text-gray-400">
          {new Date(user.created_at).toLocaleDateString()}
        </div>
      ),
    },
  ];

  // Define filters
  const filterConfigs: FilterConfig[] = [
    {
      key: 'status',
      label: 'Status',
      options: filterOptions.status,
      placeholder: 'Filter by status',
    },
    // {
    //   key: 'roles.name',
    //   label: 'Role',
    //   options: filterOptions['roles.name'],
    //   placeholder: 'Filter by role',
    // },
  ];

  // Define actions
  const actions: ActionConfig<User>[] = [
    {
      label: 'View',
      icon: <Eye className="h-4 w-4" />,
      onClick: (user) => {
        router.visit(route('admin.users.show', user.id));
      },
    },
    {
      label: 'Edit',
      icon: <Pencil className="h-4 w-4" />,
      onClick: (user) => {
        router.visit(route('admin.users.edit', user.id));
      },
    },
    // {
    //   label: (user) => user.status === 'active' ? 'Deactivate' : 'Activate',
    //   icon: (user) => user.status === 'active' ? <UserX className="h-4 w-4" /> : <UserCheck className="h-4 w-4" />,
    //   onClick: (user) => {
    //     const newStatus = user.status === 'active' ? 'inactive' : 'active';
    //     router.put(route('admin.users.update-status', user.id), {
    //       status: newStatus,
    //     });
    //   },
    //   show: (user) => user.status !== 'banned',
    // },
    {
      label: 'Delete',
      icon: <Trash2 className="h-4 w-4" />,
      onClick: (user) => {
        if (confirm(`Are you sure you want to delete ${user.name}?`)) {
          router.delete(route('admin.users.destroy', user.id));
        }
      },
      variant: 'destructive',
    },
  ];

  return (
    <AdminLayout activeSlug="admin-users">
      <Head title="Users" />

      <div className="mx-auto">
        <DataTable
          data={users}
          columns={columns}
          pagination={pagination}
          offset={offset}
          showNumbering={true}
          // numberingKey="id" // Uncomment to show actual IDs
          filters={filterConfigs}
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
          emptyMessage="No users found"
          searchPlaceholder="Search users by name, email, or role..."
        />
      </div>
    </AdminLayout>
  );
}