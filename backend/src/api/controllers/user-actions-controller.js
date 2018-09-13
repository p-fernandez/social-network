'use strict';

class UserActionsController {
  constructor(addConnectionUseCase, removeConnectionUseCase) {
    this.addConnectionUseCase = addConnectionUseCase;
    this.removeConnectionUseCase = removeConnectionUseCase;

    this.addConnection = this.addConnection.bind(this);
    this.removeConnection = this.removeConnection.bind(this);
  }

  addConnection(req, res, next) {
    const { userId, requestedId } = req.params;

    this.addConnectionUseCase.execute(userId, requestedId)
      .then((data) => {
        if (data) {
          const { code: status, message } = data;
          const payload = { message };
          return res.status(status).json(payload);
        }

        return res.status(204).send();
      })
      .catch(err => next(err));
  }

  removeConnection(req, res, next) {
    const { userId, requestedId } = req.params;

    this.removeConnectionUseCase.execute(userId, requestedId)
      .then((data) => {
        if (data) {
          const { code: status, message } = data;
          const payload = { message };
          return res.status(status).json(payload);
        }

        return res.status(204).send();
      })
      .catch(err => next(err));
  }
}

module.exports = UserActionsController;
