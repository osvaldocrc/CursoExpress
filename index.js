const colors = require('colors');
/*
    Curso Express
*/

//Instalar Express
// En consola npm install express
const express = require('express');
//const bodyParser = require('body-parser');

const app = express();

const morgan = require('morgan');

/*
app.post('/api', (req, res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
});*/

//Requiriendo Rutas
const routes = require('./routes');
const routesApi = require('./routers-api');

//console.log(__dirname + '\\views');

//Settings
app.set('appName', 'Mi primer server');
//Establece donde estan las vistas
app.set('views', __dirname + '\\views');
//Establece el motor de plantillas
app.set('view engine', 'ejs');

//Middlewares
//Morgan
//app.use(morgan('dev'));
//app.use(morgan('short'));
app.use(morgan('combined'));


/* Se mejorró con Morgan
const urlData = function (req, res, next) {
    console.log('request url: ' + req.url);
    next();
}
app.use(urlData);

app.use((req, res, next) => {
    console.log('ha pasado por esta funcion');
    next();
});
*/

//app.use(bodyParser.urlencoded({ extended: true }));
/*app.use(bodyParser.json());
//app.use(bodyParser.raw());

app.post('/api', (req, res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
});*/

//Rutas
app.use(routes);
app.use('/api', routesApi);

//Si no encontrado coincidencias de rutas
//Para todas la rutas, cuando haya llegado hasta aquí
app.get('*', (req, res) => {
    res.end('Archivo no encontrado');
});


//
app.listen(3000, () => {
    console.log('Servidor Funcionando'.green);
    console.log('Nombre de la App: ', app.get('appName'));
});
console.log('Ultima Linea'.yellow);



/*
Forma Node JS de crear un servidor

const http = require('http');

http.createServer((req, res) => {
    res.end('Hello World');
}).listen(3000);
*/

