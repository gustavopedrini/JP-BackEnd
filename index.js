// Importando o EXPRESS
const express = require('express')

// Importando as funções dos EXERCÍCIOS
const { somar } = require("./Exercicios/exercicio1.js")
const { valorFinal } = require("./Exercicios/exercicio2.js")
const { pesoTotal } = require("./Exercicios/exercicio3.js")
const { converterFahrenheit } = require("./Exercicios/exercicio4.js")
const { converterKM } = require("./Exercicios/exercicio5.js")
const { duracao } = require("./Exercicios/exercicio6.js")
const {converterMetro, converterCm} = require("./Exercicios/exercicio7.js")
const { tabuada } = require("./Exercicios/exercicio8.js")
const { aprovadoReprovado } = require("./Exercicios/exercicio9.js")
const { calcularIMC } = require("./Exercicios/exercicio10.js")
const { calcularOperacao } = require("./Exercicios/exercicio11.js")
const { positivoNegativo } = require("./Exercicios/exercicio12.js")
const { parImpar } = require("./Exercicios/exercicio13.js")
const { maiorNum } = require("./Exercicios/exercicio14.js")
const { verificarTriangulo } = require("./Exercicios/exercicio15.js")
const { calcularImpostoRenda } = require("./Exercicios/exercicio16.js")
const { calcularMediaPonderada } = require("./Exercicios/exercicio17.js")
const { custoCarro } = require("./Exercicios/exercicio18.js")
const { jurosCapital } = require("./Exercicios/exercicio19.js")
const { valorTotalIPI } = require("./Exercicios/exercicio20.js")
const { investigacaoCriminal } = require("./Exercicios/exercicio21.js")
const { velocidadeMulta } = require("./Exercicios/exercicio22.js")
const { escreverBatata } = require("./Exercicios/exercicio23.js")
const { tabuadaRepeticao } = require("./Exercicios/exercicio24.js")
const { mediaAltura } = require("./Exercicios/exercicio25.js")
const { mediaPesos } = require("./Exercicios/exercicio26.js")
const { pesoElevador } = require("./Exercicios/exercicio27.js")
const { numerosNegativos } = require("./Exercicios/exercicio28.js")
const { numerosAleatorios } = require("./Exercicios/exercicio29.js")
const { numerosAleatoriosEspecificos } = require("./Exercicios/exercicio30.js")

// Importando as funções dos EXERCÍCIOS EXTRAS
const { somaUmDez } = require("./ListaExtra/Exercicios/exercicioextra1.js")
const { dobroInteiro } = require('./ListaExtra/Exercicios/exercicioextra2.js')
const { areaTriangulo } = require('./ListaExtra/Exercicios/exercicioextra3.js')

// Importando as funções dos DESAFIOS
const { idadeParaDiasMeses } = require("./Desafios/desafio0.js")
const { trocaValores } = require("./Desafios/desafio1.js")
const { maiorNumero } = require("./Desafios/desafio2.js")
const { menorNumero } = require("./Desafios/desafio3.js")
const { anoBissexto } = require("./Desafios/desafio4.js")
const { informacoesNumeros } = require("./Desafios/desafio5.js")
const { valoresFibonacci } = require("./Desafios/desafio6.js")
const { valoresFibonacciAteDez } = require("./Desafios/desafio7.js")
const { informacoesNotas } = require("./Desafios/desafio8.js")

const app = express();
const port = 3000;

app.use(express.json()); // serve para o computador (burro) interpretar como json pro post

// =========== EXERCÍCIOS =========== //
// --- Exercicio 1 --- //
app.post('/api/exercicio1', (req, res) => {
  const result = somar(req.body.numA, req.body.numB);

  res.status(200).json({message: `RESULTADO = ${result}`});
});

// --- Exercicio 2 --- //
app.post('/api/exercicio2', (req, res) => { 
  const valorSalario = valorFinal(req.body.valorHora, req.body.qntdeHoras)

  res.status(200).json({message:`VALOR FINAL: ${valorSalario}`});
});

// --- Exercicio 3 --- //
app.post('/api/exercicio3', (req, res) => {
  const resultado = pesoTotal(
    req.body.p1,
    req.body.p2,
    req.body.p3,
    req.body.p4,
    req.body.p5
  );

  res.status(200).json({message: `MÉDIA DO PESO DESSAS PESSOAS É: ${resultado}`})
});

// --- Exercicio 4 --- //
app.post('/api/exercicio4', (req, res) => {
  const valorFahrenheit = converterFahrenheit(req.body.valorCelsius);

  res.status(200).json({message: `TEMPERATURA EM FAHRENHEIT: ${valorFahrenheit}`})
});

