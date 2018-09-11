'use strict';

const { validationResult } = require('express-validator/check');

class RequestValidator {
  constructor() {
    this.checkErrors = this.checkErrors.bind(this);
  }

  checkErrors(req, res, next) {
    try {
      validationResult(req).throw();
      return next();
    } catch (err) {
      return res.status(422).json({ errors: err.mapped() });
    }
  }
}

module.exports = RequestValidator;
