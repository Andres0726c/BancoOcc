const { Schema, model } = require("mongoose");


const UsuarioSchema = Schema({
    nit: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    capa: {
        type: String,
        require: true,
        unique: true
    },
    segmento: {
        type: String,
        require: true
    },
    gerenteRelacion: {
        type: String,
        require: true
    },
});

module.exports = model('Usuario', UsuarioSchema);