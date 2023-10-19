const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
 {id: 1, nome: "Celular Hello Kitty", preco: "100,99", descricao: "Descricao do produto", imagem: "produto.jpg"},
]

app.get('/', (req, res) => {
  res.render('index', { message: 'Produtos Hello Kitty!' });
});

app.get('/produto', (req, res) => {
  res.render('produto', { message: 'Produtos Hello Kitty 2' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

