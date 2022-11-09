<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompletedPickup extends Model
{
    use HasFactory;
    public function completedPickupInfo()
    {
        return $this->belongsTo(Pickup::class, "pickup_id");
    }

}
