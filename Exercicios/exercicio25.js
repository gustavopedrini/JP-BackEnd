/** 
* 25 - FUP que solicite quantidade de pessoas, depois solicite a altura de cada uma e calcule a media da altura das pessoas;
**/

function mediaAltura(qntdePessoas, alturas){
    let media = 0;

    for(let i = 0; i < qntdePessoas; i++){
        media += alturas[i];
    }	

    return media/qntdePessoas;
}

module.exports = { mediaAltura }