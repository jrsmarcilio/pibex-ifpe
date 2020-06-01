const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;
const multer = require('multer');

const storage = multer.diskStorage({  // Redireciona e Renomeia os Uploads
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb (null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
});

const upload = multer({ // Limitando os Uploads com até 5 MB
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 
  }
});

// Insere um Requerimento SCA
router.post('/', upload.single('docAnexo'), (req, res, next) => {
  console.log(req.file);
  mysql.getConnection((error, conn) => {
    conn.query(
      `INSERT INTO segundaChamada
      (matricula, curso, dia_perdida, observacoes, doc_anexo)
      VALUES (?, ?, ?, ?, ?)`,
      [
        //req.body.id_docente,
        req.body.matricula,
        req.body.curso,
        req.body.dia_perdida,
        req.body.observacoes,
        req.file.path
      ],
      (error, resultado, field) => {
        conn.release();
        if(error){ res.status(500).send({ error: error }) }
        const response = {
          mensagem: 'Requerimento encaminhado com sucesso!',
          RequerimentoCriado: {
            matricula: req.body.matricula,
            curso: req.body.curso,
            observacoes: req.body.observacoes,
            doc_anexo: req.file.path,
          }
        }
        return res.status(201).send(response);
      }
    )
  });
});

// Retorna a lista com todas os Requerimentos SCA
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

// Retorna os dados de um Requerimento SCA 
router.get('/:matricula', (req, res, next) => {
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
router.delete('/', (req, res, next) => {
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

module.exports = router;
