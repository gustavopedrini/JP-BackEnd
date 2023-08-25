// 13. FUP que solicite um numero e veja se ele é par ou impar;

function parImpar(num){
    if(num%2 == 0){
        return `O número ${num} é PAR`;
    }else{
        return `O número ${num} é ÍMPAR`;
    }
}

module.exports = { parImpar }