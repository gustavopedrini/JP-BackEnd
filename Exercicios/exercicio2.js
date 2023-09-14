// 2. FUP que leia o valor da hora do trabalhador e a quantidade de horas trabalhadas. Imprima o valor que o trabalhador deverá receber ao final do mês.;

function valorFinal(valorHora, qntdeHoras){
    if(isNaN(valorHora) || isNaN(qntdeHoras)){
        throw new Error('Os valores informados não são números válidos');
    }
    
    return valorHora * qntdeHoras;
}

module.exports = { valorFinal }