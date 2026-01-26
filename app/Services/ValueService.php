<?php

namespace App\Services;

use App\Models\Value;

class ValueService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected Value $model)
    {
        //
    }

    public function getQuery()
    {
        return $this->model->query();

    }

    public function create(array $data): Value
    {
        return $this->model->create($data);
    }

    public function update(int $valueId, array $data): Value|bool
    {

        $value = $this->model->findOrFail($valueId);

        if (! $value) {
            return false;
        }

        $value->update($data);

        return $value;
    }

    public function latest(int $limit = 6)
    {
        return $this->model->latest()->limit($limit)->get();
    }
}
