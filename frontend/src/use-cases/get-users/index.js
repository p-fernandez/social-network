import { ERROR } from '../../http/constants';
import { getUsersAction } from '../../models/user/actions';
import { errorFeedbackAction } from '../../models/error/actions';

const getUsersFlow = async() => {
  const users = await getUsersAction();
  const { data, status, statusText } = users;

  if (statusText === ERROR) {
    return errorFeedbackAction(data, status);
  }

  const { users: list } = data;
  return list;
};

const getUsersDataFlow = (connection, users) => {
  const [user] = users.filter(user => user._id === connection);
  return user.email;
};

export {
  getUsersFlow,
  getUsersDataFlow,
};
