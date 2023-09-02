/** 
* DESAFIO 0) FUP que leia a idade de uma pessoa em anos e imprima a idade em meses e em dias.
**/

function idadeParaDiasMeses(idade){
    let meses = idade * 12;
    let dias = idade * 365;
    
    return `A idade em meses é ${meses} e em dias é ${dias}`;
}

module.exports = { idadeParaDiasMeses }