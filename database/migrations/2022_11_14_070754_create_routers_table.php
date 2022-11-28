<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('routers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->string('host');
            $table->string('user');
            $table->string('pass');
            $table->string('port');
            $table->string('status')->default('aktif');
            $table->string('location');
            $table->timestamps();
        });
    }
};
