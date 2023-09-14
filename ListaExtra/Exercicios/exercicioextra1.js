// 1. FUP que calcule e imprima a soma dos números de 1 a 10.

function somaUmDez(){
    let soma = 0;

    for(let i = 1; i <= 10; i++){
        soma += i;
    }
    return soma;
}

module.exports = { somaUmDez }