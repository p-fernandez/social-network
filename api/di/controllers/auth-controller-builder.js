'use strict';

const AuthController = require('../../controllers/auth-controller');
const authManager = require('../managers/auth-manager-builder');
const responseDecorator = require('../decorators/response-decorator-builder');

const authController = new AuthController(authManager, responseDecorator);

module.exports = authController;
