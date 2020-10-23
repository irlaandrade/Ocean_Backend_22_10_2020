# Introdução ao Backend com NodeJs e Express | Samsung Ocean

## Repositório desenvolvido durante a aula do curso de Introdução ao Banckend promovida pela Samsung Ocean.

### Configuração do ambiente:

- [x] 1. Preparação do ambiente com o **Node.js**
- [x] 2. Iniciando o projeto
- [x] 3. Instalando o Express
- [x] 4. Criar o arquivo .gitignore
- [x] 5. Criar o arquivo index.js
- [x] 6. Instalar o Nodemon
- [x] 7. Usar o bodyParser
- [x] 8. Observação

    ---

1. Preparação do ambiente com o **Node.js**
    - Você deve ter instalado em seu computador o Node.js, se não houver, o download pode ser realizado através desse link [Node.js](https://nodejs.org/en/).

    ---

2. Iniciando o projeto

    - Criamos uma pasta em que ficará todos os arquivos.
  
    - Utilizamos o **NPM** (Node Package Manager) ou Gerenciador de Pacote do Node. No terminal de sua preferência, já dentro da pasta criada, digitamos um dos comandos abaixo.
 
    _Obs.: Com o **npm init -y** não é necessário responder as perguntas para iniciar o projeto, ele faz as configurações automáticas._

    ~~~Shell
        npm init
    ~~~
    ~~~Shell
        npm init -y
    ~~~

    - Será gerado um arquivo chamado package.json que contém as configurações básicas para o seu projeto e os pacotes instalados posteriormente serão registrados nele.

    ---

3. Instalando o Express

   - No terminal digitamos o seguinte comando:

    ~~~Shell
        npm install express
    ~~~

   - Será criada a pasta **node_modules** contendo o pacote instalado e todos as demais dependências. Além disso, será criado também o arquivo _package-lock.json_.

   - O express será registrado no **package.json**

    ~~~JavaScript
        "dependencies": {
          "express": "^4.17.1"
        },
    ~~~

    ---

4. Criar o arquivo .gitignore

   - O **.gitignore** informa ao git para não commitar os arquivos e outras informações que forem inseridos dentro do arquivo, principalmente a pasta node_modules.

   - Dentro do arquivo inserimos o nome da pasta conforme abaixo. Após salvar a alteração a pasta **node_modules** ficará em tonalidade diferente dos demais arquivos e pastas, sinalizando que ela subirá para o Github no commit:

    ~~~Javascript
        node_modules/
    ~~~
    ---

5. Criar o arquivo index.js

    - No arquivo **index.js** conterá os scripts para execução do servidor de aplicação no Node.js. E apresenta como base o código abaixo que posteriormente será modificado:

    ~~~JavaScript
        const express = require('express')
        const app = express()
 
        app.get('/', function (req, res) {
        res.send('Hello World')
        })
 
        app.listen(3000)
    ~~~

    - Inserimos o código acima, em que são declaradas duas constantes. Na primeira estamos importando o express e na segunda recebendo o objeto **express()**. No **app**, passamos a porta 3000 através do método **listen()**, mas poderia ser qualquer outra, por exemplo 8080.

    - Como forma de melhorar a visualização para saber se o servidor está funcionando corretamente, atribuímos a porta a uma constante e no método **listen()** passamos ela e uma função com um **console.log** logo em seguida com uma mensagem, conforme código abaixo: 

    ~~~JavaScript
        const express = require('express');
        const app = express();

        const port = 3000;

        app.get('/', function (req, res) {
            res.send('Hello World');
        });

        app.listen(port, function () {
            console.log(`App rodando em http://localhost:${port}`);
        });
    ~~~

    - O **app.get** é para quando uma requisição **get** for feita na rota principal, que neste caso está representada como **'/'**, ela executar a função passada que vai receber uma **request (req) e uma response (res)** e vai retornar, neste caso, um texto "Hello World".

    ---

6. Instalar o Nodemon

    - O Nodemon monitora todas as alterações feitas nos arquivos da aplicação e reinicia automaticamente o servidor quando for necessário.

    ~~~Shell
        npm install nodemon
    ~~~

    - Assim como o express, o nodemon será registrado após sua instalação no **package.json**:

    ~~~JavaScript
        "dependencies": {
        "express": "^4.17.1",
        "nodemon": "^2.0.6"
        }
    ~~~

    - Após isso, podemos ainda no **package.json**, em **scripts** inserir **"start": "nodemon index.js"** para configurar o nodemon para ser iniciado sempre que fizermos o comando **npm start**. 

    ~~~JavaScript
        "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "nodemon server.js"
        },
    ~~~

    - Executamos no terminal o **npm start**, assim o nodemon irá executar o index.js e ficará monitorando qualquer alteração realizada nos arquivos e reiniciando o servidor automaticamente:

    ~~~Shell
        npm start
    ~~~

    ---

7.  Usar o BodyParser

    - Utilizamos o **Body-parser** para transformar as informações no body da requisição em informação útil para a programação. Para instalarmos esse módulo utilizamos o comando abaixo:

    ~~~Shell
        npm install body-parser
    ~~~

    - No index.js acrescentamos o BodyParser após a requisição **express**, através do express com o seu módulo **app.use()** passamos o bodyParser.json().

    ~~~Javascript
        const express = require('express');
        const bodyParser = require('body-parser');
        const app = express();

        const port = 3000;
 
        app.use(bodyParser.json());

        app.get('/', function (req, res) {
        res.send('Hello World');
        });

        const mensagens = ['Essa é uma mensagem', 'Essa é outra     mensagem'];
 
        app.listen(port, function () {
            console.log(`App rodando em http://localhost:${port}`);
        });
    ~~~

8.  Observação:

    - Caso seja necessário reinstalar os pacotes do node por eles não estarem presentes no projeto baixado, basta executar o comando abaixo no terminal que todas as dependências presentes no **package.json** serão identificadas e instaladas.

    ~~~Shell
        npm install
    ~~~

Feito com ❤️ por Irla Andrade 👋🏽 [Entre em contato!](https://www.linkedin.com/in/irlaandrade/)
