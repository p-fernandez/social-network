import { generateAndStoreTokenFlow } from '../auth';
import { ERROR } from '../../http/constants';
import { registerAction } from '../../models/register/actions';
import { errorFeedbackAction } from '../../models/error/actions';

const registerFlow = async(email, password) => {
  const user = await registerAction(email, password);
  const { data, status, statusText } = user;

  if (statusText === ERROR) {
    return errorFeedbackAction(data, status);
  }

  const { _id: id } = data;
  return generateAndStoreTokenFlow(id);
};

export {
  registerFlow,
};
