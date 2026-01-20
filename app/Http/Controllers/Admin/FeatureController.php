<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Feature\StoreFeatureRequest;
use App\Http\Requests\Feature\UpdateFeatureRequest;
use App\Models\Feature;
use App\Services\DataTableService;
use App\Services\FeatureService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class FeatureController extends Controller
{
    public function __construct(private DataTableService $dataTableService, protected FeatureService $featureService)
    {
        //
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $query = Feature::query();

        $result = $this->dataTableService->process($query, $request, [
            'searchable' => ['title', 'description', 'action_text'],
            'sortable' => ['id', 'title', 'created_at'],
        ]);

        return Inertia::render('admin/features/index', [
            'features' => $result['data'],
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
        return Inertia::render('admin/features/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFeatureRequest $request)
    {
        $data = $request->validated();
        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->storeAs('features/images', $request->file('image')->getClientOriginalName());
        }
        $this->featureService->create($data);

        return redirect()->route('admin.features.index')->with('success', 'Feature created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Feature $feature): Response
    {
        return Inertia::render('admin/features/show', [
            'feature' => $feature,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Feature $feature): Response
    {
        return Inertia::render('admin/features/edit', [
            'feature' => $feature,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFeatureRequest $request, Feature $feature)
    {
        $data = $request->validated();
        if ($request->hasFile('image')) {
            if ($feature->image) {
                Storage::delete($feature->image);
            }
            $data['image'] = $request->file('image')->storeAs('features/images', $request->file('image')->getClientOriginalName());
        }
        $this->featureService->update($feature->id, $data);

        return redirect()->route('admin.features.index')->with('success', 'Feature updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Feature $feature)
    {
        if ($feature->image) {
            Storage::delete($feature->image);
        }
        $feature->delete();

        return redirect()->back()->with('success', 'Feature deleted successfully');
    }
}
