<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CanceledPickup extends Model
{
    use HasFactory;
    public function canceledPickupInfo()
    {
        return $this->belongsTo(Pickup::class, "pickup_id");
    }

}
