/** 
* DESAFIO 2) FUP que leia dois números inteiros e imprima o maior deles.
**/

function maiorNumero(numeros){
    if(numeros.length > 2 || numeros.length < 2){
        return `VOCÊ DEVE DIGITAR 2 NÚMERO. NÚMEROS DIGITADOS: ${numeros.length}`;
    }else{
        if(numeros[0] > numeros[1]){
            return `O MAIOR NÚMERO É: ${numeros[0]}`;
        }else{
            return `O MAIOR NÚMERO É: ${numeros[1]}`;
        }
    }
}

module.exports = { maiorNumero }