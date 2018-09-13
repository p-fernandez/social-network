import React from 'react';

const printPayload = payload => payload.map(el => <div key={el.param}>{el.param}: {el.message}</div>);

const ErrorBar = ({ error }) => (
  <div>
    <h4>{error.errorMessage}</h4>
    {error.payload && printPayload(error.payload)}
  </div>
);

export default ErrorBar;
