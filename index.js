require('dotenv').config();

const express = require('express'); // Asi se hacen las importaciones en node y javaScrips
const cors = require('cors');

const { dbConection } = require('./database/config');

//crear el servidor de express
const app = express();

//configurar CORS
app.use(cors());

// Base de datos
dbConection();

//hosp
// user123
//Rutas

app.get( '/', (req,res) => { //colback -> req es lo q se solicita y res la respuesta del servidor
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    });

});

app.listen( process.env.PORT, () => {
    console.log('servidor corriendo en puerto' + process.env.PORT);
});