$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');
    $('#phone').mask('(00) 00000-000')
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000')

    $('form').validate({
        messages: {
            nome: 'Por favor, digite o seu nome',
            email: 'Por favor, digite o seu email',
            telefone: 'Por favor, digite o seu telefone',
            cpf: 'Por favor, digite o seu CPF',
            endereco: 'Por favor, digite o seu endereço',
            cep: 'Por favor, digite o seu CEP',
            ida: 'Escolha uma data',
            volta: 'Escolha uma data'
        },
        submitHandler: function(form){
            console.log(form);
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Exitem ${camposIncorretos} campos incorretos`);
            }
        }
    })
})