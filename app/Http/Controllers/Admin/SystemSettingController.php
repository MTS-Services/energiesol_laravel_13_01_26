<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SystemSetting\UpdateSystemSettingRequest;
use App\Models\SystemSetting;
use App\Services\SystemSettingService;
use Inertia\Inertia;
use Inertia\Response;

class SystemSettingController extends Controller
{
    public function __construct(protected SystemSettingService $systemSettingService)
    {
        //
    }

    /**
     * Show the form for editing the specified resource, or create if not exists.
     */
    public function edit(): Response
    {
        $systemSetting = SystemSetting::firstOrCreate([]);

        return Inertia::render('admin/system-setting/edit', [
            'systemSetting' => $systemSetting,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSystemSettingRequest $request)
    {

        $systemSetting = SystemSetting::firstOrCreate([]);

        $data = $request->all();
        $this->systemSettingService->update($systemSetting->id, $data);

        return Inertia::flash([
            'success' => 'System Settings updated successfully',
        ])->back();
    }
}
