<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pickup extends Model
{
    use HasFactory;

    public function pickerInfo()
    {
        return $this->belongsTo(User::class, "picker_id");
    }

    public function completedPickupInfo()
    {
        return $this->belongsTo(CompletedPickup::class, "id", "pickup_id"); 
    }

    public function canceledPickupInfo()
    {
        return $this->belongsTo(CanceledPickup::class, "id", "pickup_id"); 
    }

    public function orderInfo()
    {
        return $this->belongsTo(Order::class, "order_id")->with("userInfo");
    }
}
