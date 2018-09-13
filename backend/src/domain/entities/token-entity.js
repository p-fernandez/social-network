'use strict';

const jwt = require('jsonwebtoken');

const { CLIENT_KEY } = process.env;
const EXPIRATION_TIME = process.env.EXPIRATION_TIME || '1h';

class TokenEntity {
  constructor() {
    this.checkUser = this.checkUser.bind(this);
    this.generateToken = this.generateToken.bind(this);
    this.getToken = this.getToken.bind(this);
    this.verifyToken = this.verifyToken.bind(this);
  }

  checkUser(authorization, userId) {
    return new Promise((resolve) => {
      jwt.verify(authorization, CLIENT_KEY, (error, decoded) => {
        if (error || !decoded) {
          return resolve(false);
        }
        const { iss } = decoded;
        return resolve(iss === userId);
      });
    });
  }

  generateToken(userId, role) {
    const info = {
      iss: userId,
      admin: role === 'admin',
    };
    const jwtToken = jwt.sign(info, CLIENT_KEY, { expiresIn: EXPIRATION_TIME });
    return jwtToken;
  }

  getToken(secret) {
    return new Promise((resolve) => {
      const decoded = Buffer.from(secret, 'base64').toString('ascii');
      const [clientKey, userId, role] = decoded.split(':');
      if (CLIENT_KEY === clientKey) {
        const authorization = this.generateToken(userId, role);
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
      jwt.verify(token, CLIENT_KEY, (error, decoded) => {
        if (error || !decoded) {
          return resolve(false);
        }
        return resolve(true);
      });
    });
  }
}

module.exports = TokenEntity;
