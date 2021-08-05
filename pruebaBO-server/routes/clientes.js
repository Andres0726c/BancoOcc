const { Router } = require('express');
const { mostrarUsuario } = require('../controllers/user.controller');


const router = Router();

//Mostrar
router.get( '/clientes', mostrarUsuario );


module.exports = {
    router
};