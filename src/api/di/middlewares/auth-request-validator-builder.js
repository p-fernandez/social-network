'use strict';

const AuthRequestValidator = require('../../../domain/models/auth-request-validator');
const tokenEntity = require('../../../domain/di/entities/token-entity-builder');

const authRequestValidator = new AuthRequestValidator(tokenEntity);

module.exports = authRequestValidator;
