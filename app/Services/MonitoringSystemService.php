<?php

namespace App\Services;

use App\Models\MonitoringSystem;

class MonitoringSystemService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected MonitoringSystem $model)
    {
        //
    }

    public function create(array $data): MonitoringSystem
    {
        return $this->model->create($data);
    }

    public function update(int $monitoringSystemId, array $data): MonitoringSystem|bool
    {

        $monitoringSystem = $this->model->findOrFail($monitoringSystemId);

        if (! $monitoringSystem) {
            return false;
        }

        $monitoringSystem->update($data);

        return $monitoringSystem;
    }
}
