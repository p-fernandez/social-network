import {
  addConnectionAction,
  removeConnectionAction,
} from '../../models/user/actions';

const updateConnectionFlow = (form, viewerId, id) => {
  if (form === 'add') {
    return addConnectionAction(viewerId, id);
  } else if (form === 'remove') {
    return removeConnectionAction(viewerId, id);
  }
};

export {
  updateConnectionFlow,
};
