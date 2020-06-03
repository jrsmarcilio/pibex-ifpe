var express = require('express');
const bodyParser = require('body-parser')
var cors = require('cors');
var app = express();

app.use(cors({
  origin: '*'
}));


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const newRequirement = require('./routes/newRequirement');
app.use('/', newRequirement);

const listRequirements = require ('./routes/listRequirements');
app.use('/', listRequirements);

const deleteRequirement = require ('./routes/deleteRequirement');
app.use('/', deleteRequirement);


app.listen(3001, function () {
  console.log('Aplicação escutando na porta 3001!');
});
