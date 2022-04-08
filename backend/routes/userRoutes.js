const express = require('express');
const router = express.Router();
const {registerUser, loginUser, perfilUser} = require('../controllers/userControllers');
const { protect } = require('../middleware/authMiddleware')


router.post('/', registerUser);
router.post('/login', loginUser);
//protección de la ruta perfil agregando el segundo parámetro (protect)
router.get('/perfil', protect, perfilUser);

module.exports = router;