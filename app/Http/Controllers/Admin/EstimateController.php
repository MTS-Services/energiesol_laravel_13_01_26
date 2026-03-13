<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreEstimateRequest;
use App\Http\Requests\Admin\UpdateEstimateRequest;
use App\Models\Estimate;
use App\Services\DataTableService;
use App\Services\EstimateService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EstimateController extends Controller
{
    public function __construct(private DataTableService $dataTableService, protected EstimateService $estimateService)
    {
        //
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $query = Estimate::query();

        $result = $this->dataTableService->process($query, $request, [
            'searchable' => ['name', 'email', 'phone'],
            'sortable' => ['id', 'name', 'email', 'created_at'],
        ]);

        return Inertia::render('admin/estimates/index', [
            'estimates' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order'],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('admin/estimates/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEstimateRequest $request)
    {
        $data = $request->validated();
        $this->estimateService->create($data);

        return redirect()->route('admin.estimates.index')->with('success', 'Estimate created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Estimate $estimate): Response
    {
       $estimate->load(['solarPanel', 'solarInverter']);
    
    // Append image_url to solarPanel if it exists
    if ($estimate->solarPanel) {
        $estimate->solarPanel->append('image_url');
    }
    
    // Append image_url to solarInverter if it exists (if needed)
    if ($estimate->solarInverter) {
        $estimate->solarInverter->append('image_url');
    }
        return Inertia::render('admin/estimates/show', [
            'estimate' => $estimate,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Estimate $estimate): Response
    {
        return Inertia::render('admin/estimates/edit', [
            'estimate' => $estimate,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEstimateRequest $request, Estimate $estimate)
    {
        $data = $request->validated();
        $this->estimateService->update($estimate->id, $data);

        return redirect()->route('admin.estimates.index')->with('success', 'Estimate updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Estimate $estimate)
    {
        $estimate->delete();

        return redirect()->back()->with('success', 'Estimate deleted successfully.');
    }

    /**
     * Bulk delete estimates.
     */
    public function bulkDestroy(Request $request)
    {
        $request->validate([
            'ids' => 'required|array',
            'ids.*' => 'required|integer|exists:estimates,id',
        ]);

        $deletedCount = $this->estimateService->bulkDelete($request->ids);

        return redirect()->back()->with('success', "{$deletedCount} estimates deleted successfully");
    }

    /**
     * Toggle the status of the specified resource.
     */
    public function toggleStatus(Estimate $estimate)
    {
        $this->estimateService->toggleStatus($estimate->id);

        return redirect()->back()->with('success', 'Estimate status updated successfully.');
    }
}
