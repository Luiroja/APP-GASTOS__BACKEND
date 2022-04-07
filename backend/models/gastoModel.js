const mongoose = require('mongoose');

const gastoSchema = mongoose.Schema ({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text : {
        type : String,
        required: [true, 'Por favor escribe un texto']
    },
    cantidad : {
        type : Number,
        required: [true, 'Por favor escribe una cantidad']
    }

}, {
    timestamps : true,
})

module.exports = mongoose.model('Gasto', gastoSchema)