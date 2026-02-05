import { create, destroy, edit, show } from "@/actions/App/Http/Controllers/Admin/ValueController";
import { ActionButton } from "@/components/ui/action-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { useDataTable } from "@/hooks/use-data-table";
import AdminLayout from "@/layouts/admin-layout";
import { ActionConfig, ColumnConfig, PaginationData } from "@/types/data-table.types";
import { Values } from "@/types/models";
import { Head, Link, router } from "@inertiajs/react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import React from "react";

interface Props {
  values: Values[];
  pagination: PaginationData;
  offset: number;
  filters: Record<string, string | number>;
  search: string;
  sortBy: string;
  sortOrder: "asc" | "desc";
}

export default function Index({ values, pagination, offset, filters, search, sortBy, sortOrder }: Props) {
  const {
    isLoading,
    handleSearch,
    handleFilterChange,
    handleSort,
    handlePerPageChange,
    handlePageChange,
  } = useDataTable();

  const columns: ColumnConfig<Values>[] = [
    {
      key: "title",
      label: "Title",
      sortable: true,
      render: (value) => (
        <div className="font-medium text-gray-900 dark:text-gray-100">
          {value.title}
        </div>
      ),
    },
    {
      key: "description",
      label: "Description",
      sortable: false,
      render: (value) => (
        <div className="text-gray-600 dark:text-gray-400">
          {value.description}
        </div>
      ),
    },
    {
      key: "image",
      label: "Image",
      sortable: false,
      render: (value) =>
        value?.image
          ? (
            <img
              src={value.image_url}
              alt={value.title ?? "Image"}
              className="w-16 h-16 object-cover rounded-md"
            />
          )
          : (
            <span className="text-gray-600 dark:text-gray-400">
              No image
            </span>
          ),
    },
    {
      key: "created_at",
      label: "Posted on",
      sortable: true,
      render: (value) => (
        <div className="text-gray-600 dark:text-gray-400">
          {new Date(value.created_at).toLocaleDateString()}
        </div>
      ),
    },
  ];

  const actions: ActionConfig<Values>[] = [
    {
      label: "View",
      icon: <Eye className="h-4 w-4" />,
      onClick: (value) => {
        router.visit(show.url(value.id));
      },
    },
    {
      label: "Edit",
      icon: <Pencil className="h-4 w-4" />,
      onClick: (value) => {
        router.visit(edit.url(value.id));
      },
    },
    {
      label: "Delete",
      icon: <Trash2 className="h-4 w-4" />,
      onClick: (value) => {
        if (confirm(`Are you sure you want to delete ${value.title}?`)) {
          router.delete(destroy.url(value.id));
        }
      },
      variant: "destructive",
    },
  ];

  return (
    <AdminLayout activeSlug="admin-values">
      <Head title="Values" />

      <div className="flex justify-end mb-6">
        
        <ActionButton href={create.url()}>Create Value</ActionButton>

      </div>

      <div className="mx-auto">
        <DataTable
          data={values}
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
          emptyMessage="No values found"
          searchPlaceholder="Search values by title..."
        />
      </div>
    </AdminLayout>
  );
}
