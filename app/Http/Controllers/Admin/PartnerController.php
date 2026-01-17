<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Partner\StorePartnerRequest;
use App\Http\Requests\Partner\UpdatePartnerRequest;
use App\Models\Partner;
use App\Services\DataTableService;
use App\Services\PartnerService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class PartnerController extends Controller
{
    public function __construct(private DataTableService $dataTableService, protected PartnerService $partnerService)
    {
        //
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $query = Partner::query();

        $result = $this->dataTableService->process($query, $request, [
            'searchable' => ['name'],
            'sortable' => ['id', 'name', 'created_at'],
        ]);

        return Inertia::render('admin/partners/index', [
            'partners' => $result['data'],
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
        return Inertia::render('admin/partners/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePartnerRequest $request)
    {
        $data = $request->validated();
        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->storeAs('partners/images', $request->file('image')->getClientOriginalName());
        }
        $this->partnerService->create($data);

        return redirect()->route('admin.partners.index')->with('success', 'Partner created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Partner $partner): Response
    {
        return Inertia::render('admin/partners/show', [
            'partner' => $partner,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Partner $partner): Response
    {
        return Inertia::render('admin/partners/edit', [
            'partner' => $partner,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePartnerRequest $request, Partner $partner)
    {
        $data = $request->validated();
        if ($request->hasFile('image')) {
            if ($partner->image) {
                Storage::delete($partner->image);
            }
            $data['image'] = $request->file('image')->storeAs('partners/images', $request->file('image')->getClientOriginalName());
        }
        $this->partnerService->update($partner->id, $data);

        return redirect()->route('admin.partners.index')->with('success', 'Partner updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Partner $partner)
    {
        if ($partner->image) {
            Storage::delete($partner->image);
        }
        $partner->delete();

        return redirect()->back()->with('success', 'Partner deleted successfully.');
    }
}
