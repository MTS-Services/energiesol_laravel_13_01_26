<?php

namespace App\Services;

use App\Models\SystemSetting;

class SystemSettingService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected SystemSetting $model)
    {
        //
    }

    public function update(int $systemSettingId, array $data): SystemSetting|bool
    {
        $systemSetting = $this->model->findOrFail($systemSettingId);

        if (! $systemSetting) {
            return false;
        }

        $systemSetting->update($data);

        return $systemSetting;
    }

    public function getSystemSettings()
    {
        return $this->model->all()->first();
    }
}
