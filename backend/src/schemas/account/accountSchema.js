const mongoose = require('mongoose');

// Definir el esquema de la colección
const accountSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Account', accountSchema);