'use strict';

const AuthRequestValidator = require('../../middlewares/auth-request-validator');
const tokenManager = require('../managers/token-manager-builder');

const authRequestValidator = new AuthRequestValidator(tokenManager);

module.exports = authRequestValidator;
