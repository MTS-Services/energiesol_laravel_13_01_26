<?php

namespace App\Services;

use App\Models\SolarInverter;

class SolarInverterService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected SolarInverter $model)
    {
        //
    }

    public function getQuery()
    {
        return $this->model->query();

    }
    public function create(array $data): SolarInverter
    {
        return $this->model->create($data);
    }

    public function update(int $solarInverterId, array $data): SolarInverter|bool
    {
        
        $solarInverter = $this->model->findOrFail($solarInverterId);

        if(!$solarInverter) {
            return false;
        }

        $solarInverter->update($data);
        
        return $solarInverter;
    }
}
