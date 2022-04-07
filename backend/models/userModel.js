const mongoose = require('mongoose');

const userSchema = mongoose.Schema (
    {
        name: {
            type: 'string',
            required: [true, 'Por favor escribe un nombre']
        },
        email: {
            type: 'string',
            required: [true, 'Por favor escribe un email'],
            unique : true
        },
        password: {
            type: 'string',
            required: [true, 'Por favor escribe un password']
        }
    }, {
        timestamps : true,
    }
)

module.exports = mongoose.model ('User', userSchema)