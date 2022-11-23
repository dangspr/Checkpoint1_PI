
const ParticipanteA = [5, 8, 4, 9, 5];
const ParticipanteB = [8, 7, 8, 6, 8];
const ParticipanteC = [7, 5, 10, 8, 3];

/* Parte 01 - Calcular Media*/

function calculaMedia(array) {
    let soma = 0;

    for (let i = 0; i < array.length; i++) {
        soma = soma + array[i];
    }

    return soma / array.length;
}

let resultado1 = calculaMedia(ParticipanteA);
let resultado2 = calculaMedia(ParticipanteB);
let resultado3 = calculaMedia(ParticipanteC);

/* Parte 02 - Indicar a maior nota*/

function retornaMaior(array) {

    let maiorNota = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i] > maiorNota) {
            maiorNota = array[i];
        }

    }

    return maiorNota;

}



/* Parte03 - Verificar Vencedor */

function competicao(ParticipanteA, ParticipanteB, ParticipanteC) {
    const Media1 = calculaMedia(ParticipanteA);
    const Media2 = calculaMedia(ParticipanteB);
    const Media3 = calculaMedia(ParticipanteC);

    if (Media1 > Media2 && Media1 > Media3) {
        return "ParticipanteA foi vencedor na média"
    } else if (Media2 > Media1 && Media2 > Media3) {
        return "ParticipanteB foi vencedor na média"
    } else if (Media3 > Media1 && Media3 > Media2) {
        return "ParticipanteC foi vencedor na média"
    }
}

return competicao()
