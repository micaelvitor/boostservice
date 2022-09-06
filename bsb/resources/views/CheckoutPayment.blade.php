<script type='text/javascript'>var s=document.createElement('script');s.type='text/javascript';var v=parseInt(Math.random()*1000000);s.src='https://sandbox.gerencianet.com.br/v1/cdn/4c6c8eb9e347d366ada8cdcc28d18365/'+v;s.async=false;s.id='4c6c8eb9e347d366ada8cdcc28d18365';if(!document.getElementById('4c6c8eb9e347d366ada8cdcc28d18365')){document.getElementsByTagName('head')[0].appendChild(s);};$gn={validForm:true,processed:false,done:{},ready:function(fn){$gn.done=fn;}};</script>
        <script>    

        $gn.ready(function(checkout) {
 
            var callback = function(error, response) {
            if(error) {
                // Trata o erro ocorrido
                console.error(error);
            } else {
                // Trata a resposta
                console.log(response);
            }
            };

            checkout.getPaymentToken({
            brand: 'visa', // bandeira do cartão
            number: '4012001038443335', // número do cartão
            cvv: '123', // código de segurança
            expiration_month: '05', // mês de vencimento
            expiration_year: '2021' // ano de vencimento
            }, callback);

        })
        //.post(confirmar_paymentToken)('id' ' payment_code ')
</script>