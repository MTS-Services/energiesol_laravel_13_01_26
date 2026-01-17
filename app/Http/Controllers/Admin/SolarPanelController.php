<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SolarPanel\StoreSolarPanelRequest;
use App\Http\Requests\SolarPanel\UpdateSolarPanelRequest;
use App\Models\SolarPanel;
use App\Services\DataTableService;
use App\Services\SolarPanelService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class SolarPanelController extends Controller
{
    public function __construct(private DataTableService $dataTableService, protected SolarPanelService $solarPanelService)
    {
        //
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $query = SolarPanel::query();

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

        return Inertia::render('admin/solar-panels/index', [
            'solarPanels' => $result['data'],
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
        return Inertia::render('admin/solar-panels/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSolarPanelRequest $request)
    {

        $data = $request->all();
        if($request->hasFile('image')) {
            $data['image'] = $request->file('image')->storeAs('solar-panels/images', $request->file('image')->getClientOriginalName());
        }
        if($request->hasFile('brand_logo')) {
            $data['brand_logo'] = $request->file('brand_logo')->storeAs('solar-panels/brand-logos', $request->file('brand_logo')->getClientOriginalName());
        }
        $this->solarPanelService->create($data);

        return redirect()->route('admin.solar-panels.index')->with('success', 'Solar panel created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(SolarPanel $solarPanel)
    {
        return Inertia::render('admin/solar-panels/show', [
            'solarPanel' => $solarPanel,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SolarPanel $solarPanel)
    {
        return Inertia::render('admin/solar-panels/edit', [
            'solarPanel' => $solarPanel,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSolarPanelRequest $request, SolarPanel $solarPanel)
    {
        $data = $request->all();
        if($request->hasFile('image')) {
            if($solarPanel->image) {
                Storage::delete($solarPanel->image);
            }
            $data['image'] = $request->file('image')->storeAs('solar-panels/images', $request->file('image')->getClientOriginalName());
        }
        if($request->hasFile('brand_logo')) {
            if($solarPanel->brand_logo) {
                Storage::delete($solarPanel->brand_logo);
            }
            $data['brand_logo'] = $request->file('brand_logo')->storeAs('solar-panels/brand-logos', $request->file('brand_logo')->getClientOriginalName());
        }
        $this->solarPanelService->update($solarPanel->id, $data);

        return redirect()->route('admin.solar-panels.index')->with('success', 'Solar panel updated successfully.');
    }
    
      
    /*
     * Remove the specified resource from storage.
     */
    public function destroy(SolarPanel $solarPanel)
    {
        $solarPanel->delete();

        return redirect()->back()->with('success', 'Solar panel deleted successfully');
    }
}