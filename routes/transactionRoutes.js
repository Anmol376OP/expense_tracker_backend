const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController')

router.post('/addTransaction', transactionController)

module.exports = router