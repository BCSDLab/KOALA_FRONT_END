import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import { setCookie } from 'components/Shared/Cookies';
import { setTokenOnHeader } from 'api/logined';
import * as authAPI from 'api';

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestSagaActionTypes('auth/LOGIN');
const [REFRESH, REFRESH_SUCCESS, REFRESH_FAILURE] = createRequestSagaActionTypes('auth/REFRESH');
const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FALIURE] = createRequestSagaActionTypes('auth/SIGNUP');
const [GUEST, GUEST_SUCCESS, GUEST_FALIURE] = createRequestSagaActionTypes('auth/NON_MEMBER');

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
export const nonMemberLogin = createAction(GUEST, ({ deviceToken }) => ({
  deviceToken,
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
const nonMemberSaga = createRequestSaga(GUEST, authAPI.nonMember);
export function* nonLoginSaga() {
  yield takeLatest(GUEST, nonMemberSaga);
}

const initialState = {
  isOpen: false,
  isLoggedIn: null,
  authError: null,
  errorCode: '',
  isGuest: false,
};

const auth = handleActions(
  {
    [LOGIN]: (state) => ({
      ...state,
      isLoggedIn: null,
      authError: null,
    }),
    [LOGIN_SUCCESS]: (state, { payload: token }) => ({
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
      isLoggedIn: false,
    }),
    [REFRESH_SUCCESS]: (state, { payload: token }) => ({
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
    [GUEST]: (state) => ({
      ...state,
      isLoggedIn: null,
      authError: null,
    }),
    [GUEST_SUCCESS]: (state, { payload: token }) => ({
      ...state,
      setRefreshToken: setCookie('refresh_token', `${token.body.refresh_token}`, {
        path: '/',
      }),
      setAccessToken: setTokenOnHeader(token.body.access_token),
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
