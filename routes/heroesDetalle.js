const express = require('express');
const router = express.Router();
const heroesController = require('../controllers/controllerHeroes');

router.get('/heroes/detalle/:id' , heroesController.heroesDetalles);

module.exports = router;