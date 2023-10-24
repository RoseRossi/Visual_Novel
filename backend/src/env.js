const { config } = require('dotenv');
config();

//exportar modulo
module.exports = {  
    uriMongo: process.env.URIMOONGODB,
}
