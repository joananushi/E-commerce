import { all } from "redux-saga/effects";
import { addToCardSaga } from "./cartSaga";

export default function* rootSaga() {
  yield all([
    addToCardSaga(), // Include your cart saga here
    // Add other sagas here
  ]);
}
