import express from "express"
import { valorFinal } from "./Exercicios/exercicio2.js";
import { somar } from "./Exercicios/exercicio1.js" // a chave serve para selecionar a função q vai importar desse local
const app = express();
const port = 3000;

app.use(express.json()); // serve para o computador (burro) interpretar como json pro post

// --- Exercicio 1 --- //
app.get('/api/exercicio1', (req, res) => { 
  const numA = parseFloat(req.query.numA)
  const numB = parseFloat(req.query.numB)

  res.json({message: `${numA} + ${numB} = ${numA + numB}`});
});

// --- Exercicio 1 POST --- //
app.post('/api/exercicio1post', (req, res) => {
  const result = somar(req.body.numA, req.body.numB) 

  res.status(200).json({message: `RESULTADO = ${result}`}); // agr vai ter q sempre mandar em json essa joça
});

// --- Exercicio 2 --- //
app.post('/api/exercicio2', (req, res) => { 
  const valorSalario = valorFinal(req.body.valorHora, req.body.qntdeHoras)

  res.status(200).json({message:`VALOR FINAL: ${valorSalario}`});
});

// --- Exercicio 3 --- //
app.get('/api/exercicio3', (req, res) => {
  const pesos = new Array();
  const cu = new Array();

  for(var i = 1; i < 5; i++){
    pesos[i] = `peso${i}`;
    const ok = pesos[i];
    cu[i] = req.query.ok;
  }

  res.json({message: `MÉDIA DO PESO DESSAS PESSOAS É: ${cu[i]}`})
});

// ================== //
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});


