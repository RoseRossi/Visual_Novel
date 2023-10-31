//libs
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
require('./db');

//inicializaciones
const app = express();

//Puerto para el despliegue en producción
const { PORT } = process.env;

//configuraciones
app.set('port', PORT || 3700);


//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(routes);

//despliegue del servidor
app.listen(app.get('port'), () =>
{
    console.log('Server on port', app.get('port'));
});