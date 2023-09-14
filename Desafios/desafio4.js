/** 
* DESAFIO 4) FUP que peça um ano e verifique se ano informado é bissexto.
**/

function anoBissexto(ano){
    if((ano % 400 == 0) || (ano % 100 != 0 && ano % 4 == 0)){
        return `O ANO ${ano} É BISSEXTO!`
    }else{
        return `O ANO ${ano} NÃO É BISSEXTO!`
    }
}

module.exports = { anoBissexto }