// 18. O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo que leia o custo de fábrica de um carro e escreva o custo ao consumidor.

export function custoCarro(custoFabrica){
    let percentagemDistribuidor = 0.28;
    let impostos = 0.45;

    return custoFabrica + (custoFabrica * percentagemDistribuidor) + (custoFabrica * impostos);
}