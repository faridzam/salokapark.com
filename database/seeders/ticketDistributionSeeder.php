<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

use App\Models\ticket_distribution;
use App\Models\ticket_distribution_zeals;

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
                'days' => null,
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
                'days' => null,
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
                'days' => null,
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
                'days' => null,
                'coupon_code' => null,
                'payment_method' => null,
                'isActive' => true,
            ],
            [
                'ticket_id' => 5,
                'category_id' => 3,
                'option_id' => 4,
                'type' => 6,
                'min_qty' => 1,
                'max_qty' => 999,
                'date_start' => Carbon::create(2022, 12, 24, 0),
                'date_end' => Carbon::create(2022, 12, 31, 0)->endOfDay(),
                'days' => null,
                'coupon_code' => null,
                'payment_method' => null,
                'isActive' => true,
            ],
        ];

        // ticket_distribution_zeals::insert($ticketDistributions);
        ticket_distribution::insert($ticketDistributions);
    }
}
