import {
  errorFeedbackAction,
} from './actions';

const cases = [
  [{}, 401, 'You are not authorized'],
  [{ errors: { email: { msg: 'A message' } } }, 403, 'You are not authorized to do this'],
  [{}, 409, 'This email is already in use'],
  [{}, 422, 'Check the data you input'],
  [{}, 500, 'You are not authorized to do this'],
];

describe('Error actions', () => {
  test.each(cases)('errorFeedbackAction', (data, status, expectedErrorMessage) => {
    const error = errorFeedbackAction(data, status);
    const { errorMessage } = error;
    expect(expectedErrorMessage).toBe(errorMessage);
  });
});
