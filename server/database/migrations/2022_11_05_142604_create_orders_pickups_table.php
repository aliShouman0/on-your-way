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
            $table->boolean("picked")->default(0);
            $table->timestamps();
        });
        Schema::create('pickups', function (Blueprint $table) {
            $table->id();
            $table->integer("picker_id")->references("id")->on("users");
            $table->integer("order_id")->references("id")->on("orders");
            $table->string("status")->default("Not Started");
            $table->string("location")->default("NA");
            $table->string("arrived_time")->default("NA");
            $table->boolean("approved")->default(1);
            $table->boolean("completed")->default(0);
            $table->boolean("canceled")->default(0);
            $table->string("time_picked")->default(time());
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('orders');
        Schema::dropIfExists('pickups');
    }
};
