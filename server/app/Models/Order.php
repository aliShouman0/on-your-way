<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    public function PickupInfo()
    {
        return $this->belongsTo(Pickup::class, "id", "order_id")->with("pickerInfo");
    }
    public function EndedPickupInfo()
    {
        return $this->belongsTo(Pickup::class, "id", "order_id")->with("completedPickupInfo")->with("canceledPickupInfo"); 
    }
    public function userInfo()
    {
        return $this->belongsTo(User::class, "user_id");
    }
}
