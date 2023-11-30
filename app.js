const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
 {id: 1, nome: "Funko Pop Sanrio Team USA Basketball", preco: "R$: 295,99", descricao: "Esse produto é considerado EXCLUSIVO. Quando o Funko Pop é considerado exclusivo significa que o número de unidades produzidas foi limitado e, portanto, a figura se torna mais rara.", imagem: "produto4.jpg"},
 {id: 2, nome: "Funko Pop Sanrio Team USA Surfing", preco: "R$: 290,99", descricao: "Esse produto é considerado EXCLUSIVO. Quando o Funko Pop é considerado exclusivo significa que o número de unidades produzidas foi limitado e, portanto, a figura se torna mais rara.", imagem: "produto2.jpg"},
 {id: 3, nome: "Funko Pop Sanrio Team USA Godel Medal", preco: "R$: 298,99", descricao: "Esse produto é considerado EXCLUSIVO. Quando o Funko Pop é considerado exclusivo significa que o número de unidades produzidas foi limitado e, portanto, a figura se torna mais rara.", imagem: "produto5.png"},
 {id: 4, nome: "Funko Pop Sanrio Team USA Tennis", preco: "R$: 294,99", descricao: "Esse produto é considerado EXCLUSIVO. Quando o Funko Pop é considerado exclusivo significa que o número de unidades produzidas foi limitado e, portanto, a figura se torna mais rara.", imagem: "produto3.jpg"},
 {id: 5, nome: "Funko Pop Sanrio Team USA Gymnast", preco: "R$: 299,99", descricao: "Esse produto é considerado EXCLUSIVO. Quando o Funko Pop é considerado exclusivo significa que o número de unidades produzidas foi limitado e, portanto, a figura se torna mais rara.", imagem: "produto.png"},
 {id: 6, nome: "Funko Pop Sanrio Team USA Basketball", preco: "R$: 295,99", descricao: "Esse produto é considerado EXCLUSIVO. Quando o Funko Pop é considerado exclusivo significa que o número de unidades produzidas foi limitado e, portanto, a figura se torna mais rara.", imagem: "produto4.jpg"},
 {id: 7, nome: "Funko Pop Sanrio Team USA Surfing", preco: "R$: 290,99", descricao: "Esse produto é considerado EXCLUSIVO. Quando o Funko Pop é considerado exclusivo significa que o número de unidades produzidas foi limitado e, portanto, a figura se torna mais rara.", imagem: "produto2.jpg"},
 {id: 8, nome: "Funko Pop Sanrio Team USA Godel Medal", preco: "R$: 298,99", descricao: "Esse produto é considerado EXCLUSIVO. Quando o Funko Pop é considerado exclusivo significa que o número de unidades produzidas foi limitado e, portanto, a figura se torna mais rara.", imagem: "produto5.png"},
 {id: 9, nome: "Funko Pop Sanrio Team USA Tennis", preco: "R$: 294,99", descricao: "Esse produto é considerado EXCLUSIVO. Quando o Funko Pop é considerado exclusivo significa que o número de unidades produzidas foi limitado e, portanto, a figura se torna mais rara.", imagem: "produto3.jpg"},
 {id: 10, nome: "Funko Pop Sanrio Team USA Gymnast", preco: "R$: 299,99", descricao: "Esse produto é considerado EXCLUSIVO. Quando o Funko Pop é considerado exclusivo significa que o número de unidades produzidas foi limitado e, portanto, a figura se torna mais rara.", imagem: "produto.png"},
]

function buscarProdutoPorID(id){
  const produto = produtos.find(produto => produto.id == id);
  return produto || null
}

app.get('/', (req, res) => {
  res.render('index', { produtos });
});

app.get('/produto/:id', (req, res) => {
  const produto = buscarProdutoPorID(req.params.id)
  res.render('produto', { produto });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

