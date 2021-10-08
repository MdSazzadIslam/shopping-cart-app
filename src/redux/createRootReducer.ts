import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { History } from "history";

import { productReducer } from "./product/reducer";
import { cartReducer } from "./cart/reducer";
import { ProductState } from "../types/product";
import { CartState } from "../types/cart";
import { RouterState } from "connected-react-router";

export interface ApplicationState {
  product: ProductState;
  cart: CartState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    product: productReducer,
    cart: cartReducer,
    router: connectRouter(history),
  });
