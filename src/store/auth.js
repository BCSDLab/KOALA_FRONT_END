import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import * as authAPI from 'api/auth';

const [LOGIN, LOGIN_SUCESS, LOGIN_FAILURE] = createRequestSagaActionTypes('auth/LOGIN');
const [REFRESH, REFRESH_SUCESS, REFRESH_FAILURE] = createRequestSagaActionTypes('auth/REFRESH');

export const login = createAction(LOGIN, ({ account, password }) => ({
  account,
  password,
}));

export const refresh = createAction(REFRESH, ({ refresh_token }) => ({
  refresh_token,
}));

const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
}
const refreshLoginSaga = createRequestSaga(REFRESH, authAPI.refresh);
export function* silentSaga() {
  yield takeLatest(REFRESH, refreshLoginSaga);
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
    [REFRESH_SUCESS]: (state, { payload: token }) => ({
      ...state,
      token,
    }),
    [REFRESH_FAILURE]: (state, { payload: error }) => ({
      ...state,
    }),
  },
  initialState
);

export default auth;
