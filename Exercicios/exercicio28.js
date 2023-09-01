/** 
* 28. FUP que leia 10 números e verifique quantos destes números são negativos.
**/

function numerosNegativos(numeros){
    let negativos = 0;

    if(numeros.length > 10 || numeros.length < 10){
        return `VOCÊ DEVE DIGITAR 10 NÚMEROS. NÚMEROS DIGITADOS: ${numeros.length}`;
    }else{
        for(let i = 0; i < 10; i++){
            if(numeros[i] < 0){
                negativos++;
            }
        }

        return `ENTRE OS NÚMEROS ENVIADOS, ${negativos} / 10 SÃO NEGATIVOS`;
    }
}

module.exports = { numerosNegativos }