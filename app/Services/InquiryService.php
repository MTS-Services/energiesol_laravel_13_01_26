<?php

namespace App\Services;

use App\Models\Inquiry;

class InquiryService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected Inquiry $model)
    {
        //
    }

    public function getQuery()
    {
        return $this->model->query();

    }

    public function create(array $data): Inquiry
    {
        return $this->model->create($data);
    }

    public function toggleStatus(int $inquiryId): Inquiry|bool
    {
        $inquiry = $this->model->findOrFail($inquiryId);

        if (!$inquiry) {
            return false;
        }

        $inquiry->status = !$inquiry->status;
        $inquiry->save();

        return $inquiry;
    }

    public function delete(int $inquiryId): bool
    {
        $inquiry = $this->model->findOrFail($inquiryId);

        if (!$inquiry) {
            return false;
        }

        return $inquiry->delete();
    }
}
