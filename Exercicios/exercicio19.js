// 19. FUP que calcule os juros de determinado capital, taxa e tempo informados pelo usuário e apresente na tela o valor do capital informado, os juros e o valor do montante da operação. O valor da taxa deverá ser informado em valores decimais, ex.: 5% informar 0.05 e o tempo devera ser informado em dias.

function jurosCapital(capital, taxa, tempo){
    let juros = capital * taxa * tempo;
    let montante = capital + juros;

    return `Valor do capital: ${capital} | Juros: ${juros} | Montante: ${montante}`;
}

module.exports = { jurosCapital }