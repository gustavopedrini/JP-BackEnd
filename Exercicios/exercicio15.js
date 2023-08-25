// 15. FUP que leia 3 valores a,b,c e verifique se eles formam ou não um triângulo. Caso os valores formem um triângulo, solicite a base e a altura, calcule (base * altura / 2) e escreva a área deste triângulo. Se não formam triângulo escreva os valores lidos. 

export function verificarTriangulo(numA, numB, numC, altura){
    if((numA + numB) > numC && (numA + numC) > numB && (numB + numC) > numA){
        return `A área do triângulo é: ${(numA * altura) / 2}`;
    }else{
        return `${numA}, ${numB} e ${numC} não formam um triângulo`;
    }
}
