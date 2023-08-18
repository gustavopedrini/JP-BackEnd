import express from "express"
const app = express();
const port = 3000;
app.use(express.json()); // serve para o computador (burro) interpretar como json pro post

// CREATE
app.post('/api/', (req, res) => { 
  res.json({
    message: `pessoa cadastrada`
  });
});

// UPDATE
app.put('/api/', (req, res) => { 
  res.json({
    message: `pessoa alterada`
  });
});