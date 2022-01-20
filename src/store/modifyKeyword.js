import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import { keywordAPI } from 'api';

const [GET_RECOMMENDATION,GET_RECOMMENDATION_SUCCESS,GET_RECOMMENDATION_FAILURE] = createRequestSagaActionTypes('modifyKeyword/GET_RECOMMENDATION');
const [MODIFY_KEYWORD,MODIFY_KEYWORD_SUCCESS,MODIFY_KEYWORD_FAILURE]= createRequestSagaActionTypes('modifyKeyword/MODIFY_KEYWORD');

export const getRecommendation = createAction(GET_RECOMMENDATION,(keyword)=>(keyword));
export const patchModifyKeyword = createAction(MODIFY_KEYWORD,(keywordName,object)=>({
    keywordName,
    object
}));

const getRecommendationSaga = createRequestSaga(GET_RECOMMENDATION,keywordAPI.getRecommendation);
export function* getKeywordRecommendationSaga(){
    yield takeLatest(GET_RECOMMENDATION,getRecommendationSaga);
}

const patchModifySaga = createRequestSaga(MODIFY_KEYWORD,keywordAPI.modifyKeyword);
export function* patchModifyKeywordSaga(){
    yield takeLatest(MODIFY_KEYWORD,patchModifySaga);
}

const initialState = {
    recommendationList:[],
    getRecommendationResponse:false,
    patchRecommendationResponse:false,
};

const modifyKeyword = handleActions(
    {
        [GET_RECOMMENDATION_SUCCESS]: (state,{payload:keyword}) => ({
           ...state,
           recommendationList:keyword.body,
           getRecommendationResponse:true
        }),

        [GET_RECOMMENDATION_FAILURE]: (state) => ({
            ...state,
            getRecommendationResponse:false
        }),

        [MODIFY_KEYWORD_SUCCESS] : (state) => ({
            ...state,
            patchRecommendationResponse:true
        }),
        [MODIFY_KEYWORD_FAILURE] : (state) => ({
            ...state,
            patchRecommendationResponse:false
        }),
    },
    initialState
);

export default modifyKeyword;