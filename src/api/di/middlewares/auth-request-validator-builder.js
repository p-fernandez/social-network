'use strict';

const AuthRequestValidator = require('../../middlewares/auth-request-validator');
const tokenEntity = require('../../../domain/di/entities/token-entity-builder');

const authRequestValidator = new AuthRequestValidator(tokenEntity);

module.exports = authRequestValidator;
