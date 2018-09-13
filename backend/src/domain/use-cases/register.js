'use strict';

class RegisterUseCase {
  constructor(passwordEntity, userEntity) {
    this.passwordEntity = passwordEntity;
    this.userEntity = userEntity;
  }

  execute(email, password) {
    return new Promise((resolve, reject) => {
      Promise.all([
        this.passwordEntity.getPasswordHashed(password),
        this.userEntity.userExists(email),
      ])
        .then(([passwordHashed, exists]) => {
          if (exists) {
            return resolve({
              code: 409,
              message: 'Email in use',
            });
          }

          return this.userEntity.createUser(email, passwordHashed);
        })
        .then(resolve)
        .catch(reject);
    });
  }
}

module.exports = RegisterUseCase;
