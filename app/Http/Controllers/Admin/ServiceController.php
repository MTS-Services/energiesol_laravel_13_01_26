<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Service\StoreServiceRequest;
use App\Http\Requests\Service\UpdateServiceRequest;
use App\Models\Service;
use App\Services\DataTableService;
use App\Services\ServiceService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rules\In;
use Inertia\Inertia;
use Inertia\Response;

class ServiceController extends Controller
{
    public function __construct(private DataTableService $dataTableService, protected ServiceService $serviceService)
    {
        //
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {



        $query = Service::query();

        $result = $this->dataTableService->process($query, $request, [
            'searchable' => ['title'],
            'sortable' => ['id', 'title', 'created_at'],
        ]);


        return Inertia::render('admin/services/index', [
            'services' => $result['data'],
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
        return Inertia::render('admin/services/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreServiceRequest $request)
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->storeAs('services/images', $request->file('image')->getClientOriginalName());
        }

        $this->serviceService->create($data);

        return redirect()->route('admin.services.index')->with('success', 'Service created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Service $service): Response
    {
        return Inertia::render('admin/services/show', [
            'service' => $service,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service): Response
    {
        return Inertia::render('admin/services/edit', [
            'service' => $service,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateServiceRequest $request, Service $service)
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            if ($service->image) {
                Storage::delete($service->image);
            }
            $data['image'] = $request->file('image')->storeAs('services/images', $request->file('image')->getClientOriginalName());
        } elseif ($request->boolean('remove_image')) {
            if ($service->image) {
                Storage::delete($service->image);
            }
            $data['image'] = null;
        }

        $this->serviceService->update($service->id, $data);

        return redirect()->route('admin.services.index')->with('success', 'Service updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
    {
        if ($service->image) {
            Storage::delete($service->image);
        }

        $this->serviceService->destroy($service->id);

        return redirect()->back()->with('success', 'Service deleted successfully.');
    }
}
