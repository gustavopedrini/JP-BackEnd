// 20. FUP que leia:
// • a percentagem do IPI a ser acrescido no valor das peças
// • o código da peça 1, valor unitário da peça 1, quantidade de peças 1
// • o código da peça 2, valor unitário da peça 2, quantidade de peças 2
// O algoritmo deve calcular o valor total a ser pago e apresentar o resultado.

function valorTotalIPI(percentagem, cod_peca1, valor_peca1, qntde_peca1, cod_peca2, valor_peca2, qntde_peca2){
    let valorTotal = (valor_peca1 * qntde_peca1 + valor_peca2 * qntde_peca2) * (percentagem/100 + 1);

    return valorTotal;
}

module.exports = { valorTotalIPI }  