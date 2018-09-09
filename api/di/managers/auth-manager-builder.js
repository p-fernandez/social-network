'use strict';

const AuthManager = require('../../managers/auth-manager');
const passwordManager = require('./password-manager-builder');
const tokenManager = require('./token-manager-builder');
const userManager = require('./user-manager-builder');

const authManager = new AuthManager(passwordManager, tokenManager, userManager);

module.exports = authManager;
