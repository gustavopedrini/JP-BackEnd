// 9. FUP que calcule a média aritmética das 3 notas de um aluno e mostre, além do valor da média, uma mensagem de "Aprovado", caso a média seja igual ou superior a 7, a mensagem "Recuperação", caso a média se igual ou superior a 5 e inferior a 7, ou a mensagem “Reprovado”, caso a média seja inferior a 5.

function aprovadoReprovado(notas){
    const media = (notas[0] + notas[1] + notas[2]) / 3;
    let situacao;

    if(media >= 7){
        situacao = "APROVADO";
    }else if(media >= 5 && media < 7){
        situacao = "RECUPERAÇÃO";
    }else{
        situacao = "REPROVADO";
    }

    return {situacao, media}
}

module.exports = { aprovadoReprovado }