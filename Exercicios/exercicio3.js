// 3. FUP que solicite o peso de 5 pessoas e calcule a media; Imprima o resultado;

function pesoTotal(p1,p2,p3,p4,p5){
    if(isNaN(p1) || isNaN(p2) || isNaN(p3) || isNaN(p4) || isNaN(p5)){
        throw new Error('Os valores informados não são números válidos');
    }
    
    const resultado = (p1+p2+p3+p4+p5)/5

    return resultado;
}

module.exports = { pesoTotal }