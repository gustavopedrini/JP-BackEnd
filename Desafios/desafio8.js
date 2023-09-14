/** 
* DESAFIO 8) Leia um array referente a notas de uma prova. Informe a maior nota, a menor notae a média das notas da prova. Imprima quais os alunos tiraram a menor nota e a maior nota. Para saber  quais alunos tiraram a nota maior e menor imprima o índice do vetor (equivalente ao número da chamada do aluno).
**/

function informacoesNotas(notas){
    let maioresNotas = [];
    let menoresNotas = [];
    let maiorNota = 0;
    let menorNota = 10;
    let somaNotas = 0;
    
    for(let i = 0; i < notas.length; i++){
        if(notas[i] > maiorNota){
            maiorNota = notas[i];
        }

        if(notas[i] < menorNota){
            menorNota = notas[i];
        }

        somaNotas += notas[i];
    }
    
    let media = somaNotas / notas.length;

    for(let i = 0; i < notas.length; i++){
        if(notas[i] == maiorNota){
            maioresNotas.push(i+1);
        }
        if(notas[i] == menorNota){
            menoresNotas.push(i+1);
        }
    }


    return {maiorNota, menorNota, media, maioresNotas, menoresNotas}
}

module.exports = { informacoesNotas }