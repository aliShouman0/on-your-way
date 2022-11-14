<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{ 
    public function up()
    {
        Schema::table('pickups', function (Blueprint $table) {
            $table->boolean("live_location")->default(false)->after("canceled");
            $table->integer("latitude")->default(-1)->after("live_location");        
            $table->integer("longitude")->default(-1)->after("latitude");
            
        });
    }
 
    public function down()
    {
        //
    }
};
