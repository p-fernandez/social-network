'use strict';

class UserController {
  constructor(getUsersUseCase) {
    this.getUsersUseCase = getUsersUseCase;

    this.getUsers = this.getUsers.bind(this);
  }

  getUsers(req, res, next) {
    this.getUsersUseCase.execute()
      .then(data => res.json(data))
      .catch(err => next(err));
  }
}

module.exports = UserController;
