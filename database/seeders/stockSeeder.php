<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\stock;

class stockSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $stocks =  [
            [
                'ticket_id' => 1,
                'stock' => 999999999999999,
            ],
            [
                'ticket_id' => 2,
                'stock' => 999999999999999,
            ],
            [
                'ticket_id' => 3,
                'stock' => 500,
            ],
            [
                'ticket_id' => 4,
                'stock' => 2500,
            ],
        ];

        stock::insert($stocks);
    }
}
