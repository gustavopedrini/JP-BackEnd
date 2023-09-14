/**21. FUP para uma Investigação Criminal. Faça 8 perguntas para uma pessoa sobre um crime. As perguntas são:
" Trocou mensagens com a vítima? "
" Esteve no local do crime? "
" É parente ou reside perto da vítima? "
" Devia algum valor para a vítima? "
" Trabalha ou trabalhou com a vítima? "
" Possui algum tipo de relacionamento amoroso com a vítima? "
" Ficou feliz pelo destino fatídico na vítima? "
" Possui algum tipo de arma de fogo? "

Após, deve ser realizado uma análise das respostas e no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder:
- Positivo para 4 perguntas, a pessoa deve ser classificada como: "Suspeito do Crime"
- Positivo para entre 5 e 7 perguntas, a pessoa deve ser classificada como "Possível Criminoso"
- Positivo para 8 perguntas, a pessoa deve ser classificada como: "Assassino"
- Caso contrário, a pessoa deverá ser classificado como: "Inocente"
*/

function investigacaoCriminal(respostas){
    let positivas = 0;

    for(let i = 0; i < 8; i++){ // Verificar se é Positiva
    
        if(respostas[i] == "s" || respostas[i] == "S"){
            positivas++;
        }
    }

    // Console.WriteLine("Trocou mensagens com a vítima? ");
    // Console.WriteLine("Esteve no local do crime? ");
    // Console.WriteLine("É parente ou reside perto da vítima? ");
    // Console.WriteLine("Devia algum valor para a vítima? ");
    // Console.WriteLine("Trabalha ou trabalhou com a vítima? ");
    // Console.WriteLine("Possui algum tipo de relacionamento amoroso com a vítima? ");
    // Console.WriteLine("Ficou feliz pelo destino fatídico na vítima? ");
    // Console.WriteLine("Possui algum tipo de arma de fogo? ");
    
    
    if(positivas == 4){
        return "Suspeito do Crime";
        
    }else if((positivas > 4) && (positivas <= 7)){
        return "Possível Criminoso";
        
    }else if(positivas == 8){
        return "Assasino";
        
    }else{
        return "Inocente";
    }
}

module.exports = { investigacaoCriminal }  