const registerUser = (req, res) => {
    res.json({message: 'Crear Usuario'})
}

const loginUser = (req, res) => {
    res.json({message: 'Logear Usuario'})
}


const perfilUser = (req, res) => {
    res.json({message: 'Mostrar perfil del Usuario'})
}



module.exports = {
    registerUser,
    loginUser,
    perfilUser
}