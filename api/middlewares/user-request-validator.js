'use strict';

class UserRequestValidator {
  constructor(tokenManager) {
    this.tokenManager = tokenManager;

    this.checkUserAuthorization = this.checkUserAuthorization.bind(this);
  }

  checkUserAuthorization(req, res, next) {
    const { authorization } = req.headers;
    const { userId } = req.params;

    return this.tokenManager.checkUser(authorization, userId)
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

module.exports = UserRequestValidator;
