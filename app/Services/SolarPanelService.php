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
}
