/** 
* Desafio 5) FUP altere o programa anterior para imprimir:
>- A quantidade de números positivos;
>- A quantidade de pares;
>- A quantidade de números múltiplos de 7.
**/

function informacoesNumeros(numeros){
    let positivos = 0;
    let pares = 0;
    let multiplosSete = 0;

    if(numeros.length > 10 || numeros.length < 10){
        return `VOCÊ DEVE DIGITAR 10 NÚMEROS. NÚMEROS DIGITADOS: ${numeros.length}`;
    }else{
        for(let i = 0; i < 10; i++){
            if(numeros[i] >= 0){
                positivos++;
            }
            if(numeros[i] % 2 == 0){
                pares++;
            }
            if(numeros[i] % 7 == 0){
                multiplosSete++;
            }
        }

        return `${positivos} / 10 POSITIVOS ||| ${pares} / 10 PARES ||| ${multiplosSete} / 10 MÚLTIPLOS DE SETE`;
    }
}

module.exports = { informacoesNumeros }