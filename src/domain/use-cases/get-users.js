'use strict';

class GetUsersUseCase {
  constructor(userEntity) {
    this.userEntity = userEntity;
  }

  execute() {
    return this.userEntity.getAllUsers();
  }
}

module.exports = GetUsersUseCase;
