    
export default function getPaymentToken(){

    $gn.ready(function (checkout) {

        checkout.getPaymentToken(
            {
                brand: 'visa', // bandeira do cartão
                number: '4012001038443335', // número do cartão
                cvv: '123', // código de segurança
                expiration_month: '05', // mês de vencimento
                expiration_year: '2021' // ano de vencimento
            },
            function (error, response) {
                if (error) {
                    // Trata o erro ocorrido
                    console.error(error);
                } else {
                    // Trata a resposta
                    console.log(response);
                }
            }
        )
    
    })
    

}



