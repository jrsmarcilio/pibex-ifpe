const express = require('express');
const routes = express.Router();
const mysql = require('../database/mysql').pool;

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
