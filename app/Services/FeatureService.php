<?php

namespace App\Services;

use App\Models\Feature;

class FeatureService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected Feature $model)
    {
        //
    }

    public function getQuery()
    {
        return $this->model->query();

    }

    public function create(array $data): Feature
    {
        return $this->model->create($data);
    }

    public function update(int $featureId, array $data): Feature|bool
    {

        $feature = $this->model->findOrFail($featureId);

        if (! $feature) {
            return false;
        }

        $feature->update($data);

        return $feature;
    }
}
