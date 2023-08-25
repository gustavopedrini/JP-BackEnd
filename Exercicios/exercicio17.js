// 17. FUP que leia as 3 notas de um aluno e calcule a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é: 2,3 e 5, respectivamente.

export function calcularMediaPonderada(nota1, nota2, nota3){
    return (nota1 * 0.2) + (nota2 * 0.3) + (nota3 * 0.5);
}