const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

// Precisamos avisar o Express para utilizar o body-parser
// Assim, ele saberá como transformar as informações no BODY da requisição em informação útil para a programação
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World');
});

const mensagens = ['Essa é uma mensagem', 'Essa é outra mensagem'];

// Read All
app.get('/mensagem', function(req, res) {
    res.send(mensagens);
});

// Create
app.post('/mensagem', function(req, res) {
    // Obtenho o texto a partir do body da requisição
    const texto = req.body.texto;

    //Adiciono o texto recebido na lista de mensagens
    mensagens.push(texto);

    res.send('Mensagem adicionada com sucesso.');
});
 
app.listen(port, function () {
    console.log(`App rodando em http://localhost:${port}`);
});