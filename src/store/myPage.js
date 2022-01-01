import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import * as API from 'api';

const [CHANGENICKNAME, CHANGENICKNAME_SUCCESS, CHANGENICKNAME_FAILURE] = createRequestSagaActionTypes('myPage/CHANGENICKNAME');

export const changeNickName =createAction(CHANGENICKNAME, ({ nickName }) => ({
    nickName
})); 

const changeNickNameSaga = createRequestSaga(CHANGENICKNAME, API.changeNickName);
export function* changeNameSaga() {
  yield takeLatest(CHANGENICKNAME, changeNickNameSaga);
}

const initialState ={
    userImg : null,
    userNickName : 'uko05068',
    schoolAuth : false,
};


const myPage = handleActions(
    {
      [CHANGENICKNAME_SUCCESS]: (state) => ({
        ...state,
     
      }),
      [CHANGENICKNAME_FAILURE]: (state) => ({
        ...state,
      }),
    }, initialState
)

export default myPage;