const mongoose = require('mongoose');
const { uriMongo } = require('./env');

mongoose.connect(uriMongo, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => 
{
  console.error('Error de conexión a MongoDB:', error);
});

db.once('open', () =>
{
  console.log('Conexión a MongoDB establecida con éxito');
});