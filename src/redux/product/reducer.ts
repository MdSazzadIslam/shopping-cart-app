import { Reducer } from "redux";
import { ProductActionTypes } from "./types";
import { ProductState } from "../../types/product";

export const initialState: ProductState = {
  data: [],
  errors: undefined,
  loading: false,
};

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
      return state;
    }
  }
};

export { reducer as productReducer };
