'use strict';

const express = require('express');
const UserController = require('../di/controllers/user-controller-builder');
const AuthRequestValidator = require('../di/middlewares/auth-request-validator-builder');
const UserRequestValidator = require('../di/middlewares/user-request-validator-builder');
const RequestValidator = require('../di/middlewares/request-validator-builder');
const { addConnectionParams, removeConnectionParams } = require('../middlewares/param-validators');

const router = express.Router();

router.get('/', UserController.getUsers);
router.post('/:userId/add/:requestedId', AuthRequestValidator.checkAuthorization, UserRequestValidator.checkUserAuthorization, addConnectionParams, RequestValidator.checkErrors, UserController.addConnection);
router.delete('/:userId/remove/:requestedId', AuthRequestValidator.checkAuthorization, UserRequestValidator.checkUserAuthorization, removeConnectionParams, RequestValidator.checkErrors, UserController.removeConnection);

module.exports = router;
