<?php

namespace App\Services;

use App\Models\SolarPanel;

class SolarPanelService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected SolarPanel $model)
    {
        //
    }

    public function getQuery()
    {
        return $this->model->query();

    }
    public function create(array $data): SolarPanel
    {
        return $this->model->create($data);
    }

    public function update(int $solarPanelId, array $data): SolarPanel|bool
    {
        
        $solarPanel = $this->model->findOrFail($solarPanelId);

        if(!$solarPanel) {
            return false;
        }

        $solarPanel->update($data);
        
        return $solarPanel;
    }
}
