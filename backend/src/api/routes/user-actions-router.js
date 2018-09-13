'use strict';

const express = require('express');
const userActionsController = require('../di/controllers/user-actions-controller-builder');
const authRequestValidator = require('../di/middlewares/auth-request-validator-builder');
const userRequestValidator = require('../di/middlewares/user-request-validator-builder');
const requestValidator = require('../di/middlewares/request-validator-builder');
const { addConnectionParams, removeConnectionParams } = require('../../domain/models/param-validators');

const router = express.Router();

router.post('/:userId/add/:requestedId', authRequestValidator.checkAuthorization, userRequestValidator.checkUserAuthorization, addConnectionParams, requestValidator.checkErrors, userActionsController.addConnection);
router.delete('/:userId/remove/:requestedId', authRequestValidator.checkAuthorization, userRequestValidator.checkUserAuthorization, removeConnectionParams, requestValidator.checkErrors, userActionsController.removeConnection);

module.exports = router;
