<?php

namespace App\Services;

use App\Models\Estimate;

class EstimateService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected Estimate $model)
    {
        //
    }

    public function create($data)
    {
        return $this->model->create($data);
    }

    public function find($id, $column = 'id')
    {
        return $this->model->where($column, $id)->first();
    }
}
