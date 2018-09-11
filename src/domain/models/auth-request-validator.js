'use strict';

class AuthRequestValidator {
  constructor(tokenEntity) {
    this.tokenEntity = tokenEntity;

    this.checkAuthorization = this.checkAuthorization.bind(this);
  }

  checkAuthorization(req, res, next) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        message: 'No authorization given',
      });
    }

    return this.tokenEntity.verifyToken(authorization)
      .then((data) => {
        if (data) {
          return next();
        }

        return res.status(403).json({
          message: 'Forbidden',
        });
      })
      .catch(err => next(err));
  }
}

module.exports = AuthRequestValidator;
