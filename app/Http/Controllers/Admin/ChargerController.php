<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\BatteryWithCharger\UpdateBatteryWithChargerRequest;
use App\Models\BatteryWithCharger;
use App\Services\BatteryWithChargerService;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ChargerController extends Controller
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
        $charger = BatteryWithCharger::firstOrCreate(['type' => 'charger']);

        return Inertia::render('admin/chargers/edit', [
            'charger' => $charger,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBatteryWithChargerRequest $request)
    {

        $charger = BatteryWithCharger::firstOrCreate(['type' => 'charger']);

        $data = $request->all();

        if ($request->hasFile('yes_image')) {

            if ($charger->yes_image) {

                Storage::delete($charger->yes_image);

            }

            $data['yes_image'] = $request->file('yes_image')->storeAs('chargers/yes_images', $request->file('yes_image')->getClientOriginalName());

        }

        if ($request->hasFile('no_image')) {

            if ($charger->no_image) {

                Storage::delete($charger->no_image);

            }

            $data['no_image'] = $request->file('no_image')->storeAs('chargers/no_images', $request->file('no_image')->getClientOriginalName());

        }

        $this->batteryWithChargerService->update($charger->id, $data);

        return redirect()->back()->with('success', 'Charger updated successfully.');

    }
}
