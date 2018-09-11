'use strict';

const express = require('express');
const accountController = require('../di/controllers/account-controller-builder');
const requestValidator = require('../di/middlewares/request-validator-builder');
const { loginPayload, registerPayload } = require('../../domain/models/payload-validators');

const router = express.Router();

router.post('/login', loginPayload, requestValidator.checkErrors, accountController.login);
router.post('/register', registerPayload, requestValidator.checkErrors, accountController.register);

module.exports = router;
