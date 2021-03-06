const errorFeedbackAction = (data, status) => {
  let error = {};
  switch(status) {
    case 401:
      error = {
        errorMessage: 'You are not authorized',
        payload: [{
          message: 'Check your credentials',
          param: 'User',
        }],
      };
      break;
    case 403:
      error = {
        errorMessage: 'You are not authorized to do this',
        payload: [{
          message: 'Ask an admin for your permissions',
          param: 'User',
        }],
      };
      break;
    case 409:
      error = {
        errorMessage: 'This email is already in use.',
        payload: [{
          message: 'Please login with your credentials',
          param: 'User',
        }],
      };
      break;
    case 422:
      const { errors } = data;
      const errorData = Object.keys(errors).map((key) => ({
        message: errors[key].msg,
        param: key,
      }));

      error = {
        errorMessage: 'Check the data you input',
        payload: errorData,
      };
      break;
    default:
      error = {
        errorMessage: 'You are not authorized to do this',
        payload: [{
          message: 'Ask an admin for your permissions',
          param: 'User',
        }],
      };
      break;
  }

  return error;
};

export {
  errorFeedbackAction,
};
