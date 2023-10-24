const mongoose = require('mongoose');

// Definir el esquema de la colección
const PersonalData = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    name:{
        type: String,
        required: false
    },
    lastname:{
        type: String,
        required: false
    },
    phone:{
        type: String,
        required: false
    }
});

module.exports = mongoose.model('PersonalData', PersonalData);