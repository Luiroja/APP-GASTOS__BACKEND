const asyncHandler = require ('express-async-handler');


const getGastos = asyncHandler(async(req,res) => {
    res.status(200).json({message: 'obtener gastos'})
})

const postGastos = asyncHandler(async(req,res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error ('Por favor ingresa un gasto')
    }
    res.status(200).json({message: 'crear un gasto'})
})

const putGastos = asyncHandler(async(req,res) => {
    res.status(200).json({message: `modificar el gasto ${req.params.id}`})
})

const deleteGastos = asyncHandler(async(req,res) => {
    res.status(200).json({message: `eliminar el gasto ${req.params.id}`})
})

module.exports = {
    getGastos,
    postGastos,
    putGastos,
    deleteGastos
}