function responseBuilderSuccess(response) {
  const { status, data } = response;

  return {
    data,
    status,
    statusText: 'OK',
  };
}

function responseBuilderError({ response }) {
  const { status, data } = response;

  return {
    data,
    status,
    statusText: 'ERR',
  };
}

export { responseBuilderSuccess, responseBuilderError };
