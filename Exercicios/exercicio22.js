// 22. FUP que leia a velocidade permitida em uma via, a velocidade praticada por um motorista, e informe se o mesmo receberá multa ou não, e o valor a pagar. Caso tenha excedido a velocidade em até 20% da permitida, o motorista receberá uma multa de R$ 102,00. Caso tenha excedido a velocidade acima de 20% da permitida, o motorista receberá uma multa de R$ 500,00.

function velocidadeMulta(velPermitida, velPraticada){
    if(velPraticada > velPermitida && velPraticada <= velPermitida + (velPermitida * 0.2)){
        return `Você recebeu MULTA! | Valor: R$ 102,00`;
    }else if(velPraticada > velPermitida + (velPermitida * 0.2)){
        return `Você recebeu MULTA! | Valor: R$ 500,00`;
    }else{
        return `Você não recebeu MULTA! | Valor: R$ 0,00`;
    }
}

module.exports = { velocidadeMulta }