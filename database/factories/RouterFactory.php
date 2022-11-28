<?php

namespace Database\Factories;

use App\Models\Router;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;


class RouterFactory extends Factory
{
    protected $model = Router::class;

    public function definition()
    {
        return [
                'name'=>  $name = $this->faker->sentence(3),
                'slug' => \str($name)->slug(),
                'host'=> $this->faker->ipv4(),
                'user'=>  $this->faker->userName(),
                'pass'=>  $this->faker->password(),
                'port'=> $this->faker->numberBetween(4),
                'location'=> $this->faker->city(),
        ];
    }
}
