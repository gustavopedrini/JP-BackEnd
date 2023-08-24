import express from "express"
import { duracao } from "./Exercicios/exercicio6.js"
import { pesoTotal } from "./Exercicios/exercicio3.js"
import { valorFinal } from "./Exercicios/exercicio2.js"
import { somar } from "./Exercicios/exercicio1.js" // a chave serve para selecionar a função q vai importar desse local
import {converterMetro, converterCm} from "./Exercicios/exercicio7.js"
import { converterFahrenheit } from "./Exercicios/exercicio4.js"
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
  const valorFahrenheit = converterFahrenheit(req.body.valorCelsius,);

  res.status(200).json({message: `TEMPERATURA EM FAHRENHEIT: ${valorFahrenheit}`})
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


// ================== //
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});


