<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Inquiry\StoreInquiryRequest;
use App\Models\Inquiry;
use App\Services\DataTableService;
use App\Services\InquiryService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class InquiryController extends Controller
{
    public function __construct(private DataTableService $dataTableService, protected InquiryService $inquiryService)
    {
        //
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $query = Inquiry::query()->with(['solarPanel', 'solarInverter']);

        $result = $this->dataTableService->process($query, $request, [
            'searchable' => ['first_name', 'last_name', 'email', 'phone_number', 'area'],
            'filterable' => ['status', 'has_battery', 'has_charger'],
            'sortable' => ['id', 'first_name', 'last_name', 'email', 'area', 'status', 'created_at'],
        ]);

        $filterOptions = [
            'status' => [
                ['label' => 'Completed', 'value' => true],
                ['label' => 'Pending', 'value' => false],
            ],
            'has_battery' => [
                ['label' => 'Yes', 'value' => true],
                ['label' => 'No', 'value' => false],
            ],
            'has_charger' => [
                ['label' => 'Yes', 'value' => true],
                ['label' => 'No', 'value' => false],
            ],
        ];

        return Inertia::render('admin/inquiries/index', [
            'inquiries' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order'],
            'filterOptions' => $filterOptions,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreInquiryRequest $request)
    {
        $this->inquiryService->create($request->validated());

        return response()->json(['message' => 'Inquiry created successfully.'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Inquiry $inquiry)
    {
        $inquiry->load(['solarPanel', 'solarInverter']);
        return Inertia::render('admin/inquiries/show', [
            'inquiry' => $inquiry,
        ]);
    }

    /**
     * Toggle the status of the specified inquiry.
     */
    public function toggleStatus(Inquiry $inquiry)
    {
        $this->inquiryService->toggleStatus($inquiry->id);

        return redirect()->back()->with('success', 'Inquiry status updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Inquiry $inquiry)
    {
        $this->inquiryService->delete($inquiry->id);

        return redirect()->back()->with('success', 'Inquiry deleted successfully');
    }
}
