/** 
* 30. FUP que preencha um vetor com 5 números aleatórios, sendo as posições do array eles:
1 - entre 1 e 8;
2 - entre 9 e 16;
3 - entre 17 e 22;
4 - entre 23 e 28;
5 - entre 24 e 29;
**/

function numerosAleatoriosEspecificos(){
    let numerosGerados = [];

    numerosGerados[0] = Math.floor(Math.random() * 8);
    numerosGerados[1] = Math.floor(Math.random() * 7) + 9;
    numerosGerados[2] = Math.floor(Math.random() * 6) + 17;
    numerosGerados[3] = Math.floor(Math.random() * 6) + 23;
    numerosGerados[4] = Math.floor(Math.random() * 6) + 24;

    return numerosGerados
}

module.exports = { numerosAleatoriosEspecificos }