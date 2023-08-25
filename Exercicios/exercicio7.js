// 7. FUP que leia um valor em quilometros e converta para metros e centimetro;

function converterMetro(valorKM){
    return valorKM * 1000;
}

function converterCm(valorKM){
    return valorKM * 100000;
}

module.exports = { converterMetro, converterCm }