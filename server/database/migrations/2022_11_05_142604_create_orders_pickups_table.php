<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->integer("user_id")->references("id")->on("users");
            $table->string("from");
            $table->string("to");
            $table->string("description");
            $table->integer("pay");
            $table->string("main_image");
            $table->string("image1");
            $table->string("image2");
            $table->boolean("picked");
            $table->timestamps();
        });
        Schema::create('pickups', function (Blueprint $table) {
            $table->id();
            $table->integer("picker_id")->references("id")->on("users");
            $table->integer("order_id")->references("id")->on("orders");
            $table->string("status");
            $table->string("location");
            $table->string("arrived_time");
            $table->integer("approved");
            $table->string("time_picked");
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('orders');
        Schema::dropIfExists('pickups');
    }
};
