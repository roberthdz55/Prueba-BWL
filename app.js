const express = require ('express');
const dotenv = require('dotenv');
const cookieParse = require ('cookie-parser');
const res = require('express/lib/response');
const cookieParser = require('cookie-parser');

const app= express();

//motor de plantillas 
app.set('view engine','ejs');

//carpeta puclic para archivos Estaticos 
app.use(express.static('public'));

//procesar datos para registro, login, configuracion node
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//variabes de entorno
dotenv.config({path: './env/.env'});

//configuracion de las cookis
app.use(cookieParser())
//llamar al archivo de rutas
app.use('/', require('./routes/router'))


//Para eliminar la cache 
app.use(function(req, res, next) {
    if (!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});
app.listen(3000, ()=>{
    console.log('SERVER UP runnung in http://localhost:3000 ')
});