const express = require('express');
const router = express.Router();
const { getAllClassMercadologica } = require('./routes');

router.get('/class_mercadologica', getAllClassMercadologica);

module.exports = router;
