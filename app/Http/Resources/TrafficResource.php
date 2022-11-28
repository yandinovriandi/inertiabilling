<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TrafficResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'Rx' => [
                'x' => date('H:i:s'),
                'y' => $this['rx-bits-per-second'],
            ],
            'Tx' => [
                'x' => date('H:i:s'),
                'y' => $this['tx-bits-per-second'],
            ],
        ];
    }
}
