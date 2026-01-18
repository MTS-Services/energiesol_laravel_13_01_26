<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Value\StoreValueRequest;
use App\Http\Requests\Value\UpdateValueRequest;
use App\Models\Value;
use App\Services\DataTableService;
use App\Services\ValueService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ValueController extends Controller
{
    public function __construct(private DataTableService $dataTableService, protected ValueService $valueService)
    {
        //
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $query = Value::query();

        $result = $this->dataTableService->process($query, $request, [
            'searchable' => ['title', 'description'],
            'sortable' => ['id', 'title', 'created_at'],
        ]);

        return Inertia::render('admin/values/index', [
            'values' => $result['data'],
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
    public function create()
    {
        return Inertia::render('admin/values/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreValueRequest $request)
    {

        $data = $request->all();
        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->storeAs('values/images', $request->file('image')->getClientOriginalName());
        }
        $this->valueService->create($data);

        return redirect()->route('admin.values.index')->with('success', 'Value created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Value $value)
    {
        return Inertia::render('admin/values/show', [
            'value' => $value,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Value $value)
    {
        return Inertia::render('admin/values/edit', [
            'value' => $value,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateValueRequest $request, Value $value)
    {
        $data = $request->all();
        if ($request->hasFile('image')) {
            if ($value->image) {
                Storage::delete($value->image);
            }
            $data['image'] = $request->file('image')->storeAs('values/images', $request->file('image')->getClientOriginalName());
        }
        $this->valueService->update($value->id, $data);

        return redirect()->route('admin.values.index')->with('success', 'Value updated successfully.');
    }

    /*
     * Remove the specified resource from storage.
     */
    public function destroy(Value $value)
    {
        $value->delete();

        return redirect()->back()->with('success', 'Value deleted successfully');
    }
}
