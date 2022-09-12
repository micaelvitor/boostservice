<script type='text/javascript'>var s=document.createElement('script');s.type='text/javascript';var v=parseInt(Math.random()*1000000);s.src='https://sandbox.gerencianet.com.br/v1/cdn/4c6c8eb9e347d366ada8cdcc28d18365/'+v;s.async=false;s.id='4c6c8eb9e347d366ada8cdcc28d18365';if(!document.getElementById('4c6c8eb9e347d366ada8cdcc28d18365')){document.getElementsByTagName('head')[0].appendChild(s);};$gn={validForm:true,processed:false,done:{},ready:function(fn){$gn.done=fn;}};</script>
<script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
<script>    
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const serverURL = window.location.host
    let array = atob(urlParams.get('validation'))
    array = JSON.parse(array)
    $gn.ready(function(checkout) {

        var callback = function(error, response) {
            if(error) {
                // Trata o erro ocorrido
                console.error(error);
            } else {
                // Trata a resposta
                let paymentToken = response.data.payment_token
                console.log(array);
                console.log(response);
                // completeTransaction(paymentToken)
            }
        };

        checkout.getPaymentToken({
        brand: 'visa', // bandeira do cartão
        number: array['cardNumber'], // número do cartão
        cvv: array['cvv'], // código de segurança
        expiration_month: array['expira'].split("/")[0], // mês de vencimento
        expiration_year: array['expira'].split("/")[1] // ano de vencimento
        }, callback);

    })

    function completeTransaction(paymentToken){
        return console.log(paymentToken)
        $.post('http://' + serverURL + '/api/payWithCard', {paymentToken: paymentToken}, function(response){
            console.log(response)
        })
    }

</script>