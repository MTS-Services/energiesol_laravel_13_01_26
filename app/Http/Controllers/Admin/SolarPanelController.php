<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\DataTableService;
use App\Services\SolarPanelService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SolarPanelController extends Controller
{
    

    public function __construct(private DataTableService $dataTableService, protected SolarPanelService $solarPanelService) {}

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $query = $this->solarPanelService->getQuery();
        $result = $this->dataTableService->process($query, $request, [
            'searchable' => ['title', 'brand_title', 'note'],
            'filterable' => ['status'],
            'sortable' => ['id', 'created_at'],
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
