'use strict';

const { check } = require('express-validator/check');

const userId = check('userId').not().isEmpty().trim()
  .escape()
  .withMessage('Must be a valid userId');
const requestedId = check('requestedId').not().isEmpty().trim()
  .escape()
  .withMessage('Must be a valid userId');

const addConnectionParams = [
  userId,
  requestedId,
];

const removeConnectionParams = [
  userId,
  requestedId,
];

module.exports = {
  addConnectionParams,
  removeConnectionParams,
};
