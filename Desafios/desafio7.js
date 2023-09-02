/** 
* DESAFIO 7) - FUP que imprima fibonacci até o 10º termo;
**/

function valoresFibonacciAteDez(){
    let valoresFibonacci = [];
    let numA = 0;
    let numB = 1; 
    let resultado;

    for(let i = 0; i < 10; i++){
        resultado = numA + numB;
        valoresFibonacci[i] = resultado;

        numA = numB;
        numB = resultado;
    }

    return valoresFibonacci
}

module.exports = { valoresFibonacciAteDez }