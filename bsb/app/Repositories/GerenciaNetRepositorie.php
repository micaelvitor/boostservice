<?php 

namespace App\Repositories;

use Gerencianet\Exception\GerencianetException;
use Gerencianet\Gerencianet;
use Exception;

class GerenciaNetRepositorie 
{

    private $clientId = 'Client_Id_2066baf2f176c44cf64574889262c631b8221ff5';
    private $clientSecreet = 'Client_Secret_c4a3671eb62f2d020208ab567bfebab02f26097d';

    public function processarPagamento($paymentToken){

        $options = [
            'client_id' => $this->clientId,
            'client_secret' => $this->clientSecreet,
            'sandbox' => true // altere conforme o ambiente (true = Homologação e false = producao)
        ];

        $item_1 = [
            'name' => 'Boost Teste', // nome do item, produto ou serviço
            'amount' => 1, // quantidade
            'value' => 3000 // valor (1000 = R$ 10,00) (Obs: É possível a criação de itens com valores negativos. Porém, o valor total da fatura deve ser superior ao valor mínimo para geração de transações.)
        ];
        $items = [
            $item_1
        ];
        $metadata = array('notification_url'=>'https://localhost:/hookPayment');
        $customer = [
            'name' => 'Gorbadoc Oldbuck', // nome do cliente
            'cpf' => '04267484171', // cpf do cliente
            'phone_number' => '5144916523', // telefone do cliente
            'email' => 'oldbuck@gerencianet.com.br', // endereço de email do cliente
            'birth' => '1977-01-15' // data de nascimento do cliente
        ];
        $billingAddress = [
            'street' => 'Av JK',
            'number' => 909,
            'neighborhood' => 'Bauxita',
            'zipcode' => '35400000',
            'city' => 'Ouro Preto',
            'state' => 'MG'
        ];
        $discount = [
            'type' => 'currency',
            'value' => 599
        ];

        $credit_card = [
            'customer' => $customer,
            'installments' => 1, // número de parcelas em que o pagamento deve ser dividido
            'discount' =>$discount,
            'billing_address' => $billingAddress,
            'payment_token' => $paymentToken,
            'message' => 'teste\nteste\nteste\nteste'
        ];
        $payment = [
            'credit_card' => $credit_card // forma de pagamento (credit_card = cartão)
        ];
        $body = [
            'items' => $items,
            // 'metadata' =>$metadata,
            'payment' => $payment
        ];
        $retorno = [];
        try {
            $api = new Gerencianet($options);
            $pay_charge = $api->oneStep([],$body);
            $retorno['sucesso'] = $pay_charge;
        } catch (GerencianetException $e) {
            $retorno['codigo_erro'] = $e->code;
            $retorno['error'] = $e->error;
            $retorno['descricao'] = $e->errorDescription;
        } catch (Exception $e) {
            $retorno['execao'] = $e->getMessage();
        }

        return $retorno;

    }

    public function errorHandler($errorCode){

        $http_status = '';

        switch ($errorCode) {
            case 3500018:
                $http_status = 406;
                break;
            
            default:
                $http_status = 400;
                break;
        }
        
        return $http_status;

    }
    
}
