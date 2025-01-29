import { combineReducers } from "redux";
import productCounter from "./slices/counterSlice"
import cartReducer from "./slices/cartSlice";


const rootReducer = combineReducers({
  productCounter,
  cart: cartReducer
});

export default rootReducer;