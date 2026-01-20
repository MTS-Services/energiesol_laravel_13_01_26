<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SolarInverter\StoreSolarInverterRequest;
use App\Http\Requests\SolarInverter\UpdateSolarInverterRequest;
use App\Models\SolarInverter;
use App\Services\DataTableService;
use App\Services\SolarInverterService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class SolarInverterController extends Controller
{
    public function __construct(private DataTableService $dataTableService, protected SolarInverterService $solarInverterService)
    {
        //
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $query = SolarInverter::query();

        $result = $this->dataTableService->process($query, $request, [
            'searchable' => ['brand_title', 'title', 'description'],
            'filterable' => ['status'],
            'sortable' => ['id', 'brand_title', 'title', 'price', 'created_at'],
        ]);

        $filterOptions = [
            'status' => [
                ['label' => 'Active', 'value' => true],
                ['label' => 'Inactive', 'value' => false],
            ],
        ];

        return Inertia::render('admin/solar-inverters/index', [
            'solarInverters' => $result['data'],
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
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/solar-inverters/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSolarInverterRequest $request)
    {

        $data = $request->all();
        if($request->hasFile('image')) {
            $data['image'] = $request->file('image')->storeAs('solar-inverters/images', $request->file('image')->getClientOriginalName());
        }
        if($request->hasFile('brand_logo')) {
            $data['brand_logo'] = $request->file('brand_logo')->storeAs('solar-inverters/brand-logos', $request->file('brand_logo')->getClientOriginalName());
        }
        $this->solarInverterService->create($data);

        return redirect()->route('admin.solar-inverters.index')->with('success', 'Solar inverter created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(SolarInverter $solarInverter)
    {
        return Inertia::render('admin/solar-inverters/show', [
            'solarInverter' => $solarInverter,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SolarInverter $solarInverter)
    {
        return Inertia::render('admin/solar-inverters/edit', [
            'solarInverter' => $solarInverter,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSolarInverterRequest $request, SolarInverter $solarInverter)
    {
        $data = $request->all();
        if($request->hasFile('image')) {
            if($solarInverter->image) {
                Storage::delete($solarInverter->image);
            }
            $data['image'] = $request->file('image')->storeAs('solar-inverters/images', $request->file('image')->getClientOriginalName());
        }
        if($request->hasFile('brand_logo')) {
            if($solarInverter->brand_logo) {
                Storage::delete($solarInverter->brand_logo);
            }
            $data['brand_logo'] = $request->file('brand_logo')->storeAs('solar-inverters/brand-logos', $request->file('brand_logo')->getClientOriginalName());
        }
        $this->solarInverterService->update($solarInverter->id, $data);

        return redirect()->route('admin.solar-inverters.index')->with('success', 'Solar inverter updated successfully.');
    }
    
      
    /*
     * Remove the specified resource from storage.
     */
    public function destroy(SolarInverter $solarInverter)
    {
        $solarInverter->delete();

        return redirect()->back()->with('success', 'Solar inverter deleted successfully');
    }
}