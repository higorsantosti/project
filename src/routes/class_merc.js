const express = require('express');
const router = express.Router();
const { getAllClassMercadologica } = require('../api/api_class_merc'); // Importe a função correta da API

router.get('/', getAllClassMercadologica); // Use a função correta na rota

module.exports = router;
