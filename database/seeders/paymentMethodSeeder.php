<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\payment_method;

class paymentMethodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        $payment_methods =  [

            [
                'name' => "gopay",
                'type' => "gopay",
                'corporate_name' => "goto",
            ],
            [
                'name' => "qris",
                'type' => "qris",
                'corporate_name' => "Bank Indonesia",
            ],
            [
                'name' => "alfamart",
                'type' => "cstore",
                'corporate_name' => "Alfamart",
            ],

        ];

        payment_method::insert($payment_methods);

    }
}
