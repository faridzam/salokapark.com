<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\reservation_option;

class reservationOptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $reservation_options =  [
            [
                'name' => 'Reguler',
                'type' => 'reguler',
                'discount' => NULL,
                'special_price' => NULL,
                'ticket_buy' => NULL,
                'ticket_bonus' => NULL,
                'cashback' => NULL,
                'description' => "Tiket Reguler",
            ],
        ];

        reservation_option::insert($reservation_options);


    }
}
