// 6. FUP que solicite a duração de um evento em segundos e imprima em horas, minutos e segundos;

export function duracao(valorSegundos){
    let horas = 0;
    let minutos = 0;
    let segundos = valorSegundos;
    
    if(valorSegundos >= 3600){ // Verifica os segundos formam uma ou mais horas
        horas = valorSegundos / 3600;
        minutos = (valorSegundos % 3600)/60;
        segundos = (valorSegundos % 3600) % 60;

    }else if(valorSegundos >= 60){ // Verifica os segundos formam um ou mais minutos
        minutos = valorSegundos / 60;
        segundos = valorSegundos % 60;
    }

    return `${parseInt(horas)} HORAS, ${parseInt(minutos)} MINUTOS e ${parseInt(segundos)} SEGUNDOS.`;
}