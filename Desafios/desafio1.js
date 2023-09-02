/** 
* DESAFIO 1) FUP que leia dois valores A e B, efetue a troca dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresentar os valores das variáveis antes e depois de trocados;
**/

function trocaValores(numeros){
    let numC = numeros[0];

    numeros[0] = numeros[1];
    numeros[1] = numC;

    return `VALORES ANTES DE SEREM TROCADOS: [numA = ${numeros[1]} | numB = ${numeros[0]}]
    VALORES DEPOIS DE SEREM TROCADOS: [numA = ${numeros[0]} | numB = ${numeros[1]}]`;
}

module.exports = { trocaValores }