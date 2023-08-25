// 16. FUP que calcule o imposto de renda de um contribuinte. Os dados de entrada são: o CPF(int), o número de dependentes e a renda mensal. Para cada dependente será feito um desconto de 5% do salário mínimo por dependente. 

function calcularImpostoRenda(cpf, numDependentes, rendaMensal){
    let salarioMinimo = 1302;
    let aliquota;
    
    if(rendaMensal <= salarioMinimo * 2){ // Até 2 Salários Mínimos
        aliquota = 0;
        
    }else if(rendaMensal <= salarioMinimo * 3){ // Até 3 Salários Mínimos
        aliquota = 0.05;
        
    }else if(rendaMensal <= salarioMinimo * 5){ // Até 5 Salários Mínimos
        aliquota = 0.10;
        
    }else if(rendaMensal <= salarioMinimo * 7){ // Até 7 Salários Mínimos
        aliquota = 0.15;
        
    }else{ // Mais de 7 Salários Mínimos
        aliquota = 0.20;
    }
    
    return rendaMensal * aliquota - ((numDependentes * 0.05 ) * salarioMinimo);
}

module.exports = { calcularImpostoRenda }