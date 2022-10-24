<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\option;

class optionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $options =  [
            [
                'name' => 'Reguler Weekday',
                'type' => 'reguler',
                'discount' => NULL,
                'special_price' => NULL,
                'ticket_buy' => NULL,
                'ticket_bonus' => NULL,
                'cashback' => NULL,
                'description' => "Tiket terusan weekday saloka theme park. Bebas menaiki semua wahana",
            ],
            [
                'name' => 'Reguler Weekend',
                'type' => 'reguler',
                'discount' => NULL,
                'special_price' => NULL,
                'ticket_buy' => NULL,
                'ticket_bonus' => NULL,
                'cashback' => NULL,
                'description' => "Tiket terusan weekend saloka theme park. Bebas menaiki semua wahana",
            ],
            [
                'name' => 'Konser',
                'type' => 'others',
                'discount' => NULL,
                'special_price' => NULL,
                'ticket_buy' => NULL,
                'ticket_bonus' => NULL,
                'cashback' => NULL,
                'description' => "Konser di Saloka Theme Park",
            ],
        ];

        option::insert($options);
    }
}