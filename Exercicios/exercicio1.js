// 1. FUP que solicite dois numeros reais, realize a soma; Imprima o resultado;

function somar(numA, numB){
    if(isNan(numA) || isNaN(numB)){
        throw new Error('Os valores informados não são números válidos');
    }

    return parseInt(numA) + parseInt(numB);
}

module.exports = { somar }