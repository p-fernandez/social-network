'use strict';

const express = require('express');
const AuthController = require('../di/controllers/auth-controller-builder');
const AuthRequestValidator = require('../di/middlewares/auth-request-validator-builder');
const RequestValidator = require('../di/middlewares/request-validator-builder');
const { loginPayload, registerPayload } = require('../middlewares/payload-validators');

const router = express.Router();

router.post('/login', AuthRequestValidator.checkAuthorization, loginPayload, RequestValidator.checkErrors, AuthController.login);
router.post('/register', AuthRequestValidator.checkAuthorization, registerPayload, RequestValidator.checkErrors, AuthController.register);
router.post('/token', AuthController.getToken);

module.exports = router;
