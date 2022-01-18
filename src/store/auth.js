import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import { setCookie } from 'components/Shared/Cookies';
import { setTokenOnHeader } from 'api/logined';
import * as authAPI from 'api';

const [LOGIN, LOGIN_SUCESS, LOGIN_FAILURE] = createRequestSagaActionTypes('auth/LOGIN');
const [REFRESH, REFRESH_SUCESS, REFRESH_FAILURE] = createRequestSagaActionTypes('auth/REFRESH');
const [SIGNUP, SIGNUP_SUCESS, SIGNUP_FALIURE] = createRequestSagaActionTypes('auth/SIGNUP');
const [SEND_FIND_PASSWORD, SEND_FIND_PASSWORD_SUCCESS, SEND_FIND_PASSWORD_FAILURE] =
  createRequestSagaActionTypes('auth/FIND_PASSWORD');
const [AUTH_FIND_PASSWORD, AUTH_FIND_PASSWORD_SUCCESS, AUTH_FIND_PASSWORD_FAILURE] =
  createRequestSagaActionTypes('auth/AUTH_FIND_PASSWORD');
export const login = createAction(LOGIN, ({ account, password }) => ({
  account,
  password,
}));
export const refresh = createAction(REFRESH);
export const signUp = createAction(SIGNUP, ({ account, password, find_email, nickName }) => ({
  account,
  password,
  find_email,
  nickName,
}));
export const sendFindPassword = createAction(SEND_FIND_PASSWORD, (account, email) => ({
  account,
  email,
}));
export const authFindPassword = createAction(AUTH_FIND_PASSWORD, (account, email, secret) => ({
  account,
  email,
  secret,
}));

const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
}
const refreshSaga = createRequestSaga(REFRESH, authAPI.refresh);
export function* refreshLoginSaga() {
  yield takeLatest(REFRESH, refreshSaga);
}
const signUpSaga = createRequestSaga(SIGNUP, authAPI.signUp);
export function* signUpRegisterSaga() {
  yield takeLatest(SIGNUP, signUpSaga);
}
const sendFindPWSaga = createRequestSaga(SEND_FIND_PASSWORD, authAPI.sendFindPassword);
export function* sendPasswordSaga() {
  yield takeLatest(SEND_FIND_PASSWORD, sendFindPWSaga);
}
const authFindPWSaga = createRequestSaga(AUTH_FIND_PASSWORD, authAPI.authFindPassword);
export function* authPasswordSaga() {
  yield takeLatest(AUTH_FIND_PASSWORD, authFindPWSaga);
}

const initialState = {
  isOpen: false,
  isLoggedIn: false,
  authError: null,
  authSuccess: false,
  sendSuccess: false,
  errorCode: '',
};

const auth = handleActions(
  {
    [LOGIN_SUCESS]: (state, { payload: token }) => ({
      ...state,
      authError: null,
      setRefreshToken: setCookie('refresh_token', `${token.body.refresh_token}`, {
        path: '/',
      }),
      setAccessToken: setTokenOnHeader(token.body.access_token),
      isLoggedIn: true,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [REFRESH_SUCESS]: (state, { payload: token }) => ({
      ...state,
      authError: null,
      setRefreshToken: setCookie('refresh_token', `${token.body.refresh_token}`, {
        path: '/',
      }),
      setAccessToken: setTokenOnHeader(token.body.access_token),
      isLoggedIn: true,
    }),
    [REFRESH_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [SIGNUP_SUCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
      errorCode: '',
    }),
    [SIGNUP_FALIURE]: (state, { payload: error }) => ({
      ...state,
      errorCode: error.code,
    }),
    [SEND_FIND_PASSWORD_SUCCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
      errorCode: payload.code,
      sendSuccess: true,
    }),
    [SEND_FIND_PASSWORD_FAILURE]: (state, { payload: error }) => ({
      ...state,
      errorCode: error.code,
      sendSuccess: false,
    }),
    [AUTH_FIND_PASSWORD_SUCCESS]: (state, { payload }) => ({
      ...state,
      errorCode: payload.code,
      authSuccess: true,
    }),
    [AUTH_FIND_PASSWORD_FAILURE]: (state, { payload: error }) => ({
      ...state,
      errorCode: error.code,
      authSuccess: false,
    }),
  },
  initialState
);

export default auth;
