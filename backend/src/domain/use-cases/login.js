'use strict';

class LoginUseCase {
  constructor(passwordEntity, userEntity) {
    this.passwordEntity = passwordEntity;
    this.userEntity = userEntity;
  }

  execute(email, password) {
    return new Promise((resolve, reject) => {
      this.userEntity.getUser(email)
        .then((user) => {
          const passwordCompare = user
            ? this.passwordEntity.compare(password, user.password)
            : null;

          return Promise.all([user, passwordCompare]);
        })
        .then(([user, validPassword]) => {
          if (validPassword) {
            const { password: userPassword, ...userWithoutPassword } = user;
            return resolve(userWithoutPassword);
          }

          return resolve({
            code: 401,
            message: 'Invalid password',
          });
        })
        .catch(reject);
    });
  }
}

module.exports = LoginUseCase;
