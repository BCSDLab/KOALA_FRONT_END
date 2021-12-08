import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import * as authAPI from 'api/auth';

const [LOGIN, LOGIN_SUCESS, LOGIN_FAILURE] = createRequestSagaActionTypes('auth/LOGIN');

export const login = createAction(LOGIN, ({ account, password }) => ({
  account,
  password,
}));

const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  login: {
    account: '',
    password: '',
  },
  token: {
    access_token: '',
    refresh_token: '',
  },
};

const auth = handleActions(
  {
    [LOGIN_SUCESS]: (state, { payload: token }) => ({
      ...state,
      authError: null,
      token,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState
);

export default auth;
