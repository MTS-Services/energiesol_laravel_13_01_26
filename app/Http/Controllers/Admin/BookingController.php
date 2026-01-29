<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Services\DataTableService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BookingController extends Controller
{
    public function __construct(protected DataTableService $dataTableService)
    {
        //
    }
    
    public function index(Request $request):Response 
    {
         $query = Booking::query();

        $result = $this->dataTableService->process($query, $request, [
            'searchable' => ['first_name', 'last_name', 'email', 'phone_number'],
            'sortable' => ['id', 'first_name', 'last_name', 'email', 'created_at'],
        ]);

        return Inertia::render('admin/bookings/index', [
            'bookings' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order'],
        ]);
    }
}
