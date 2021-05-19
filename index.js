require('dotenv').config();

const express = require('express'); // Asi se hacen las importaciones en node y javaScrips
const cors = require('cors');

const { dbConection } = require('./database/config');

//crear el servidor de express
const app = express();

//configurar CORS
app.use( cors() );

//lectura y parseo del body
app.use( express.json() );

// Base de datos
dbConection();

//Directorio publico
app.use( express.static('public') );

//hosp
// user123
//Rutas

//Rutas
app.use( '/api/usuarios', require('./routes/usuarios') );
app.use( '/api/hospitales', require('./routes/hospitales') );
app.use( '/api/medicos', require('./routes/medicos') );
app.use( '/api/todo', require('./routes/busquedas') );
app.use( '/api/login', require('./routes/auth') );
app.use( '/api/upload', require('./routes/uploads') );

app.listen( process.env.PORT, () => {
    console.log('servidor corriendo en puerto' + process.env.PORT);
});