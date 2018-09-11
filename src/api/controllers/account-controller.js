'use strict';

class AuthController {
  constructor(loginUseCase, registerUseCase, responseAdapter) {
    this.loginUseCase = loginUseCase;
    this.registerUseCase = registerUseCase;
    this.responseAdapter = responseAdapter;

    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  login(req, res, next) {
    const { email, password } = req.body;

    this.loginUseCase.execute(email, password)
      .then((data) => {
        const { status, payload } = this.responseAdapter.accountResponse(data);
        res.status(status).json(payload);
      })
      .catch(err => next(err));
  }

  register(req, res, next) {
    const { email, password } = req.body;

    this.registerUseCase.execute(email, password)
      .then((data) => {
        const { status, payload } = this.responseAdapter.accountResponse(data, 201);
        res.status(status).json(payload);
      })
      .catch(err => next(err));
  }
}

module.exports = AuthController;
