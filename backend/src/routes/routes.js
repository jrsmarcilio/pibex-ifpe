const express = require('express');
const routes = express.Router();
const mysql = require('../database/mysql').pool;
const multer = require('multer');
const bodyParser = require('body-parser');


// Retorna a lista com todas os Requerimentos SCA

  routes.get('/', (req, res, next) => {
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
  
  
// Retorna os dados de um Requerimento SCA 
routes.get('/:matricula', (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if(error) { return res.status(500).send({ error: error }) }
    conn.query(
      `SELECT * FROM segundaChamada WHERE matricula = '${req.params.matricula}';`,
      (error, resultado, fields) => {
        conn.release();
        if (error) { return res.status(500).send({ error: error }) }
        return res.status(200).send({ response: resultado })
      }
    )
  });
});

// Exclui um Requerimento SCA
routes.delete('/', (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if(error) { return res.status(500).send({ error: error }) }
    conn.query(
      `DELETE FROM segundaChamada WHERE matricula = '${req.body.matricula}';`,
      (error, resultado, fields) => {
        conn.release();
        if (error) { return res.status(500).send({ error: error }) }
        res.status(202).send({ mensagem: 'Requerimento removido com sucesso' })
      }
    )
  });
});

module.exports = routes;
