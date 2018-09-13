'use strict';

class AuthController {
  constructor(getTokenUseCase, responseAdapter) {
    this.getTokenUseCase = getTokenUseCase;
    this.responseAdapter = responseAdapter;

    this.getToken = this.getToken.bind(this);
  }

  getToken(req, res, next) {
    const { digest } = req.body;

    this.getTokenUseCase.execute(digest)
      .then((data) => {
        const { status, payload } = this.responseAdapter.authResponse(data);
        res.status(status).json(payload);
      })
      .catch(err => next(err));
  }
}

module.exports = AuthController;
