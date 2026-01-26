<?php

namespace App\Services;

use App\Models\Advantage;

class AdvantageService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected Advantage $model)
    {
        //
    }

    public function getQuery()
    {
        return $this->model->query();

    }

    public function create(array $data): Advantage
    {
        return $this->model->create($data);
    }

    public function update(int $advantageId, array $data): Advantage|bool
    {

        $advantage = $this->model->findOrFail($advantageId);

        if (! $advantage) {
            return false;
        }

        $advantage->update($data);

        return $advantage;
    }

    public function latest(int $limit = 6)
    {
        return $this->model->latest()->limit($limit)->get();
    }
}
