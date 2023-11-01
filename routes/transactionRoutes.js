const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController')

router.post('/transaction', transactionController)

module.exports = router