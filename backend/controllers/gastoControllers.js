const asyncHandler = require ('express-async-handler');
const Gasto = require('../models/gastoModel');


const getGastos = asyncHandler(async(req,res) => {
    const gastos = await Gasto.find()
    res.status(200).json(gastos)
})


const postGastos = asyncHandler(async(req,res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error ('Por favor ingresa un gasto')
    }

    const gasto = await Gasto.create ({
        text: req.body.text,
        cantidad: req.body.cantidad
    })
    res.status(200).json(gasto)
})



const putGastos = asyncHandler(async(req,res) => {
    const gasto = await Gasto.findById(req.params.id)
    if (!gasto) {
        res.status(400)
        throw new Error ('Gasto no encontrado')
    }
    const gastoUpdated = await Gasto.findByIdAndUpdate(req.params.id, req.body, {new : true});

    res.status(200).json(gastoUpdated)
})



const deleteGastos = asyncHandler(async(req,res) => {
    const gasto = await Gasto.findById(req.params.id)
    if (!gasto) {
        res.status(400)
        throw new Error ('Gasto no encontrado')
    }
    await gasto.remove()
    res.status(200).json({id : req.params.id})
})

module.exports = {
    getGastos,
    postGastos,
    putGastos,
    deleteGastos
}