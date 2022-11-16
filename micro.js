/* 

Checkpoint de Programação Imperativa!

Olá, você foi contratado para executar este projeto.É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado.Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré - definidos. 

1 - Pipoca – 10 segundos(padrão);
2 - Macarrão – 8 segundos(padrão);
3 - Carne – 15 segundos(padrão);
4 - Feijão – 12 segundos(padrão);
5 - Brigadeiro – 8 segundos(padrão);

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade.Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente";
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

*/

var readlineSync = require('readline-sync');
var pratos = ['Pipoca','Macarrão','Carne','Feijão','Brigadeiro']
var led = ['Tempo Insuficiente!', 'Prato pronto, bom apetite!!!', 'Queimou!', 'Kabumm!' ,'Informe o tempo de preparo:','Escolha a sua opçao do menu:', 'Prato inexistente!']

function timer(option, time) {

    if (option == 1) {
        if (time < 10) {
            console.log(led[0]);
        }

        else if (time == 10 || time < 20) {
            console.log(led[1]);
        }

        else if (time > 20 && time < 30) {
            console.log(led[2]);

        }

        else {
            console.log(led[3]);
        }
    }

    else if (option == 2 || option == 5) {
        if (time < 8) {
            console.log(led[0]);
        }

        else if (time == 8 || time < 16) {
            console.log(led[1]);
        }

        else if (time > 16 && time < 32) {
            console.log(led[2]);

        }

        else {
            console.log(led[3]);
        }
    }

    else if (option == 3) {
        if (time < 15) {
            console.log(led[0]);
        }

        else if (time == 15 || time < 30) {
            console.log(led[1]);
        }

        else if (time > 30 && time < 45) {
            console.log(led[2]);

        }

        else {
            console.log(led[3]);
        }
    }

    else if (option == 4) {
        if (time < 12) {
            console.log(led[0]);
        }

        else if (time == 12 || time < 24) {
            console.log(led[1]);
        }

        else if (time > 24 && time < 36) {
            console.log(led[2]);

        }
        else {
            console.log(led[3]);
        }
    }

}




do {
    var option = parseInt(readlineSync.question(led[5]));
    switch (option) {
        case 1:
            console.log(pratos[0]);
            var time = parseInt(readlineSync.question(led[4]));
            timer(1, time);
            break;
        case 2:
            console.log(pratos[1]);
            var time = parseInt(readlineSync.question(led[4]));
            timer(2, time);
            break;
        case 3:
            console.log(pratos[2]);
            var time = parseInt(readlineSync.question(led[4]));
            timer(3, time);
            break;
        case 4:
            console.log(pratos[3]);
            var time = parseInt(readlineSync.question(led[4]));
            timer(4, time);
            break;
        case 5:
            console.log(pratos[4]);
            var time = parseInt(readlineSync.question(led[4]));
            timer(5, time);
            break;
        default:
            console.log(led[6])
            break;
    }
} while (option < 1 || option > 5);
