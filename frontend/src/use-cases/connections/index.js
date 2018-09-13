import {
  addConnectionAction,
  removeConnectionAction,
} from '../../models/user/actions';
import { ERROR } from '../../http/constants';
import { errorFeedbackAction } from '../../models/error/actions';

const updateConnectionFlow = async(form, viewerId, id) => {
  let result = null;
  if (form === 'add') {
    result = await addConnectionAction(viewerId, id);
  } else if (form === 'remove') {
    result = await removeConnectionAction(viewerId, id);
  }

  const { data, status, statusText } = result;

  if (statusText === ERROR) {
    return errorFeedbackAction(data, status);
  }

  return result;
};

export {
  updateConnectionFlow,
};
