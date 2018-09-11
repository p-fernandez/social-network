'use strict';

const express = require('express');
const authController = require('../di/controllers/auth-controller-builder');

const router = express.Router();

router.post('/token', authController.getToken);

module.exports = router;
