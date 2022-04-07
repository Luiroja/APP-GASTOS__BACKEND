const mongoose = require('mongoose');

const gastoSchema = mongoose.Schema ({
    text : {
        type : String,
        require: [true, 'Por favor escribe un texto']
    },
    cantidad : {
        type : Number,
        require: [true, 'Por favor escribe una cantidad']
    }

}, {
    timestamps : true,
})

module.exports = mongoose.model('Gasto', gastoSchema)