'use strict';

const UserRequestValidator = require('../../middlewares/user-request-validator');
const tokenEntity = require('../../../domain/di/entities/token-entity-builder');

const userRequestValidator = new UserRequestValidator(tokenEntity);

module.exports = userRequestValidator;
