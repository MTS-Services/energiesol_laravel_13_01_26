<?php

namespace App\Services;

use App\Models\Contact;

class ContactService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected Contact $model)
    {
        //
    }

    public function getQuery()
    {
        return $this->model->query();

    }

    public function create(array $data): Contact
    {
        return $this->model->create($data);
    }

    public function delete(int $contactId): bool
    {
        $contact = $this->model->findOrFail($contactId);

        if (! $contact) {
            return false;
        }

        return $contact->delete();
    }

    public function bulkDelete(array $contactIds): int
    {

      
        return $this->model->whereIn('id', $contactIds)->delete();
    }
}
