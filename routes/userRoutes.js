const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController')
const registerController = require('../controllers/registerController')

router.post('/login', loginController)
router.post('/register', registerController)

module.exports = router