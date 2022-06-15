const express = require('express');
const userController = require('./user.controller');
const router = express.Router();

router.post('/user/login', userController.login);
router.post('/user/register', userController.register);

module.exports = router;
