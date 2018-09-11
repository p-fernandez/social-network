'use strict';

const AccountController = require('../../controllers/account-controller');
const loginUseCase = require('../../../domain/di/use-cases/login-builder');
const registerUseCase = require('../../../domain/di/use-cases/register-builder');
const responseAdapter = require('../../../domain/di/adapters/response-adapter-builder');

const accountController = new AccountController(loginUseCase, registerUseCase, responseAdapter);

module.exports = accountController;
