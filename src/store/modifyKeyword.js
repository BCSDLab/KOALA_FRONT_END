import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import { addKeyword } from 'api';

const [GETRECOMMENDATION,GETRECOMMENDATION_SUCCESS,GETRECOMMENDATION_FAILURE] = createRequestSagaActionTypes('modifyKeyword/GET');

export const getRecommendation = createAction(GETRECOMMENDATION,(keyword)=>(keyword));

const getRecommendationSaga = createRequestSaga(GETRECOMMENDATION,addKeyword.getRecommendation);
export function* getKeywordRecommendationSaga(){
    yield takeLatest(GETRECOMMENDATION,getRecommendationSaga);
}

const initialState = {
    recommendationList:[],
    getRecommendationResponse:false
};

const modifyKeyword = handleActions(
    {
        [GETRECOMMENDATION_SUCCESS]: (state,{payload:keyword}) => ({
           ...state,
           recommendationList:keyword.body,
           getRecommendationResponse:true
        }),

        [GETRECOMMENDATION_FAILURE]: (state) => ({
            ...state,
            getRecommendationResponse:false
        })
    },
    initialState
);

export default modifyKeyword;