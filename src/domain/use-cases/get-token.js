'use strict';

class GetTokenUseCase {
  constructor(tokenEntity) {
    this.tokenEntity = tokenEntity;
  }

  execute(digest) {
    return new Promise((resolve, reject) => {
      this.tokenEntity.getToken(digest)
        .then(resolve)
        .catch(reject);
    });
  }
}

module.exports = GetTokenUseCase;
