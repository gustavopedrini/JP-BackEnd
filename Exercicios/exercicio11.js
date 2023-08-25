// 11. FUP que solicite a operação (+,-,/,*) e dois numeros, calcule a operação solicitada e informe o resultado;

function calcularOperacao(operacao, numA, numB){
    switch(operacao){
        case "+":
            return `${numA} + ${numB} = ${numA + numB}`;

        case "-":
            return `${numA} - ${numB} = ${numA - numB}`;

        case "*":
            return `${numA} * ${numB} = ${numA * numB}`;

        case "/":
            return `${numA} / ${numB} = ${numA / numB}`;

        default:
            return `A OPERAÇÃO INFORMADA É INVÁLIDA`;
    }
}

module.exports = { calcularOperacao }