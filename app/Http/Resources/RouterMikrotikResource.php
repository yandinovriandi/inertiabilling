<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RouterMikrotikResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'uptime' => $this['uptime'],
            'version' => $this['version'],
            'freeMemory' => $this['free-memory'],
            'totalMemory' => $this['total-memory'],
            'cpu' => $this['cpu'],
            'cpuFrequency' => $this['cpu-frequency'],
            'cpuLoad' => $this['cpu-load'],
            'freeHdd' => $this['free-hdd-space'],
            'totalHdd' => $this['total-hdd-space'],
            'arcName' => $this['architecture-name'],
            'boardName' => $this['board-name'],
        ];
    }
}
