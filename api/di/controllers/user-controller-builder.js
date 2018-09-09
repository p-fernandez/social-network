'use strict';

const UserController = require('../../controllers/user-controller');
const UserManager = require('../managers/user-manager-builder');

const userController = new UserController(UserManager);

module.exports = userController;
