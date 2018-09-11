'use strict';

const AuthController = require('../../controllers/auth-controller');
const getTokenUseCase = require('../../../domain/di/use-cases/get-token-builder');
const responseAdapter = require('../../../domain/di/adapters/response-adapter-builder');

const authController = new AuthController(getTokenUseCase, responseAdapter);

module.exports = authController;
