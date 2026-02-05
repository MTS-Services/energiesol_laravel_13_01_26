import {
    create,
    destroy,

    show,
    toggleStatus,
} from '@/actions/App/Http/Controllers/Admin/EstimateController';
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import AdminLayout from '@/layouts/admin-layout';
import { ActionConfig, ColumnConfig, PaginationData } from '@/types/data-table.types';
import { Estimate, SolarInverter, SolarPanel } from '@/types/models';
import { Button } from '@/components/ui/button';
import { Head, router } from '@inertiajs/react';
import { Eye, Pencil, Trash2, ToggleLeft, ToggleRight } from 'lucide-react';
import React from 'react';
import { ActionButton } from '@/components/ui/action-button';

interface Props {
    estimates: Estimate[];
    pagination: PaginationData;
    offset: number;
    filters: Record<string, string | number>;
    search: string;
    sortBy: string;
    sortOrder: 'asc' | 'desc';
}

export default function EstimatesIndex({
    estimates,
    pagination,
    offset,
    filters,
    search,
    sortBy,
    sortOrder,
}: Props) {
    const {
        isLoading,
        handleSearch,
        handleFilterChange,
        handleSort,
        handlePerPageChange,
        handlePageChange,
    } = useDataTable();

    const columns: ColumnConfig<Estimate>[] = [
        {
            key: 'first_name',
            label: 'First Name',
            sortable: true,
            render: (estimate) => (
                <div className="font-medium text-gray-900 dark:text-gray-100">
                    {estimate.first_name}
                </div>
            ),
        },
        {
            key: 'last_name',
            label: 'Last Name',
            sortable: true,
            render: (estimate) => (
                <div className="font-medium text-gray-900 dark:text-gray-100">
                    {estimate.last_name}
                </div>
            ),
        },
        {
            key: 'email',
            label: 'Email',
            sortable: true,
            render: (estimate) => (
                <div className="text-gray-600 dark:text-gray-400">
                    {estimate.email}
                </div>
            ),
        },
        {
            key: 'phone',
            label: 'Phone',
            sortable: true,
            render: (estimate) => (
                <div className="text-gray-600 dark:text-gray-400">
                    {estimate.phone}
                </div>
            ),
        },
        // {
        //     key: 'area',
        //     label: 'Area',
        //     sortable: true,
        //     render: (estimate) => (
        //         <div className="text-gray-600 dark:text-gray-400">
        //             {estimate.area}
        //         </div>
        //     ),
        // },
        // {
        //     key: 'solar_panel',
        //     label: 'Solar Panel',
        //     render: (estimate) => (
        //         <div className="text-gray-600 dark:text-gray-400">
        //             {(estimate.solar_panel as SolarPanel)?.title || 'N/A'}
        //         </div>
        //     ),
        // },
        {
            key: 'solar_inverter',
            label: 'Solar Inverter',
            render: (estimate) => (
                <div className="text-gray-600 dark:text-gray-400">
                    {(estimate.solar_inverter as SolarInverter)?.title || 'N/A'}
                </div>
            ),
        },
        {
            key: 'status',
            label: 'Status',
            sortable: true,
            render: (estimate) => (
                <span
                    className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                        estimate.status
                            ? 'bg-green-50 text-green-700 ring-green-600/20'
                            : 'bg-red-50 text-red-700 ring-red-600/20'
                    }`}
                >
                    {estimate.status ? 'Processed' : 'Pending'}
                </span>
            ),
        },
        {
            key: 'created_at',
            label: 'Created At',
            sortable: true,
            render: (estimate) => (
                <div className="text-gray-600 dark:text-gray-400">
                    {new Date(estimate.created_at).toLocaleDateString()}
                </div>
            ),
        },
    ];

    const actions: ActionConfig<Estimate>[] = [
        {
            label: 'View',
            icon: <Eye className="h-4 w-4" />,
            onClick: (estimate) => {
                router.visit(show.url(estimate.id));
            },
        },
        {
            label: 'Toggle Status',
            icon: (estimate) =>
                estimate.status ? (
                    <ToggleLeft className="h-4 w-4" />
                ) : (
                    <ToggleRight className="h-4 w-4" />
                ),
            onClick: (estimate) => {
                router.put(toggleStatus.url(estimate.id));
            },
        },
        {
            label: 'Delete',
            icon: <Trash2 className="h-4 w-4" />,
            onClick: (estimate) => {
                if (
                    confirm(
                        `Are you sure you want to delete the estimate from ${estimate.first_name} ${estimate.last_name}?`,
                    )
                ) {
                    router.delete(destroy.url(estimate.id));
                }
            },
            variant: 'destructive',
        },
    ];

    return (
        <AdminLayout activeSlug="admin/estimates">
            <Head title="Estimates" />

           

            <div className="mx-auto">
                <DataTable
                    data={estimates}
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
                    emptyMessage="No estimates found"
                    searchPlaceholder="Search estimates by name, email, phone..."
                />
            </div>
        </AdminLayout>
    );
}
