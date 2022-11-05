<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
     
    public function up()
    {  Schema::create('user_types', function (Blueprint $table) {
        $table->id();
        $table->string("role");
        $table->timestamps();
    });
    Schema::create('users', function (Blueprint $table) {
        $table->id();
        $table->string("name");
        $table->string("birthday");
        $table->string("email");
        $table->string("phone");
        $table->string("address");
        $table->string("password");
        $table->string("avatar");
        $table->string("front_id_photo");
        $table->string("back_id_photo");
        $table->boolean("is_verified");
        $table->integer("rate");
        $table->integer("user_type_id")->references("id")->on("user_types");
        $table->timestamps();
    });
    }
 
    public function down()
    {
        Schema::dropIfExists('user_types');
        Schema::dropIfExists('users');
    }
};
