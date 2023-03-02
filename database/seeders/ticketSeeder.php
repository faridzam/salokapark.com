<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ticket;
use App\Models\ticket_zeals;

class ticketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $tickets =  [
            [
                'name' => 'Reguler Weekday Ticket',
                'price' => 120000,
            ],
            [
                'name' => 'Reguler Weekend Ticket',
                'price' => 150000,
            ],
            [
                'name' => 'Konser - Sheila on 7 (pre-sale)',
                'price' => 150000,
            ],
            [
                'name' => 'Konser - Sheila on 7',
                'price' => 250000,
            ],
            [
                'name' => 'Holiday - Natal dan Tahun Baru 2022',
                'price' => 150000,
            ],
        ];

        // ticket_zeals::insert($tickets);
        ticket::insert($tickets);
    }
}
