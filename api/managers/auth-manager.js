'use strict';

class AuthManager {
  constructor(passwordManager, tokenManager, userManager) {
    this.passwordManager = passwordManager;
    this.tokenManager = tokenManager;
    this.userManager = userManager;

    this.getToken = this.getToken.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  getToken(secret) {
    return new Promise((resolve, reject) => {
      this.tokenManager.getToken(secret)
        .then(resolve)
        .catch(reject);
    });
  }

  login(email, password) {
    return new Promise((resolve, reject) => {
      this.userManager.getUser(email)
        .then(user => Promise.all([
          user,
          this.passwordManager.compare(password, user.password),
        ]))
        .then(([user, validPassword]) => {
          if (validPassword) {
            return resolve(user);
          }

          return resolve({
            code: 403,
            message: 'Invalid password',
          });
        })
        .catch(reject);
    });
  }

  register(email, password) {
    return new Promise((resolve, reject) => {
      this.userManager.userExists(email)
        .then((exists) => {
          if (exists) {
            return resolve({
              code: 409,
              message: 'Email in use',
            });
          }

          return this.passwordManager.getPasswordHashed(password);
        })
        .then(pwdHashed => this.userManager.createUser(email, pwdHashed))
        .then(resolve)
        .catch(reject);
    });
  }
}

module.exports = AuthManager;
