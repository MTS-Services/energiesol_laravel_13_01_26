<?php

namespace App\Services;

use App\Models\Partner;

class PartnerService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected Partner $model)
    {
        //
    }

    public function getQuery()
    {
        return $this->model->query();
    }

    public function create(array $data): Partner
    {
        return $this->model->create($data);
    }

    public function update(int $partnerId, array $data): Partner|bool
    {
        $partner = $this->model->findOrFail($partnerId);

        if (! $partner) {
            return false;
        }

        $partner->update($data);

        return $partner;
    }
}
