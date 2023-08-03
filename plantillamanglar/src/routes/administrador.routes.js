const express = require('express');
const router = express.Router();
const administradorController = require('../controllers/administrador.controller');

router.post('/agregar-universidad', administradorController.agregarUniversidad);
router.get('/users/administrador', administradorController.mostrarUniversidades);
//cambie/ del users

module.exports = router;




