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

const mensagens = [
    {
        'id': 1,
        'texto': 'Essa é uma mensagem'
    },
    {
        'id': 2,
        'texto': 'Essa é outra mensagem'
    }
];

// Read All
app.get('/mensagem', function(req, res) {
    res.send(mensagens.filter(Boolean));
});

// Read Single
app.get('/mensagem/:id', function(req, res) {
    const id = req.params.id;

    const mensagem = mensagens[id - 1];

    res.send(mensagem);
});

// Create
app.post('/mensagem', function(req, res) {
    // Obtenho o texto a partir do body da requisição
    const texto = req.body.texto;

    const mensagem = {
        'id': mensagens.length + 1,
        'texto': texto
    }

    //Adiciono o texto recebido na lista de mensagens
    mensagens.push(mensagem);

    res.send(mensagem);
});

// Update
app.put('/mensagem/:id', function(req, res) {
    const id = req.params.id;
    const texto = req.body.texto;

    mensagens[id - 1].texto = texto;

    res.send(mensagens[id - 1]);
})

// Delete
app.delete('/mensagem/:id', function(req, res) {
    const id = req.params.id;

    delete mensagens[id - 1] 

    res.send(`A mensagem de ID ${id}, foi removida com sucesso.`);
})
 
app.listen(port, function () {
    console.log(`App rodando em http://localhost:${port}`);
});