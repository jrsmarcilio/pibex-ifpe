const express = require('express');
const routes = express.Router();
const mysql = require('../database/mysql').pool;


routes.get('/listreq', (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if(error) { return res.status(500).send({ error: error }) }
    conn.query(
      'SELECT * FROM segundaChamada;',
      (error, resultado, fields) => {
        conn.release();
        if (error) { return res.status(500).send({ error: error }) }
        return res.status(200).send({ response: resultado })
      }
      )
    });
  });


  module.exports = routes;