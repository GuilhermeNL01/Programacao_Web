const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do Body Parser
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para renderizar o formulário
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

// Rota para processar os dados do formulário
app.post('/dados', (req, res) => {
    const { nome, endereco, telefone, data } = req.body;
    res.render('dados', { nome, endereco, telefone, data });
});


// Rota para exibir os dados
app.get('/dados', (req, res) => {
    const { nome, endereco, telefone, data } = req.query;
    res.sendFile(path.join(__dirname, '/views/dados.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
// Configurar o mecanismo de visualização e o diretório de visualização
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
// Configurar o diretório de visualização para arquivos HTML
app.use(express.static(path.join(__dirname, 'views')));
