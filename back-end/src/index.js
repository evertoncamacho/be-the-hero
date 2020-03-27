const express = require('express'); //Importa o módulo express
const cors = require('cors');
const routes = require('./routes'); // ./ refere-se à pasta que o arquivo index.js está localizado.

const app = express();

app.use(cors());
app.use(express.json()); //Para converter os JSON's em objetos javascript, antes de realizar as requisições.
app.use(routes);

app.listen(3333);
