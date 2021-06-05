const colors = require('colors');
const express = require('express');
const path = require('path');

//Inicia la app
const app = express();

//Configuraciones
app.set('port', 3000);
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

//middlewares


//Enrutamiento
app.use(require('./routes/routes'));

//Archivos estaticos
app.use(express.static(path.join(__dirname + '/public')));

//Escuchando al servidor
app.listen(app.get('port'), ()=>{
    console.log(('Servidor en puerto ' + app.get('port')).cyan);
});