'use strict';

const { check } = require('express-validator/check');

const email = check('email').not().isEmpty().isEmail()
  .normalizeEmail()
  .escape()
  .withMessage('Must be a valid email');
const password = check('password').not().isEmpty().trim()
  .escape()
  .isLength({ min: 4, max: 8 })
  .withMessage('Password must be between 4 and 8 chars!');

const loginPayload = [
  email,
  password,
];

const registerPayload = [
  email,
  password,
];

module.exports = {
  loginPayload,
  registerPayload,
};
