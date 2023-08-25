// 9. FUP que calcule a média aritmética das 3 notas de um aluno e mostre, além do valor da média, uma mensagem de "Aprovado", caso a média seja igual ou superior a 7, a mensagem "Recuperação", caso a média se igual ou superior a 5 e inferior a 7, ou a mensagem “Reprovado”, caso a média seja inferior a 5.

export function aprovadoReprovado(nota1, nota2, nota3){
    const media = (nota1 + nota2 + nota3) / 3;

    if(media >= 7){
        return `MÉDIA: ${media} | APROVADO`;

    }else if(media >= 5 && media < 7){
        return `MÉDIA: ${media} | RECUPERAÇÃO`;
        
    }else{
        return `MÉDIA: ${media} | REPROVADO`;
    }
}