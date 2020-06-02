const express = require('express');
const routes = express.Router();
const mysql = require('../database/mysql').pool;
const multer = require('multer');

/**
 * Configurações do Multer 
 */
const storage = multer.diskStorage({  
  destination: function (req, file, cb) {
    cb(null, '..', '..','tmp', 'uploads');
  },
  filename: function(req, file, cb) {
    cb (null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif"
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Tipo de arquivo inválido"));
    }
 }
});


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
  
  // Insere um Requerimento SCA
  routes.post('/', upload.single('docAnexo'), (req, res, next) => {
    const { matricula, curso, dia_ausente, observacoes, } = req.body;
    mysql.getConnection((error, conn) => {
      conn.query(
        `INSERT INTO segundaChamada
        (matricula, curso, dia_ausente, observacoes, docAnexo)
        VALUES (?, ?, ?, ?, ?)`,
        [
          matricula,
          curso,
          dia_ausente,
          observacoes,
          req.file.path
        ],
        (error, resultado, field) => {
          conn.release();
          if(error){ res.status(500).send({ error: error }) }
          const response = {
            mensagem: 'Requerimento encaminhado com sucesso!',
            RequerimentoCriado: {
              matricula:   matricula,
              curso:       curso,
              observacoes: observacoes,
              docAnexo:    req.file.path,
            }
          }
          return res.status(201).send(response);
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
