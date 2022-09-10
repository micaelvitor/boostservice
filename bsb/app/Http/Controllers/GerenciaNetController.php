<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\GerenciaNetRepositorie;


class GerenciaNetController extends Controller
{

    public function processCardPayment(Request $request){
        
        $gerenciaNetProcessor = new GerenciaNetRepositorie();
        $paymentToken = $request->only('paymentToken')['paymentToken'];
        $retorno = $gerenciaNetProcessor->processarPagamento($paymentToken);
        $http_status = 200;
        if (isset($retorno['error'])) {
            $http_status = $gerenciaNetProcessor->errorHandler($retorno['codigo_erro']);
        }
        return response()->json($retorno,$http_status);
    }

}
