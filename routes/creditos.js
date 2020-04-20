const express = require('express');
const router = express.Router();
const homeController = require('../controllers/controllerHome')


router.get('/creditos' , homeController.creditos);

module.exports = router;