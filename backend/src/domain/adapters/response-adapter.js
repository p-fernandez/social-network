'use strict';

class ResponseAdapter {
  constructor() {
    this.accountResponse = this.accountResponse.bind(this);
    this.authResponse = this.authResponse.bind(this);
  }

  accountResponse(data, defaultCode) {
    return this.response(data, defaultCode);
  }

  authResponse(data, defaultCode = 200) {
    return this.response(data, defaultCode);
  }

  response(data, defaultCode = 200) {
    const { code, message } = data;
    const status = code || defaultCode;
    const payload = message ? { message } : data;
    return {
      status,
      payload,
    };
  }
}

module.exports = ResponseAdapter;
