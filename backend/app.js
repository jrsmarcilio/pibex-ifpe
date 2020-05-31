const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const rotaSegundaChamada = require ('./routes/segundaChamada');

app.use(bodyParser.urlencoded({ extended: false})); // apenas dados simples
app.use(bodyParser.json()); // json de entrada no body

app.use('/segundachamada', rotaSegundaChamada)

module.exports = app;