const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController')

router.post('/getData', dataController)

module.exports = router