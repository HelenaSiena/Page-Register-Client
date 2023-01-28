$(document).ready(function() {

    /**JQuery Mask Plugin */
    $('#telefone').mask('(000) 00000-0000', {
        placeholder: '(DDD) + número do celular',
    });

    /**JQuery Validate */
    $('form').validate({ 
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira seu e-mail',
            telefone: 'Por favor, insira seu número de celular',
        },
        submitHandler: function(form){
            console.log(form);
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });
});