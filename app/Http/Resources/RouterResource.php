<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RouterResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name'=> $this->name,
            'slug' => $this->slug,
            'host' => $this->host,
            'user' => $this->user,
            'pass' => $this->pass,
            'port' => $this->port,
            'status' => $this->status,
            'location' => $this->location
        ];
    }
}
