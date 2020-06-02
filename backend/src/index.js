const express = require('express');
const mysql = require('mysql2');

const app = express();

const Routes = require('./routes/routes')

app.use(express.json());
app.use(express.urlencoded({ extended: false})); 

app.use('/', Routes);

app.listen(3000)