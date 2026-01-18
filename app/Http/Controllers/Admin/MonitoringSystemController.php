<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\MonitoringSystem\UpdateMonitoringSystemRequest;
use App\Models\MonitoringSystem;
use App\Services\MonitoringSystemService;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class MonitoringSystemController extends Controller
{
    public function __construct(protected MonitoringSystemService $monitoringSystemService)
    {
        //
    }

    /**
     * Show the form for editing the specified resource, or create if not exists.
     */
    public function edit(): Response
    {
        $monitoringSystem = MonitoringSystem::firstOrCreate([]);

        return Inertia::render('admin/monitoring-system/edit', [
            'monitoringSystem' => $monitoringSystem,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMonitoringSystemRequest $request)
    {
        $monitoringSystem = MonitoringSystem::firstOrCreate([]);
        $data = $request->all();
        if ($request->hasFile('image')) {
            if ($monitoringSystem->image) {
                Storage::delete($monitoringSystem->image);
            }
            $data['image'] = $request->file('image')->storeAs('monitoring-systems/images', $request->file('image')->getClientOriginalName());
        }
        $this->monitoringSystemService->update($monitoringSystem->id, $data);

        return redirect()->back()->with('success', 'Monitoring System updated successfully.');
    }
}
