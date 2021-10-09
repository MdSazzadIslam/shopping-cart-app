import { Reducer } from "redux";
import { ProductActionTypes } from "./types";
import { ProductState } from "../../types/product";

/**
 * Reducer, a part of the redux flow.
 *
 * Reducers decide how the state changes in response to an action. Reducers handle the
 * entire state of the application as a single object. The reducer takes the previous state
 * and an action to produce new state.
 *
 * Important! Reducer must never mutate state. No side effects or API calls.
 *
 *   .....................                                   ---------------
 *   .   action creator  . -->     dispatch(action)    -->   |   reducer   |
 *   .....................                                   ---------------
 *            /\                                                    |
 *            |                                                     \/
 *       ............                                         .............
 *       .   view   .     <--  state passed as props  <--     .   store   .
 *       ............                                         .............
 *
 */

/** The complete structure of the application state
 *
 * In redux, the state is never mutated directly.
 * For this reason, the ProductState state interface declares all
 * members as readonly to gain compile-time checks
 * against mutation.
 */

export const initialState: ProductState = {
  data: [],
  errors: undefined,
  loading: false,
};

/** The redux reducer for product. Handles product actions. */

const reducer: Reducer<ProductState> = (state = initialState, action) => {
  switch (action.type) {
    case ProductActionTypes.GET_PRODUCT_REQUEST: {
      return { ...state, loading: true };
    }
    case ProductActionTypes.GET_PRODUCT_SUCCESS: {
      console.log("action payload", action.payload);
      return { ...state, loading: false, data: action.payload };
    }
    case ProductActionTypes.GET_PRODUCT_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      // return the previous state on any unknown action
      return state;
    }
  }
};

export { reducer as productReducer };
