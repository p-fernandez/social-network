'use strict';

const express = require('express');
const userController = require('../di/controllers/user-controller-builder');
const authRequestValidator = require('../di/middlewares/auth-request-validator-builder');

const router = express.Router();

router.get('/', authRequestValidator.checkAuthorization, userController.getUsers);

module.exports = router;
