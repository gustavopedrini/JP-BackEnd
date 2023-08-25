import express from "express"
import { somar } from "./Exercicios/exercicio1.js" // a chave serve para selecionar a função q vai importar desse local
import { valorFinal } from "./Exercicios/exercicio2.js"
import { pesoTotal } from "./Exercicios/exercicio3.js"
import { converterFahrenheit } from "./Exercicios/exercicio4.js"
import { converterKM } from "./Exercicios/exercicio5.js"
import { duracao } from "./Exercicios/exercicio6.js"
import {converterMetro, converterCm} from "./Exercicios/exercicio7.js"
import { tabuada } from "./Exercicios/exercicio8.js"
import { aprovadoReprovado } from "./Exercicios/exercicio9.js"
import { calcularIMC } from "./Exercicios/exercicio10.js"
import { calcularOperacao } from "./Exercicios/exercicio11.js"
import { positivoNegativo } from "./Exercicios/exercicio12.js"
import { parImpar } from "./Exercicios/exercicio13.js"
import { maiorNum } from "./Exercicios/exercicio14.js"
import { verificarTriangulo } from "./Exercicios/exercicio15.js"
import { calcularImpostoRenda } from "./Exercicios/exercicio16.js"
import { calcularMediaPonderada } from "./Exercicios/exercicio17.js"
import { custoCarro } from "./Exercicios/exercicio18.js"

const app = express();
const port = 3000;

app.use(express.json()); // serve para o computador (burro) interpretar como json pro post

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
  const aba = aprovadoReprovado(req.body.nota1, req.body.nota2, req.body.nota3);
  res.status(200).json(aba);
});

// --- Exercicio 10 --- //
app.post('/api/exercicio10', (req, res) => {
  const valorIMC = calcularIMC(req.body.genero, req.body.altura);
  res.status(200).json({message: `Seu IMC é: ${valorIMC}`});
});

// --- Exercicio 11 --- //
app.post('/api/exercicio11', (req, res) => {
  const resultadoCalculo = calcularOperacao(req.body.operacao, req.body.numA, req.body.numB);
  res.status(200).json(resultadoCalculo);
});

// --- Exercicio 12 --- //
app.post('/api/exercicio12', (req, res) => {
  const resultado = positivoNegativo(req.body.num);
  res.status(200).json(resultado);
});

// --- Exercicio 13 --- //
app.post('/api/exercicio13', (req, res) => {
  const resultado = parImpar(req.body.num);
  res.status(200).json(resultado);
});

// --- Exercicio 14 --- //
app.post('/api/exercicio14', (req, res) => {
  const resultado = maiorNum(req.body.numA, req.body.numB);
  res.status(200).json({message: `O MAIOR número é: ${resultado}`});
});

// --- Exercicio 15 --- //
app.post('/api/exercicio15', (req, res) => {
  const resultado = verificarTriangulo(req.body.numA, req.body.numB, req.body.numC, req.body.altura);
  res.status(200).json(resultado);
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

// ================== //
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});


