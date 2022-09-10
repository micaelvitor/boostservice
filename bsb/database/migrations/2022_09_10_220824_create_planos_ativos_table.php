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
        Schema::create('planos_ativos', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->bigInteger('mmr_na_compra');
            $table->bigInteger('mmr_atual');
            $table->bigInteger('mmr_desejado');
            $table->string('metodo_pagamento');
            $table->string('booster')->default('Nenhum booster selecionou seu boost, aguarde');
            $table->integer('booster_id')->default(0);
            $table->tinyInteger('ativo')->default(1);
            $table->string('status')->default('Em andamento');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('planos_ativos');
    }
};
