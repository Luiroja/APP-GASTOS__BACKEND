const express = require('express');
const router = express.Router();
const {getGastos, postGastos, putGastos, deleteGastos} = require('../controllers/gastoControllers')

router.route('/').get(getGastos).post(postGastos);
router.route('/:id').put(putGastos).delete(deleteGastos);


module.exports = router;