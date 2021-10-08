import { ProductActionTypes } from "./types";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import { ApplicationState } from "../createRootReducer";
import product from "../../mockdata";

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const getProductRequest: AppThunk = () => {
  return (dispatch: Dispatch): Action => {
    try {
      return dispatch({
        type: ProductActionTypes.GET_PRODUCT_SUCCESS,
        payload: product,
      });
    } catch (e) {
      return dispatch({
        type: ProductActionTypes.GET_PRODUCT_ERROR,
      });
    }
  };
};
