// 10. FUP que calcule o IMC -solicite se é H ou M e faça o calculo;
// - para homens: (72.7*h)-58
// - para mulheres: (62.1*h)-44.7

function calcularIMC(genero, altura){
    if(genero == "H"){
        return (72.7*altura)-58;

    }else if(genero == "M"){
        return (62.1*altura)-44.7;

    }else{
        return `O GÊNERO INFORMADO É INVÁLIDO`;
    }
}

module.exports = { calcularIMC }