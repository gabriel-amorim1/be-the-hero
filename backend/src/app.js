const express = require('express'); // importa a biblioteca express
const routes = require('./routes'); // "/" para avisar que é um arquivo
const { errors } = require('celebrate');
const cors = require('cors');

const app = express(); //aplicação recebe express

app.use(cors());
app.use(express.json()); //converte o corpo da requisição em JSON
app.use(routes); 
app.use(errors());

module.exports = app;