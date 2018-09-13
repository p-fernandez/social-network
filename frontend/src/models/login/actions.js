import { login } from '../../http/account';

const loginAction = async(email, password) => {
  const user = await login(email, password);
  return user;
};

export {
  loginAction,
};
