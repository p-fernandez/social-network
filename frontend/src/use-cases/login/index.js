import { generateAndStoreTokenFlow } from '../auth';
import { ERROR } from '../../http/constants';
import { loginAction } from '../../models/login/actions';
import { errorFeedbackAction } from '../../models/error/actions';

const loginFlow = async(email, password) => {
  const user = await loginAction(email, password);
  const { data, status, statusText } = user;

  if (statusText === ERROR) {
    return errorFeedbackAction(data, status);
  }

  const { _id: id, role } = data;
  return generateAndStoreTokenFlow(id, role);
};

export {
  loginFlow,
};
