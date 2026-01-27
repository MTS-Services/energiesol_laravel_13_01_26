<?php

namespace App\Services;

use App\Models\SolarInverter;
use App\Traits\DataTableTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SolarInverterService
{
    use DataTableTrait;

    public function __construct(protected SolarInverter $model)
    {
    }

    public function dataTable(Request $request)
    {
        $query = $this->getQuery();

        $searchableColumns = ['brand_title', 'title', 'description', 'note'];
        $filterableColumns = ['status'];
        $sortableColumns = ['created_at', 'brand_title', 'title', 'price', 'status'];

        return $this->applyDataTableFilters(
            $query,
            $request,
            $searchableColumns,
            $filterableColumns,
            $sortableColumns
        );
    }

    public function getQuery()
    {
        return $this->model->query();
    }

    public function create(array $data): SolarInverter
    {
        $data = $this->handleImageUploads($data);

        return $this->model->create($data);
    }

    public function update(int $solarInverterId, array $data): SolarInverter|bool
    {
        $solarInverter = $this->model->findOrFail($solarInverterId);

        if (! $solarInverter) {
            return false;
        }

        $data = $this->handleImageUploads($data, $solarInverter);
        $solarInverter->update($data);

        return $solarInverter;
    }

    public function delete(int $solarInverterId): bool
    {
        $solarInverter = $this->model->findOrFail($solarInverterId);

        if (! $solarInverter) {
            return false;
        }

        $this->deleteImages($solarInverter);

        return $solarInverter->delete();
    }

    private function handleImageUploads(array $data, ?SolarInverter $solarInverter = null): array
    {
        $imagesFields = ['brand_logo', 'image', 'charger_image', 'battery_image'];

        foreach ($imagesFields as $field) {
            if (isset($data[$field]) && is_file($data[$field])) {
                if ($solarInverter) {
                    $this->deleteImage($solarInverter->{$field});
                }
                $data[$field] = $this->uploadImage($data[$field]);
            }
        }

        return $data;
    }

    private function uploadImage($image): string
    {
        return $image->store('images/solar-inverters', 'public');
    }

    private function deleteImages(SolarInverter $solarInverter): void
    {
        $this->deleteImage($solarInverter->brand_logo);
        $this->deleteImage($solarInverter->image);
        $this->deleteImage($solarInverter->charger_image);
        $this->deleteImage($solarInverter->battery_image);
    }

    private function deleteImage(?string $path): void
    {
        if ($path && Storage::disk('public')->exists($path)) {
            Storage::disk('public')->delete($path);
        }
    }

    public function latest(int $limit = 6)
    {
        return $this->model->latest()->limit($limit)->orderBy('id', 'asc')->get();
    }

    public function all($sort_by = 'id', $sort_order = 'asc')
    {
        return $this->model->orderBy($sort_by, $sort_order)->get();
    }   
    public function find($id, $coulmn = 'id')
    {
        return $this->model->where($coulmn, $id)->first();
    }
}
