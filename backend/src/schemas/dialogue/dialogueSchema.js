const mongoose = require('mongoose');

// Definir el esquema de la colección
const dialogueSchema = new mongoose.Schema({
    questions: {
        a: {    
            text: {
                type: String,
                required: false
            },
            score: {
                type: Number,
                required: false
            }
        },
        b: {
            text: {
                type: String,
                required: false
            },
            score: {
                type: Number,
                required: false
            }
        },
        c: {
            text: {
                type: String,
                required: false
            },
            score: {
                type: Number,
                required: false
            }
        },
        d: {
            text: {
                type: String,
                required: false
            },
            score: {
                type: Number,
                required: false
            }
        },
        description: {
            type: String,
            required: true
        }
    },
    scene: {
        type: Number,
        required: true
    },
    sequence: {
        type: Number,
        required: true
    },
    nextScene: {
        type: Number,
        required: false
    },
    nextSequence: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('DialogueSchema', dialogueSchema);