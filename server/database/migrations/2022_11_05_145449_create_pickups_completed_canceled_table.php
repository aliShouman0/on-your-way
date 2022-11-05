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
    }
 
    public function down()
    {
        Schema::dropIfExists('pickups_completed_canceled');
    }
};
