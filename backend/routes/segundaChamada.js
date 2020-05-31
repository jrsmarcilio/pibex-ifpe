const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

// INSERE UMA REQUERIMENTO SCA
router.post('/', (req, res, next) => {
  mysql.getConnection((error, conn) => {
    conn.query(
      `INSERT INTO segundaChamada
      (id_docente, matricula, curso, dia_perdida, observacoes)
      VALUES (?, ?, ?, ?, ?)`,
      [req.body.id_docente, req.body.matricula, req.body.curso,
        req.body.dia_perdida, req.body.observacoes],
      (error, resultado, field) => {
        conn.release();
        if(error){
          res.status(500).send({
            error: error,
            response: null
          });
        }
        res.status(201).send({
          mensagem: 'Requerimento encaminhado com sucesso!',
        });
      }
    )
  });
});

// RETORNA A LISTA COM TODAS AS REQUERIMENTOS SCA
router.get('/', (req, res, next) => {
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

// RETORNA OS DADOS DE UMA REQUISIÇÃO SCA 
router.get('/:matricula', (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if(error) { return res.status(500).send({ error: error }) }
    conn.query(
      'SELECT * FROM segundaChamada WHERE matricula = ?;', [req.body.matricula],
      (error, resultado, fields) => {
        conn.release();
        if (error) { return res.status(500).send({ error: error }) }
        return res.status(200).send({ response: resultado })
      }
    )
  });
});

// EXCLUI UMA REQUISIÇÃO SCA
router.delete('/', (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if(error) { return res.status(500).send({ error: error }) }
    conn.query(
      'DELETE FROM segundaChamada WHERE matricula = ?;',
      [req.body.matricula],
      (error, resultado, fields) => {
        conn.release();
        if (error) { return res.status(500).send({ error: error }) }
        res.status(202).send({ mensagem: 'Requerimento removido com sucesso' })
      }
    )
  });
});


module.exports = router;
