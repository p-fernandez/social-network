'use strict';

class AuthController {
  constructor(authManager, responseDecorator) {
    this.authManager = authManager;
    this.decorator = responseDecorator;

    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.getToken = this.getToken.bind(this);
  }

  login(req, res, next) {
    const { email, password } = req.body;

    this.authManager.login(email, password)
      .then((data) => {
        const { status, payload } = this.decorator.authResponse(data);
        res.status(status).json(payload);
      })
      .catch(err => next(err));
  }

  register(req, res, next) {
    const { email, password } = req.body;

    this.authManager.register(email, password)
      .then((data) => {
        const { status, payload } = this.decorator.authResponse(data, 201);
        res.status(status).json(payload);
      })
      .catch(err => next(err));
  }

  getToken(req, res, next) {
    const { secret } = req.body;

    this.authManager.getToken(secret)
      .then((data) => {
        const { status, payload } = this.decorator.authResponse(data);
        res.status(status).json(payload);
      })
      .catch(err => next(err));
  }
}

module.exports = AuthController;
