const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
 {id: 1, nome: "nome do produto", preco: "400", descricao: "Descricao do produto", imagem: "produto1.jpg"},
]

app.get('/', (req, res) => {
  res.render('index', { message: 'Produtos Hello Kitty!' });
});

app.get('/produto', (req, res) => {
  res.render('produto', { message: 'Produtos Hello Kitty 2' });
});

app.get('/produto1', (req, res) => {
  res.render('produto1', { message: 'Produtos Hello Kitty 2' });
});

app.get('/produto2', (req, res) => {
  res.render('produto2', { message: 'Produtos Hello Kitty 2' });
});

app.get('/produto3', (req, res) => {
  res.render('produto3', { message: 'Produtos Hello Kitty 2' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

