<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\DataTableService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function __construct(private DataTableService $dataTableService) {}

    public function index(Request $request): Response
    {
        $query = User::query();

        $result = $this->dataTableService->process($query, $request, [
            'searchable' => ['name', 'email'],
            'filterable' => ['status'],
            'sortable' => ['id', 'name', 'email', 'created_at'],
        ]);

        // Get filter options dynamically
        $filterOptions = [
            'status' => [
                ['label' => 'Active', 'value' => 'active'],
                ['label' => 'Inactive', 'value' => 'inactive'],
                ['label' => 'Banned', 'value' => 'banned'],
            ],
            // 'roles.name' => \App\Models\Role::select('name as label', 'name as value')
            //     ->distinct()
            //     ->get()
            //     ->toArray(),
        ];

        return Inertia::render('admin/users/index', [
            'users' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order'],
            'filterOptions' => $filterOptions,
        ]);
    }

    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->back()->with('success', 'User deleted successfully');
    }
}
