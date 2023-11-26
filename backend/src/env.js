const { config } = require('dotenv');
config();

//exportar modulo
module.exports = {  
    uriMongo: process.env.URIMOONGODB,
    remindEmail: process.env.remindEmail,
    correoToken: process.env.correoToken,
}
