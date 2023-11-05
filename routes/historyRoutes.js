const express = require('express');
const router = express.Router();
const historyController = require('../controllers/historyController')

router.post('/viewHistory', historyController)

module.exports = router