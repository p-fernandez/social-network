'use strict';

const jwt = require('jsonwebtoken');

class TokenManager {
  constructor() {
    this.checkUser = this.checkUser.bind(this);
    this.generateToken = this.generateToken.bind(this);
    this.getToken = this.getToken.bind(this);
    this.verifyToken = this.verifyToken.bind(this);
  }

  checkUser(authorization, userId) {
    return new Promise((resolve) => {
      const appSecret = process.env.SECRET;
      jwt.verify(authorization, appSecret, (error, decoded) => {
        if (error || !decoded) {
          return resolve(false);
        }
        const { iss } = decoded;
        return resolve(iss === userId);
      });
    });
  }

  generateToken(userId) {
    const info = { iss: userId };
    const jwtToken = jwt.sign(info, process.env.SECRET, { expiresIn: '1h' });
    return jwtToken;
  }

  getToken(secret) {
    return new Promise((resolve) => {
      const decoded = Buffer.from(secret, 'base64').toString('ascii');
      const [sharedSecret, userId] = decoded.split(':');
      const appSecret = process.env.SECRET;
      if (appSecret && appSecret === sharedSecret) {
        const authorization = this.generateToken(userId);
        return resolve({
          authorization,
        });
      }

      return resolve({
        code: 401,
        message: 'Unauthorized',
      });
    });
  }

  verifyToken(token) {
    return new Promise((resolve) => {
      const appSecret = process.env.SECRET;
      jwt.verify(token, appSecret, (error, decoded) => {
        if (error || !decoded) {
          return resolve(false);
        }
        return resolve(true);
      });
    });
  }
}

module.exports = TokenManager;
