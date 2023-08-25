// 8. FUP que peça um número e imprima a tabuada deste número;

export function tabuada(num){
    const tabuada = [];

    for(let i = 1; i <= 10; i++){
        tabuada.push(`${num} x ${i} = ${num * i}`);
    }	

    return tabuada;
}