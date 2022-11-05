<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{ 
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->boolean("ended")->after("picked");
        });
    }
 
    public function down()
    {
        //
    }
};