// --- Exercicio 5 --- //
app.post('/api/exercicio5', (req, res) => {
  const valorKM = converterKM(req.body.valorMilhas);

  res.status(200).json({message: `VALOR EM KM: ${valorKM}`})
});

// --- Exercicio 6 --- //
app.post('/api/exercicio6', (req, res) => {
  const resultado = duracao(req.body.segundos);

  res.status(200).json({message: `${resultado}`});
});

// --- Exercicio 7 --- //
app.post('/api/exercicio7', (req, res) => {
  const valorMetro = converterMetro(req.body.valorKM);
  const valorCm = converterCm(req.body.valorKM);

  res.status(200).json({message: `VALOR EM METRO: ${valorMetro}m | VALOR EM CENTÍMETRO: ${valorCm}cm`});
});

// --- Exercicio 8 --- //
app.post('/api/exercicio8', (req, res) => {
  const tabuadaNum = tabuada(req.body.num);

  res.status(200).json(tabuadaNum);
});

// --- Exercicio 9 --- //
app.post('/api/exercicio9', (req, res) => {
  const resultado = aprovadoReprovado(req.body.notas);
  res.status(200).json({message: `MÉDIA: ${resultado.media} | ${resultado.situacao}` });
});

// --- Exercicio 10 --- //
app.post('/api/exercicio10', (req, res) => {
  const valorIMC = calcularIMC(req.body.genero, req.body.altura);
  res.status(200).json({message: `Seu IMC é: ${valorIMC}`});
});

// --- Exercicio 11 --- //
app.post('/api/exercicio11', (req, res) => {
  const resultado = calcularOperacao(req.body.operacao, req.body.numA, req.body.numB);
  res.status(200).json({message: resultado});
});

// --- Exercicio 12 --- //
app.post('/api/exercicio12', (req, res) => {
  const resultado = positivoNegativo(req.body.num);
  res.status(200).json({message: resultado});
});

// --- Exercicio 13 --- //
app.post('/api/exercicio13', (req, res) => {
  const resultado = parImpar(req.body.num);
  res.status(200).json({message: resultado});
});

// --- Exercicio 14 --- //
app.post('/api/exercicio14', (req, res) => {
  const resultado = maiorNum(req.body.numA, req.body.numB);
  res.status(200).json({message: `O MAIOR número é: ${resultado}`});
});

// --- Exercicio 15 --- //
app.post('/api/exercicio15', (req, res) => {
  const resultado = verificarTriangulo(req.body.numA, req.body.numB, req.body.numC, req.body.altura);
  res.status(200).json({message: resultado});
});

// --- Exercicio 16 --- //
app.post('/api/exercicio16', (req, res) => {
  const resultado = calcularImpostoRenda(req.body.CPF, req.body.numDependentes, req.body.rendaMensal);
  res.status(200).json({message: `IMPOSTO DE RENDA: ${resultado}`});
});

// --- Exercicio 17 --- //
app.post('/api/exercicio17', (req, res) => {
  const resultado = calcularMediaPonderada(req.body.nota1, req.body.nota2, req.body.nota3);
  res.status(200).json({message: `A MÉDIA DO ALUNO É: ${resultado}`});
});

// --- Exercicio 18 --- //
app.post('/api/exercicio18', (req, res) => {
  const resultado = custoCarro(req.body.custoCarro);
  res.status(200).json({message: `O CUSTO DO CARRO É: ${resultado}`});
});

// --- Exercicio 19 --- //
app.post('/api/exercicio19', (req, res) => {
  const resultado = jurosCapital(req.body.capital, req.body.taxa, req.body.tempo);
  res.status(200).json({message: resultado});
});

// --- Exercicio 20 --- //
app.post('/api/exercicio20', (req, res) => {
  const resultado = valorTotalIPI(req.body.percentagem, req.body.cod_peca1, req.body.valor_peca1, req.body.qntde_peca1, req.body.cod_peca2, req.body.valor_peca2, req.body.qntde_peca2);
  res.status(200).json({message: `O VALOR TOTAL DO IPI É: ${resultado}`});
});

// --- Exercicio 21 --- //
app.post('/api/exercicio21', (req, res) => {
  const resultado = investigacaoCriminal(req.body.respostas);
  res.status(200).json({message: resultado});
})

// --- Exercicio 22 --- //
app.post('/api/exercicio22', (req, res) => {
  const resultado = velocidadeMulta(req.body.velPermitida, req.body.velPraticada);
  res.status(200).json({message: resultado});
});

// --- Exercicio 23 --- //
app.post('/api/exercicio23', (req, res) => {
  const resultado = escreverBatata(req.body.num);
  res.status(200).json({message: resultado});
});

