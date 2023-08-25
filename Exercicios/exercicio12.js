// 12. FUP que peça um número e imprima uma mensagem se esse número é positivo ou negativo;

export function positivoNegativo(num){
    if(num > 0){
        return `O número ${num} é POSITIVO`;
        
    }else if(num < 0){
        return `O número ${num} é NEGATIVO`;

    }else{
        return `O número ${num} é ZERO`;
    }
}