const { response } = require('express');
const Usuario = require('../models/Usuario');

crossOriginIsolated('localhost://4200');
const mostrarUsuario = async( req, resp = response ) => {

    const dbUser = await Usuario.findOne({ email });

    if( !dbUser ) {
        return resp.status(400).json({
            ok: false,
            msg: 'El correo no existe'
        });
    }
    return resp.json({
        nit,
        nombre,
        capa,
        segmento,
        gerenteRelacion

    });
}

module.exports = {
    mostrarUsuario
}