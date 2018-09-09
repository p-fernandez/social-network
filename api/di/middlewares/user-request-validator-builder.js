'use strict';

const UserRequestValidator = require('../../middlewares/user-request-validator');
const tokenManager = require('../managers/token-manager-builder');

const userRequestValidator = new UserRequestValidator(tokenManager);

module.exports = userRequestValidator;
