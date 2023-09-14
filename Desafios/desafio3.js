/** 
* DESAFIO 3) FUP que solicite três numero e verifique qual é o menor;
**/

function menorNumero(numeros){
    if(numeros.length > 3 || numeros.length < 3){
        return `VOCÊ DEVE DIGITAR 3 NÚMEROS. NÚMEROS DIGITADOS: ${numeros.length}`;
    }else{
        if(numeros[0] < numeros[1] && numeros[0] < numeros[2]){
            return `O MENOR NÚMERO É: ${numeros[0]}`;
        }else if(numeros[1] < numeros[2]){
            return `O MENOR NÚMERO É: ${numeros[1]}`;
        }else{
            return `O MENOR NÚMERO É: ${numeros[2]}`;
        }
    }
}

module.exports = { menorNumero }