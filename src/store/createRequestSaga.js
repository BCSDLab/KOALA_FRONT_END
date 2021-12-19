import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from './loading';
import { takeLatest } from 'redux-saga/effects';

export const createRequestSagaActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
}
export function* refreshLoginSaga() {
  yield takeLatest(REFRESH, refreshSaga);
}
export function* signUpRegisterSaga() {
  yield takeLatest(SIGNUP, signUpSaga);
}

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return function* (action) {
    yield put(startLoading(type));
    try {
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch {
      yield put({
        type: FAILURE,
        error: true,
      });
    }
    yield put(finishLoading(type));
  };
}
