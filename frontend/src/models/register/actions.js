import { register } from '../../http/account';

const registerAction = async(email, password) => {
  const user = await register(email, password);
  return user;
};

export {
  registerAction,
};
