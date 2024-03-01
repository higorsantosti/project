const { Pool } = require('pg');
const dbConfig = require('../dbConfig');


const pool = new Pool(dbConfig);

const getAllClassMercadologica = (req, res) => {
  pool.query('SELECT * FROM class_mercadologica', (error, results) => {
    if (error) {
      console.error('Erro ao obter dados da tabela:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
      return;
    }
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getAllClassMercadologica,
};