// --- Exercicio 24 --- //
app.post('/api/exercicio24', (req, res) => {
  const resultado = tabuadaRepeticao(req.body.num);
  res.status(200).json({message: resultado});
});

// --- Exercicio 25 --- //
app.post('/api/exercicio25', (req, res) => {
  const resultado = mediaAltura(req.body.qntdePessoas, req.body.alturas);
  res.status(200).json({message: `A MÉDIA DAS ALTURAS DESSAS PESSOAS É: ${resultado}m`});
});

// --- Exercicio 26 --- //
app.post('/api/exercicio26', (req, res) => {
  const resultado = mediaPesos(req.body.pesos);
  res.status(200).json({message: `A MÉDIA DE PESO DESSAS PESSOAS É: ${resultado}kg`});
});

// --- Exercicio 27 --- //
app.post('/api/exercicio27', (req, res) => {
  const resultado = pesoElevador(req.body.pesos);
  res.status(200).json({message: resultado});
});

// --- Exercicio 28 --- //
app.post('/api/exercicio28', (req, res) => {
  const numeros = req.body.numeros;
  const resultado = numerosNegativos(numeros);
  res.status(200).json({numbers: numeros, message: resultado});
});

// --- Exercicio 29 --- //
app.post('/api/exercicio29', (_, res) => {
  res.status(200).json({message: `OS NÚMEROS GERADOS FORAM: ${numerosAleatorios()}`});
});

// --- Exercicio 30 --- //
app.post('/api/exercicio30', (_, res) => {
  res.status(200).json({message: `OS NÚMEROS GERADOS FORAM: ${numerosAleatoriosEspecificos()}`});
});

// =========== EXERCÍCIOS EXTRAS =========== //
// --- Exercicio 1 --- //
app.post('/api/exercicioextra1', (_, res) => {
  res.status(200).json({message: `A SOMA DOS NÚMEROS DE 1 A 10 É:  ${somaUmDez()}`});
});

// --- Exercicio 2 --- //
app.post('/api/exercicioextra2', (req, res) => {
  const resultado = dobroInteiro(req.body.num);
  res.status(200).json({message: `${resultado}`});
});

// --- Exercicio 3 --- //
app.post('/api/exercicioextra3', (req, res) => {
  const resultado = areaTriangulo(req.body.base, req.body.altura);
  res.status(200).json({message: `A ÁREA DO TRIÂNGULO É: ${resultado}`});
});

// =========== DESAFIOS =========== //
// --- Desafio 0 --- //
app.post('/api/desafio0', (req, res) => {
  const resultado = idadeParaDiasMeses(req.body.idade);
  res.status(200).json({message: `${resultado}`});
});

// --- Desafio 1 --- //
app.post('/api/desafio1', (req, res) => {
  const resultado = trocaValores(req.body.numeros);
  res.status(200).json({message: `${resultado}`});
});

// --- Desafio 2 --- //
app.post('/api/desafio2', (req, res) => {
  const resultado = maiorNumero(req.body.numeros);
  res.status(200).json({message: `${resultado}`});
});

// --- Desafio 3 --- //
app.post('/api/desafio3', (req, res) => {
  const resultado = menorNumero(req.body.numeros);
  res.status(200).json({message: `${resultado}`});
});

// --- Desafio 4 --- //
app.post('/api/desafio4', (req, res) => {
  const resultado = anoBissexto(req.body.ano);
  res.status(200).json({message: `${resultado}`});
});

// --- Desafio 5 --- //
app.post('/api/desafio5', (req, res) => {
  const resultado = informacoesNumeros(req.body.numeros);
  res.status(200).json({message: `${resultado}`});
});

// --- Desafio 6 --- //
app.post('/api/desafio6', (req, res) => {
  const resultado = valoresFibonacci(req.body.qntdeTermos);
  res.status(200).json({message: `OS NÚMEROS GERADOS FORAM: ${resultado}`});
});

// --- Desafio 7 --- //
app.post('/api/desafio7', (_, res) => {
  res.status(200).json({message: `${valoresFibonacciAteDez()}`});
});

// --- Desafio 8 --- //
app.post('/api/desafio8', (req, res) => {
  const resultado = informacoesNotas(req.body.notas);
  res.status(200).json({
    maiorNota: resultado.maiorNota,
    menorNota: resultado.menorNota,
    mediaNotas: resultado.media,
    maioresNotas: resultado.maioresNotas,
    menoresNotas: resultado.menoresNotas
  });
});

// =========== DESAFIOS EXTRAS =========== //

// ================== //
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});


