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
    public function latest(int $limit = 6)
    {
        return $this->model->latest()->limit($limit)->orderBy('id', 'asc')->get();
    }

    public function all($sort_by = 'id', $sort_order = 'asc')
    {
        return $this->model->orderBy($sort_by, $sort_order)->get();
    }   
}
