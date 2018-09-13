import {
  checkStorageHasToken,
  deleteTokenInStorage,
  generateDigest,
  getId,
  getTokenAction,
  isAdmin,
  saveTokenInStorage,
} from '../../models/auth/actions';

const checkAuthenticationFlow = () => checkStorageHasToken();

const generateAndStoreTokenFlow = async(id, role) => {
  try {
    const digest = generateDigest(id, role);
    const token = await getTokenAction(digest);
    saveTokenInStorage(token);
    return true;
  } catch (error) {
    return false;
  }
};

const getIdFlow = () => getId();

const isAdminFlow = () => isAdmin();

const logoutFlow = () => deleteTokenInStorage();

export {
  checkAuthenticationFlow,
  generateAndStoreTokenFlow,
  getIdFlow,
  isAdminFlow,
  logoutFlow,
};
