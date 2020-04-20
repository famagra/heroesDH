const express = require('express');
const router = express.Router();
const heroesController = require('../controllers/controllerHeroes');

router.get('/heroes/bio/:id/:ok?' , heroesController.heroesBio);

module.exports = router;