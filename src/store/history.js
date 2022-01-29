import { historyAPI } from "api";
import { createAction, handleActions } from "redux-actions";
import createRequestSaga,{createRequestSagaActionTypes} from "./createRequestSaga";
import { takeLatest } from "redux-saga/effects";

const [GETHISTORYLIST, GETHISTORYLIST_SUCCESS, GETHISTORYLIST_FAILURE] = createRequestSagaActionTypes("history/GETHISTORYLIST");
const [DELETEHISTORYLIST, DELETEHISTORYLIST_SUCCESS, DELETEHISTORYLIST_FAILURE] = createRequestSagaActionTypes("history/DELETEHISTORYLIST");
const [READHISTRORYITEM, READHISTRORYITEM_SUCCESS, READHISTRORYITEM_FAILURE] = createRequestSagaActionTypes("history/READHISTORYITEM");
const [MOVETOSCRAP, MOVETOSCRAP_SUCCESS, MOVETOSCRAP_FAILURE] = createRequestSagaActionTypes("history/MOVETOSCRAP");

export const getHistoryList = createAction(GETHISTORYLIST, (pageNum) => (pageNum));
export const deleteHistoryList = createAction(DELETEHISTORYLIST, (historyList) => (historyList));
export const readHistoryItem = createAction(READHISTRORYITEM, (noticeId) => (noticeId));
export const moveToScrap = createAction(MOVETOSCRAP, (idList) => (idList));

const getHistorySaga = createRequestSaga(GETHISTORYLIST, historyAPI.getHistoryList);
export function* getHistoryListSaga(){
    yield takeLatest(GETHISTORYLIST, getHistorySaga);
}

const deleteHistorySaga = createRequestSaga(DELETEHISTORYLIST, historyAPI.deleteHistoryList);
export function* deleteHistoryListSaga(){
    yield takeLatest(DELETEHISTORYLIST, deleteHistorySaga);
}

const readHistorySaga = createRequestSaga(READHISTRORYITEM, historyAPI.readHistoryItem);
export function* readHistoryItemSaga(){
    yield takeLatest(READHISTRORYITEM, readHistorySaga);
}

const moveToScrapSaga = createRequestSaga(MOVETOSCRAP, historyAPI.moveToScrap);
export function* moveToScrapItemSaga(){
    yield takeLatest(MOVETOSCRAP, moveToScrapSaga);
}

const initialState = {
    historyList: [],
    getHistoryListResponse: false,
    deleteHistoryResponse: false,
    readHistoryItemResponse: false,
    moveToScrapResponse: false
};

const history = handleActions(
    {
        [GETHISTORYLIST_SUCCESS]: (state, {payload:history}) => ({
            ...state,
            historyList: history.body,
            getHistoryListResponse: true,
            deleteHistoryResponse: false,
            readHistoryItemResponse: false,
            moveToScrapResponse: false
        }),
        [GETHISTORYLIST_FAILURE]: (state) => ({
            ...state,
            historyList: [],
            getHistoryListResponse: false,
            deleteHistoryResponse: false,
            readHistoryItemResponse: false
        }),

        [DELETEHISTORYLIST_SUCCESS]: () => ({
            deleteHistoryResponse: true
        }),
        [DELETEHISTORYLIST_FAILURE]: () => ({
            deleteHistoryResponse: false
        }),

        [READHISTRORYITEM_SUCCESS]: () => ({
            readHistoryItemResponse: true
        }),
        [READHISTRORYITEM_FAILURE]: () => ({
            readHistoryItemResponse: false
        }),

        [MOVETOSCRAP_SUCCESS]: () => ({
            moveToScrapResponse: true
        }),
        [MOVETOSCRAP_FAILURE]: () => ({
            moveToScrapResponse: false
        })
    },
    initialState
)

export default history;


