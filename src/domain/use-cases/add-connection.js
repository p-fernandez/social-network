'use strict';

class AddConnectionUseCase {
  constructor(userActionsEntity) {
    this.userActionsEntity = userActionsEntity;
  }

  execute(userId, requestedId) {
    return new Promise((resolve, reject) => {
      this.userActionsEntity.addUserConnection(userId, requestedId)
        .then((data) => {
          const {
            matchedCount,
            modifiedCount,
          } = data;

          if (matchedCount === 1 && modifiedCount === 1) {
            return resolve();
          }

          return resolve({
            code: matchedCount === 1 ? 202 : 404,
            message: 'Could not add connection',
          });
        })
        .catch(reject);
    });
  }
}

module.exports = AddConnectionUseCase;
