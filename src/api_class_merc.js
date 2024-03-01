const express = require('express');
const { Pool } = require('pg');
const dbConfig = require('../dbConfig');

const router = express.Router();
const pool = new Pool(dbConfig);

router.get('/class_merc', (req, res) => { // Alterado para '/class_merc'
  pool.query('SELECT * FROM class_mercadologica', (error, results) => {
    if (error) {
      console.error('Erro ao obter dados da tabela:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
      return;
    }
    res.status(200).json(results.rows);
  });
});

module.exports = router;
