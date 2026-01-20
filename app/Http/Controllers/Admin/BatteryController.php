<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\BatteryWithCharger\UpdateBatteryWithChargerRequest;
use App\Models\BatteryWithCharger;
use App\Services\BatteryWithChargerService;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class BatteryController extends Controller
{
    public function __construct(protected BatteryWithChargerService $batteryWithChargerService)
    {
        //
    }

    /**
     * Show the form for editing the specified resource, or create if not exists.
     */
    public function edit(): Response
    {
        $battery = BatteryWithCharger::firstOrCreate(['type' => 'battery']);

        return Inertia::render('admin/batteries/edit', [
            'battery' => $battery,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBatteryWithChargerRequest $request)
    {

        $battery = BatteryWithCharger::firstOrCreate(['type' => 'battery']);

        $data = $request->all();

        if ($request->hasFile('yes_image')) {

            if ($battery->yes_image) {

                Storage::delete($battery->yes_image);

            }

            $data['yes_image'] = $request->file('yes_image')->storeAs('batteries/yes_images', $request->file('yes_image')->getClientOriginalName());

        }

        if ($request->hasFile('no_image')) {

            if ($battery->no_image) {

                Storage::delete($battery->no_image);

            }

            $data['no_image'] = $request->file('no_image')->storeAs('batteries/no_images', $request->file('no_image')->getClientOriginalName());

        }

        $this->batteryWithChargerService->update($battery->id, $data);

        return redirect()->back()->with('success', 'Battery updated successfully.');

    }
}
