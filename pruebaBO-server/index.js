const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config(); //toma la configuración de enviroments



//Crear el servidor/aplicación de express

const app = express();

//Conexión a DB
dbConnection();

//Directorio Público
app.use( express.static('public') );

//CORS
app.use( cors() );

//Lectura y Parseo del body
app.use( express.json() );

//Rutas
app.use( '/api/clientes', require('./routes/clientes') );


app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
})


