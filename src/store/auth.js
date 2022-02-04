import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import { setCookie } from 'components/Shared/Cookies';
import { setTokenOnHeader } from 'api/logined';
import * as authAPI from 'api';

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestSagaActionTypes('auth/LOGIN');
const [REFRESH, REFRESH_SUCCESS, REFRESH_FAILURE] = createRequestSagaActionTypes('auth/REFRESH');
const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FALIURE] = createRequestSagaActionTypes('auth/SIGNUP');
const [GUEST, GUEST_SUCCESS, GUEST_FALIURE] = createRequestSagaActionTypes('auth/GUEST');
const [SEND_FIND_PASSWORD, SEND_FIND_PASSWORD_SUCCESS, SEND_FIND_PASSWORD_FAILURE] =
  createRequestSagaActionTypes('auth/FIND_PASSWORD');
const [AUTH_FIND_PASSWORD, AUTH_FIND_PASSWORD_SUCCESS, AUTH_FIND_PASSWORD_FAILURE] =
  createRequestSagaActionTypes('auth/AUTH_FIND_PASSWORD');
const [SEND_FIND_ACCOUNT, SEND_FIND_ACCOUNT_SUCCESS, SEND_FIND_ACCOUNT_FAILURE] =
  createRequestSagaActionTypes('auth/SEND_FIND_ACCOUNT');
const [AUTH_FIND_ACCOUNT, AUTH_FIND_ACCOUNT_SUCCESS, AUTH_FIND_ACCOUNT_FAILURE] =
  createRequestSagaActionTypes('auth/AUTH_FIND_ACCOUNT');
const [FIND_ACCOUNT, FIND_ACCOUNT_SUCCESS, FIND_ACCOUNT_FAILURE] = createRequestSagaActionTypes('auth/FIND_ACCOUNT');
const [CHANGE_PASSWORD, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE] =
  createRequestSagaActionTypes('auth/CHANGE_PASSWORD');
const RESET_AUTH_STATE = {
  type: 'RESET_STATE',
};

function* setToken(action) {
  setCookie('refresh_token', action.payload.body.refresh_token, {
    path: '/',
  });
  setTokenOnHeader(action.payload.body.access_token);
}

export const login = createAction(LOGIN, ({ deviceToken, account, password }) => ({
  deviceToken,
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
export const changingPassword = createAction(CHANGE_PASSWORD, (account, password) => ({
  account,
  password,
}));
export const sendFindId = createAction(SEND_FIND_ACCOUNT, (email) => ({
  email,
}));
export const authFindId = createAction(AUTH_FIND_ACCOUNT, (email, secret) => ({
  email,
  secret,
}));
export const setFindAccount = createAction(FIND_ACCOUNT, (email) => ({
  email,
}));
export const nonMemberLogin = createAction(GUEST, ({ deviceToken }) => ({
  deviceToken,
}));
export const resetAuthState = createAction(RESET_AUTH_STATE);

const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(LOGIN_SUCCESS, setToken);
}
const refreshSaga = createRequestSaga(REFRESH, authAPI.refresh);
export function* refreshLoginSaga() {
  yield takeLatest(REFRESH, refreshSaga);
  yield takeLatest(REFRESH_SUCCESS, setToken);
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
const sendFindIdSaga = createRequestSaga(SEND_FIND_ACCOUNT, authAPI.sendFindAccount);
export function* sendAccountSaga() {
  yield takeLatest(SEND_FIND_ACCOUNT, sendFindIdSaga);
}
const changePasswordSaga = createRequestSaga(CHANGE_PASSWORD, authAPI.changePassword);
export function* changeingPasswordSaga() {
  yield takeLatest(CHANGE_PASSWORD, changePasswordSaga);
}
const authFindIdSaga = createRequestSaga(AUTH_FIND_ACCOUNT, authAPI.authFindAccount);
export function* authAccountSaga() {
  yield takeLatest(AUTH_FIND_ACCOUNT, authFindIdSaga);
}
const findAccountSaga = createRequestSaga(FIND_ACCOUNT, authAPI.findAccount);
export function* setAccountSaga() {
  yield takeLatest(FIND_ACCOUNT, findAccountSaga);
}
const nonMemberSaga = createRequestSaga(GUEST, authAPI.nonMember);
export function* nonLoginSaga() {
  yield takeLatest(GUEST, nonMemberSaga);
  yield takeLatest(GUEST_SUCCESS, setToken);
}

const initialState = {
  isOpen: false,
  isLoggedIn: null,
  authError: null,
  authSuccess: false,
  sendSuccess: false,
  changeComplete: false,
  errorCode: '',
  blindAccount: '',
};

const auth = handleActions(
  {
    [RESET_AUTH_STATE]: (state) => ({
      ...(state = initialState),
    }),
    [LOGIN]: (state) => ({
      ...state,
      isLoggedIn: null,
      authError: null,
    }),
    [LOGIN_SUCCESS]: (state) => ({
      ...state,
      authError: null,
      isLoggedIn: true,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
      isLoggedIn: false,
    }),
    [REFRESH_SUCCESS]: (state) => ({
      ...state,
      authError: null,
      isLoggedIn: true,
    }),
    [REFRESH_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
      isLoggedIn: false,
    }),
    [SIGNUP_SUCCESS]: (state, { payload }) => ({
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
    [CHANGE_PASSWORD_SUCCESS]: (state, { payload }) => ({
      ...state,
      errorCode: payload.code,
      changeComplete: true,
    }),
    [CHANGE_PASSWORD_FAILURE]: (state, { payload: error }) => ({
      ...state,
      errorCode: error.code,
      changeComplete: false,
    }),
    [SEND_FIND_ACCOUNT_SUCCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
      errorCode: payload.code,
      sendSuccess: true,
    }),
    [SEND_FIND_ACCOUNT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      errorCode: error.code,
      sendSuccess: false,
    }),
    [AUTH_FIND_ACCOUNT_SUCCESS]: (state, { payload }) => ({
      ...state,
      errorCode: payload.code,
      authSuccess: true,
    }),
    [AUTH_FIND_ACCOUNT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      errorCode: error.code,
      authSuccess: false,
    }),
    [FIND_ACCOUNT_SUCCESS]: (state, { payload }) => ({
      ...state,
      blindAccount: payload.body.email,
    }),
    [FIND_ACCOUNT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      errorCode: error.code,
    }),
    [GUEST]: (state) => ({
      ...state,
      isLoggedIn: null,
      authError: null,
    }),
    [GUEST_SUCCESS]: (state) => ({
      ...state,
      isLoggedIn: true,
    }),
    [GUEST_FALIURE]: (state, { payload: error }) => ({
      ...state,
      authError: error.code,
      isLoggedIn: false,
    }),
  },
  initialState
);

export default auth;
