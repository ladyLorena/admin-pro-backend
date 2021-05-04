require('dotenv').config();

const express = require('express'); // Asi se hacen las importaciones en node y javaScrips
const cors = require('cors');

const { dbConection } = require('./database/config');

//crear el servidor de express
const app = express();

//configurar CORS
app.use(cors());

//lectura y parseo del body
app.use( express.json() );

// Base de datos
dbConection();

//hosp
// user123
//Rutas

//Rutas
app.use( '/api/usuarios', require('./routes/usuarios') );
app.use( '/api/login', require('./routes/auth') );


app.listen( process.env.PORT, () => {
    console.log('servidor corriendo en puerto' + process.env.PORT);
});