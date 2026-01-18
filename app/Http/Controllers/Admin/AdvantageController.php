<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Advantage\StoreAdvantageRequest;
use App\Http\Requests\Advantage\UpdateAdvantageRequest;
use App\Models\Advantage;
use App\Services\AdvantageService;
use App\Services\DataTableService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class AdvantageController extends Controller
{
    public function __construct(private DataTableService $dataTableService, protected AdvantageService $advantageService)
    {
        //
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $query = Advantage::query();

        $result = $this->dataTableService->process($query, $request, [
            'searchable' => ['title', 'description'],
            'sortable' => ['id', 'title', 'created_at'],
        ]);

        return Inertia::render('admin/advantages/index', [
            'advantages' => $result['data'],
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
        return Inertia::render('admin/advantages/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAdvantageRequest $request)
    {
        $data = $request->validated();
        if ($request->hasFile('icon')) {
            $data['icon'] = $request->file('icon')->storeAs('advantages/icons', $request->file('icon')->getClientOriginalName());
        }
        $this->advantageService->create($data);

        return redirect()->route('admin.advantages.index')->with('success', 'Advantage created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Advantage $advantage): Response
    {
        return Inertia::render('admin/advantages/show', [
            'advantage' => $advantage,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Advantage $advantage): Response
    {
        return Inertia::render('admin/advantages/edit', [
            'advantage' => $advantage,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAdvantageRequest $request, Advantage $advantage)
    {
        $data = $request->validated();
        if ($request->hasFile('icon')) {
            if ($advantage->icon) {
                Storage::delete($advantage->icon);
            }
            $data['icon'] = $request->file('icon')->storeAs('advantages/icons', $request->file('icon')->getClientOriginalName());
        }
        $this->advantageService->update($advantage->id, $data);

        return redirect()->route('admin.advantages.index')->with('success', 'Advantage updated successfully.');
    }

    /*
     * Remove the specified resource from storage.
     */
    public function destroy(Advantage $advantage)
    {
        if ($advantage->icon) {
            Storage::delete($advantage->icon);
        }
        $advantage->delete();

        return redirect()->back()->with('success', 'Advantage deleted successfully');
    }
}
