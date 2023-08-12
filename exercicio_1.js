import express from "express"

const app = express();
const port = 3000;

app.get('/api/:id/pessoa/:pesoaIdade', (req, res) => { 
  const nome = req.query.nome
  const id = req.params.id
  const pessoaIdade = req.params.pessoaIdade

  res.json({message: `Voce passou o queryParam: ${nome}`
    + `Voce passou o id: ${id}`
    + `Voce passou o id: ${pessoaIdade}`
  });
});

// criar função para cada um dos 5 exercicios

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`); 
});

// 6 - REQ e RES sempre vão existir. Para ignorar o REQ e deixar apenas o RES, basta fazer: (_, res)
// 7 - Caso o código seja alterado, você deve dar o comando de NODE novamente para as alterações serem aplicadas na porta.
// X - Não é possível rodar o mesmo código em dois terminais ao mesmo tempo, pois só há uma porta que pode ouvir.