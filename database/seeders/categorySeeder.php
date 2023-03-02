<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\category;
use App\Models\category_zeals;

class categorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $categories =  [
            [
                'name' => 'Reguler',
            ],
            [
                'name' => 'Events',
            ],
            [
                'name' => 'Holiday',
            ],
            [
                'name' => 'Reguler-Events',
            ],
        ];

        category_zeals::insert($categories);
        category::insert($categories);
    }
}
