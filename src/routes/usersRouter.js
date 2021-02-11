const express = require('express');
const router = express.Router();

// Llamada al controlador adecuado
const usersController = require('../controllers/usersController')

// Se usa el método correspondiente segun la ruta ingresada. 
// Mirar mainController.js en la carpeta controllers
router.get('/login', usersController.login);
router.get('/register', usersController.register);

module.exports = router;