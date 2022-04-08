const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');



const registerUser = asyncHandler(async(req, res) => {
    //desectruramos los datos del body (MODEL)
    const {name,email,password} = req.body
    // verificamos que los datos esten completos
    if(!name || !email || !password) {
        res.status (400)
        throw new Error('Te faltan datos')
    }
    //Verificamos que NO exista el usuario
    const userExist = await User.findOne({email})
    if (userExist) {
        res.status (400) 
        throw new Error ('Ese usuario ya existe')
    }

    //encriptando el password con el HASH
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Creamos el Usuario 
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    //mostramos el usuario
    if (user) {
        res.status (201).json ({
            id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400) 
        throw new Error ('Los datos no son válidos')
    }
    
})




const loginUser = asyncHandler(async(req, res) => {
    //desectruramos el body
    const {email, password} = req.body

    //verificamos si el usuario existe
    const user = await User.findOne ({email})
    // si existe el usuario comparamos el password con el hashedPassword
    if (user&& (await bcrypt.compare(password, user.password))) {
        res.status (200).json ({
            id: user.id, 
            name: user.name,
            email: user.email,
            token: generateToken (user.id)
        })
    } else {
        res.status (400) 
        throw new Error ('Credenciales incorrectas')
    }
    
})


const perfilUser = asyncHandler(async(req, res) => {

     const { id, name, email } = req.user
    
     res.status(200).json({
        id,
        name,
        email
    })
    
})


// generamos el Token 
const generateToken = (id) => {
    return jwt.sign ({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}


module.exports = {
    registerUser,
    loginUser,
    perfilUser,
}