<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

use App\Models\ticket_distribution;

class ticketDistributionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $ticketDistributions =  [
            [
                'ticket_id' => 1,
                'category_id' => 1,
                'option_id' => 1,
                'type' => 1,
                'min_qty' => 1,
                'max_qty' => 99999,
                'date_start' => null,
                'date_end' => null,
                'coupon_code' => null,
                'payment_method' => null,
                'isActive' => true,
            ],
            [
                'ticket_id' => 2,
                'category_id' => 1,
                'option_id' => 2,
                'type' => 2,
                'min_qty' => 1,
                'max_qty' => 99999,
                'date_start' => null,
                'date_end' => null,
                'coupon_code' => null,
                'payment_method' => null,
                'isActive' => true,
            ],
            [
                'ticket_id' => 3,
                'category_id' => 2,
                'option_id' => 3,
                'type' => 4,
                'min_qty' => 1,
                'max_qty' => 2,
                'date_start' => Carbon::create(2022, 12, 23, 0),
                'date_end' => Carbon::create(2022, 12, 23, 0)->endOfDay(),
                'coupon_code' => null,
                'payment_method' => null,
                'isActive' => true,
            ],
            [
                'ticket_id' => 4,
                'category_id' => 2,
                'option_id' => 3,
                'type' => 4,
                'min_qty' => 1,
                'max_qty' => 2,
                'date_start' => Carbon::create(2022, 12, 23, 0),
                'date_end' => Carbon::create(2022, 12, 23, 0)->endOfDay(),
                'coupon_code' => null,
                'payment_method' => null,
                'isActive' => true,
            ],
        ];

        ticket_distribution::insert($ticketDistributions);
    }
}
