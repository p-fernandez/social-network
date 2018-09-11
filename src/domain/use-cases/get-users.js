'use strict';

class GetUsersUseCase {
  constructor(userEntity) {
    this.userEntity = userEntity;
  }

  execute() {
    return new Promise((resolve, reject) => {
      this.userEntity.getAllUsers()
        .then(resolve)
        .catch(reject);
    });
  }
}

module.exports = GetUsersUseCase;
