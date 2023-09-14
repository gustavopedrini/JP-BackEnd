/** 
* 24 - FUP que imprima a tabuada de um numero de 0 a 10;
**/

function tabuadaRepeticao(num){
    const tabuada = [];

    for(let i = 1; i <= 10; i++){
        tabuada.push(`${num} x ${i} = ${num * i}`);
    }	

    return tabuada;
}

module.exports = { tabuadaRepeticao }