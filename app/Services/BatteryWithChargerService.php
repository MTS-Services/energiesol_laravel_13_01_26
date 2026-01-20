<?php

namespace App\Services;

use App\Models\BatteryWithCharger;

class BatteryWithChargerService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected BatteryWithCharger $model)
    {
        //
    }

    public function getQuery()
    {
        return $this->model->query();

    }

    public function create(array $data): BatteryWithCharger
    {
        return $this->model->create($data);
    }

    public function update(int $batteryWithChargerId, array $data): BatteryWithCharger|bool
    {

        $batteryWithCharger = $this->model->findOrFail($batteryWithChargerId);

        if (! $batteryWithCharger) {
            return false;
        }

        $batteryWithCharger->update($data);

        return $batteryWithCharger;
    }
}
