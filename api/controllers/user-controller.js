'use strict';

class UserController {
  constructor(userManager) {
    this.manager = userManager;

    this.addConnection = this.addConnection.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.removeConnection = this.removeConnection.bind(this);
  }

  addConnection(req, res, next) {
    const { userId, requestedId } = req.params;

    this.manager.addConnection(userId, requestedId)
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

  getUsers(req, res, next) {
    this.manager.getAllUsers()
      .then(data => res.json(data))
      .catch(err => next(err));
  }

  removeConnection(req, res, next) {
    const { userId, requestedId } = req.params;

    this.manager.removeConnection(userId, requestedId)
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

module.exports = UserController;
