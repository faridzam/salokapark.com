<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\category;

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

        category::insert($categories);
    }
}
