import { call, put, takeEvery } from "redux-saga/effects";

// Worker saga to handle adding items to the cart
export function* AddToCardFunc(action: any) {
  yield put({
    type: "ADD_TO_CARD_REDUCER",
    payload: action.payload,
  });
}

// Watcher saga to watch for ADD_TO_CARD_ACTION
export function* addToCardSaga() {
  yield takeEvery("ADD_TO_CARD_ACTION", AddToCardFunc);
}
