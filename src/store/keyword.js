import { keywordAPI } from "api";
import { createAction,handleActions } from "redux-actions";
import createRequestSaga,{createRequestSagaActionTypes} from "./createRequestSaga";
import { takeLatest } from "redux-saga/effects";

const [INQUIRY,INQUIRY_SUCCESS,INQUIRY_FAILURE] = createRequestSagaActionTypes("keyword/INQUIRY");
const [GETKEYWORDLIST,GETKEYWORDLIST_SUCCESS,GETKEYWORDLIST_FAILURE] = createRequestSagaActionTypes("keyword/GETKEYWORDLIST");
const [DELETEKEYWORDLIST,DELETEKEYWORDLIST_SUCCESS,DELETEKEYWORDLIST_FAILURE] = createRequestSagaActionTypes("keyword/DELETEKEYWORDLIST");
const [DELETEKEYWORDITEM,DELETEKEYWORDITEM_SUCCESS,DELETEKEYWORDITEM_FAILURE] = createRequestSagaActionTypes("keyword/DELETEKEYWORDITEM");
const [MOVEKEYWORDITEM,MOVEKEYWORDITEM_SUCCESS,MOVEKEYWORDITEM_FAILURE] = createRequestSagaActionTypes("keyword/MOVEKEYWORDITEM");
const [READKEYWORDITEM,READKEYWORDITEM_SUCCESS,READKEYWORDITEM_FAILURE] = createRequestSagaActionTypes("keyword/READKEYWORDITEM");

export const inquiry = createAction(INQUIRY);
export const getKeywordList = createAction(GETKEYWORDLIST);
export const deleteKeywordList = createAction(DELETEKEYWORDLIST,({startId,endId})=>({
    startId,
    endId,
}));
export const deleteKeywordItem = createAction(DELETEKEYWORDITEM,(id)=>(id));
export const moveKeywordItem = createAction(MOVEKEYWORDITEM);
export const readKeywordItem = createAction(READKEYWORDITEM,(id)=>(id));

const inquirySaga = createRequestSaga(INQUIRY,keywordAPI.InquiryKeyword);
export function* inquiryKeywordSaga(){
    yield takeLatest(INQUIRY,inquirySaga);
}

const getListSaga = createRequestSaga(GETKEYWORDLIST,keywordAPI.getKeywordList);
export function* getKeywordListSaga(){
    yield takeLatest(GETKEYWORDLIST,getListSaga);
}

const deleteListSaga = createRequestSaga(DELETEKEYWORDLIST,keywordAPI.deleteKeywordList);
export function* deleteKeywordListSaga(){
    yield takeLatest(DELETEKEYWORDLIST,deleteListSaga);
}

const deleteItemSaga = createRequestSaga(DELETEKEYWORDITEM,keywordAPI.deleteKeywordItem);
export function* deleteKeywordItemSaga(){
    yield takeLatest(DELETEKEYWORDITEM,deleteItemSaga);
}

const moveItemSaga = createRequestSaga(MOVEKEYWORDITEM,keywordAPI.movekeywordList);
export function* moveKeywordItemSaga(){
    yield takeLatest(MOVEKEYWORDITEM,moveItemSaga);
}

const readItemSaga = createRequestSaga(READKEYWORDITEM,keywordAPI.readKeywordItem);
export function* readKeywordItemSaga(){
    yield takeLatest(READKEYWORDITEM,readItemSaga);
}

const initialState = {
    keywords:[],
    keywordList:[],
    inquiryResponse:false,
    getKeywordListResponse:false,
    deleteKeywordListResponse:false,
    deleteKeywordItemResponse:false,
    moveKeywordItemResponse:false,
    readKeywordItemResponse:false
};


const keyword = handleActions(
    {
        [INQUIRY_SUCCESS] : (state, {payload:keyword}) => ({
            ...state,
            keywords : keyword.body,
            inquiryResponse : true
        }),
        [INQUIRY_FAILURE] : (state) => ({
            ...state,
            keywords : [],
            inquiryResponse:false
        }),

        [GETKEYWORDLIST_SUCCESS] : (state, {payload:keyword}) => ({
            ...state,
            keywordList:keyword.body,
            getKeywordListResponse:true
        }),

        [GETKEYWORDLIST_FAILURE] : (state) => ({
            ...state,
            keywordList:[],
            getKeywordListResponse:false
        }),

        [DELETEKEYWORDLIST_SUCCESS] : () => ({
            deleteKeywordList : true
        }),

        [DELETEKEYWORDLIST_FAILURE] : () => ({
            deleteKeywordList : false
        }),

        [DELETEKEYWORDITEM_SUCCESS] : () => ({
            deleteKeywordItem : true
        }),

        [DELETEKEYWORDITEM_FAILURE] : () => ({
            deleteKeywordItem : false
        }),

        [MOVEKEYWORDITEM_SUCCESS] : () => ({
            moveKeywordItemResponse : true
        }),

        [MOVEKEYWORDITEM_FAILURE] : () => ({
            moveKeywordItemResponse : false
        }),
        [READKEYWORDITEM_SUCCESS] : () => ({
            readKeywordItemResponse : true
        }),

        [READKEYWORDITEM_FAILURE] : () => ({
            readKeywordItemResponse : false
        }),

        

    },
    initialState
)

export default keyword;