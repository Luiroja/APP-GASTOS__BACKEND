const express = require('express');
const router = express.Router();
const {getGastos, postGastos, putGastos, deleteGastos} = require('../controllers/gastoControllers')
const {protect} = require('../middleware/authMiddleware');


router.route('/').get(protect, getGastos).post(protect, postGastos);
router.route('/:id').put(protect, putGastos).delete(protect, deleteGastos);


module.exports = router; 