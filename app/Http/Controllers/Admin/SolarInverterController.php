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

    // Solar Inverter Image
    if($request->hasFile('image')) {
        $data['image'] = $request->file('image')->storeAs('solar-inverters/images', $request->file('image')->getClientOriginalName(), 'public');
    }

    // Solar Inverter Brand Logo
    if($request->hasFile('brand_logo')) {
        $data['brand_logo'] = $request->file('brand_logo')->storeAs('solar-inverters/brand-logos', $request->file('brand_logo')->getClientOriginalName(), 'public');
    }

    // Battery Image
    if($request->hasFile('battery_image')) {
        $data['battery_image'] = $request->file('battery_image')->storeAs('solar-inverters/battery-images', $request->file('battery_image')->getClientOriginalName(), 'public');
    }

    // Battery Brand Logo
    if($request->hasFile('battery_brand_logo')) {
        $data['battery_brand_logo'] = $request->file('battery_brand_logo')->storeAs('solar-inverters/battery-brand-logos', $request->file('battery_brand_logo')->getClientOriginalName(), 'public');
    }

    // Charger Image
    if($request->hasFile('charger_image')) {
        $data['charger_image'] = $request->file('charger_image')->storeAs('solar-inverters/charger-images', $request->file('charger_image')->getClientOriginalName(), 'public');
    }

    // Charger Brand Logo
    if($request->hasFile('charger_brand_logo')) {
        $data['charger_brand_logo'] = $request->file('charger_brand_logo')->storeAs('solar-inverters/charger-brand-logos', $request->file('charger_brand_logo')->getClientOriginalName(), 'public');
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

    // Solar Inverter Image
    if($request->hasFile('image')) {
        if($solarInverter->image) {
            Storage::delete($solarInverter->image);
        }
        $data['image'] = $request->file('image')->storeAs('solar-inverters/images', $request->file('image')->getClientOriginalName(), 'public');
    }

    if($request->delete_existing_image && !$request->image) {
        $data['image'] = null;
        unset($data['delete_existing_image']);
        Storage::delete($solarInverter->image);
    }

    if(!$request->delete_existing_image && !$request->image) {
         unset($data['image']);
    }


    // Solar Inverter Brand Logo
    if($request->hasFile('brand_logo')) {
        if($solarInverter->brand_logo) {
            Storage::delete($solarInverter->brand_logo);
        }
        $data['brand_logo'] = $request->file('brand_logo')->storeAs('solar-inverters/brand-logos', $request->file('brand_logo')->getClientOriginalName(), 'public');
    }

    if($request->delete_existing_brand_logo && !$request->brand_logo) {
        $data['brand_logo'] = null;
        unset($data['delete_existing_brand_logo']);
        Storage::delete($solarInverter->brand_logo);
    }
    if(!$request->delete_existing_brand_logo && !$request->brand_logo) {

        unset($data['brand_logo']);

    }

    // Battery Image
    if($request->hasFile('battery_image')) {
        if($solarInverter->battery_image) {
            Storage::delete($solarInverter->battery_image);
        }
        $data['battery_image'] = $request->file('battery_image')->storeAs('solar-inverters/battery-images', $request->file('battery_image')->getClientOriginalName(), 'public');
    }

    if($request->delete_existing_battery_image && !$request->battery_image) {
        $data['battery_image'] = null;
        unset($data['delete_existing_battery_image']);
        Storage::delete($solarInverter->battery_image);
    }
     if(!$request->delete_existing_battery_image && !$request->battery_image) {

       unset($data['battery_image']);

    }

    // Battery Brand Logo
    if($request->hasFile('battery_brand_logo')) {
        if($solarInverter->battery_brand_logo) {
            Storage::delete($solarInverter->battery_brand_logo);
        }
        $data['battery_brand_logo'] = $request->file('battery_brand_logo')->storeAs('solar-inverters/battery-brand-logos', $request->file('battery_brand_logo')->getClientOriginalName(), 'public');
    }

    if($request->delete_existing_battery_brand_logo && !$request->battery_brand_logo) {
        $data['battery_brand_logo'] = null;
        unset($data['delete_existing_battery_brand_logo']);
        Storage::delete($solarInverter->battery_brand_logo);
    }

    
    if(!$request->delete_existing_battery_brand_logo && !$request->battery_brand_logo) {
       unset($data['battery_brand_logo']);
    }

    // Charger Image
    if($request->hasFile('charger_image')) {
        if($solarInverter->charger_image) {
            Storage::delete($solarInverter->charger_image);
        }
        $data['charger_image'] = $request->file('charger_image')->storeAs('solar-inverters/charger-images', $request->file('charger_image')->getClientOriginalName(), 'public');
    }

    if($request->delete_existing_charger_image && !$request->charger_image) {
        $data['charger_image'] = null;
        unset($data['delete_existing_charger_image']);
        Storage::delete($solarInverter->charger_image);
    }
    if(!$request->delete_existing_charger_image && !$request->charger_image) {

        unset($data['charger_image']);
    }

    // Charger Brand Logo
    if($request->hasFile('charger_brand_logo')) {
        if($solarInverter->charger_brand_logo) {
            Storage::delete($solarInverter->charger_brand_logo);
        }
        $data['charger_brand_logo'] = $request->file('charger_brand_logo')->storeAs('solar-inverters/charger-brand-logos', $request->file('charger_brand_logo')->getClientOriginalName(), 'public');
    }

    if($request->delete_existing_charger_brand_logo && !$request->charger_brand_logo) {
        $data['charger_brand_logo'] = null;
        unset($data['delete_existing_charger_brand_logo']);
        Storage::delete($solarInverter->charger_brand_logo);
    }

    if(!$request->delete_existing_charger_brand_logo && !$request->charger_brand_logo) {

        unset($data['charger_brand_logo']);;
    }

    $this->solarInverterService->update($solarInverter->id, $data);

    return redirect()->route('admin.solar-inverters.index')->with('success', 'Solar inverter updated successfully.');
}
    
      
    /*
     * Remove the specified resource from storage.
     */
    public function destroy(SolarInverter $solarInverter)
    {
        $this->solarInverterService->delete($solarInverter->id);

        return redirect()->back()->with('success', 'Solar inverter deleted successfully');
    }
}