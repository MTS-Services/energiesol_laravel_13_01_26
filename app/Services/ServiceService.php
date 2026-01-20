<?php

namespace App\Services;

use App\Models\Service;

class ServiceService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected Service $model)
    {
        //
    }

    public function getQuery()
    {
        return $this->model->query();
    }

    public function create(array $data): Service
    {
        return $this->model->create($data);
    }

    public function update(int $serviceId, array $data): Service|bool
    {
        $service = $this->model->findOrFail($serviceId);

        if (! $service) {
            return false;
        }

        $service->update($data);

        return $service;
    }

    public function destroy(int $serviceId): bool
    {
        $service = $this->model->findOrFail($serviceId);

        if (! $service) {
            return false;
        }

        return $service->delete();
    }
}
