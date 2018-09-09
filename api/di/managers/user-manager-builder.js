'use strict';

const UserManager = require('../../managers/user-manager');
const mongoService = require('../services/mongo-service-builder');

const userManager = new UserManager(mongoService);

module.exports = userManager;
