const express = require('express');
const routes = express.Router();
const mysql = require('../database/mysql').pool;
const multer = require('multer');


/**
 * Configurações do Multer para captura de arquivos
 */
const storage = multer.diskStorage({  
  destination: function (req, file, cb) {
    cb(null, './tmp/uploads' );
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

routes.post('/newreq', upload.single('docAnexo'), (req, res, next) => {
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
            atestado: req.file.path
          }
        }
        return res.status(201).send(response);
      }
    )
  });
});

module.exports = routes;