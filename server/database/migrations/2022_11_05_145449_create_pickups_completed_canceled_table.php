<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{ 
    public function up()
    {
        Schema::create('canceled_pickups', function (Blueprint $table) {
            $table->id();
            $table->integer("pickup_id")->references("id")->on("pickups");
            $table->integer("canceled_by")->references("id")->on("users");
            $table->string("date_time");
            $table->string("reason");
            $table->timestamps();
        });
        Schema::create('completed_pickups', function (Blueprint $table) {
            $table->id();
            $table->integer("pickup_id")->references("id")->on("pickups");
            $table->string("picker_comment"); 
            $table->string("receiver_comment"); 
            $table->integer("picker_rated"); 
            $table->integer("receiver_rated"); 
            $table->string("date_time");
            $table->timestamps();
        });
    }
 
    public function down()
    {
        Schema::dropIfExists('pickups_completed_canceled');
    }
};
