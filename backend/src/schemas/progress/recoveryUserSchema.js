const mongoose = require('mongoose');

// Definir el esquema de la colección
const recoveryUserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    scene: {
        type: Number,
        required: true,
        default: 0
    },
    total: {
        type: Number,
        required: false,
        default: 0
    }
});

module.exports = mongoose.model('ProgressUser', recoveryUserSchema);