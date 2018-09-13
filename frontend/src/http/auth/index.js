import Api from '../Api';
import {
  GET_TOKEN_URL,
} from '../endpoints';

export async function getToken(digest) {
  const response = await Api.post(GET_TOKEN_URL, { digest });
  const {
    data: {
      authorization,
    },
  } = response;

  Api.setAuthorization(authorization);

  return response;
}
