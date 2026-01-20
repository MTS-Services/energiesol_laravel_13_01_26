<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Contact\StoreContactRequest;
use App\Models\Contact;
use App\Services\ContactService;
use App\Services\DataTableService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function __construct(private DataTableService $dataTableService, protected ContactService $contactService)
    {
        //
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $query = Contact::query();

        $result = $this->dataTableService->process($query, $request, [
            'searchable' => ['first_name', 'last_name', 'email', 'phone_number'],
            'sortable' => ['id', 'first_name', 'last_name', 'email', 'created_at'],
        ]);

        return Inertia::render('admin/contacts/index', [
            'contacts' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order'],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContactRequest $request)
    {
        $this->contactService->create($request->validated());

        return response()->json(['message' => 'Contact created successfully.'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        return Inertia::render('admin/contacts/show', [
            'contact' => $contact,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        $this->contactService->delete($contact->id);

        return redirect()->back()->with('success', 'Contact deleted successfully');
    }
}
