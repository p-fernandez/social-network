'use strict';

class ResponseDecorator {
  constructor() {
    this.authResponse = this.authResponse.bind(this);
  }

  authResponse(data, defaultCode = 200) {
    const { code, message } = data;
    const status = code || defaultCode;
    const payload = message ? { message } : data;
    return {
      status,
      payload,
    };
  }
}

module.exports = ResponseDecorator;
