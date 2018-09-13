import {
  addConnection,
  getUsers,
  removeConnection,
} from '../../http/user';

const addConnectionAction = async(viewerId, id) => {
  const connection = await addConnection(viewerId, id);
  return connection;
};

const getUsersAction = async() => {
  const users = await getUsers();
  return users;
};

const removeConnectionAction = async(viewerId, id) => {
  const connection = await removeConnection(viewerId, id);
  return connection;
};

export {
  addConnectionAction,
  getUsersAction,
  removeConnectionAction,
};
