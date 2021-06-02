const colors = require('colors');
const express = require('express');
const path = require('path');

//Inicia la app
const app = express();

//Configuraciones
app.set('port', 3000);
app.set('view engine', 'ejs');

//middlewares


//Enrutamiento
app.get('/', (req, res)=>{
    res.render('index.ejs');
});

//Archivos estaticos


//Escuchando al servidor
app.listen(app.get('port'), ()=>{
    console.log(('Servidor en puerto ' + app.get('port')).cyan);
});