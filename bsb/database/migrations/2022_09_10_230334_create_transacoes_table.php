<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transacoes', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('parcelas');
            $table->
            $table->timestamps();

            // "installments": 1,
            // "installment_value": 2401,
            // "charge_id": 1684095,
            // "status": "waiting",
            // "total": 2401,
            // "payment": "credit_card"
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transacoes');
    }
};
