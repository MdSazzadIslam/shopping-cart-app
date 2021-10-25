import { Reducer } from 'redux';
import { CartActionTypes } from './types';
import { CartState } from '../../types/cart';

export const initialState: CartState = {
  data: {
    items: [],
  },
  errors: undefined,
  loading: false,
};

/** The redux reducer for cart. Handles cart actions. */

const reducer: Reducer<CartState> = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.GET_CART_REQUEST: {
      return { ...state, loading: true };
    }
    case CartActionTypes.GET_CART_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case CartActionTypes.GET_CART_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }

    case CartActionTypes.ADD_TO_CART: {
      const tempProduct = [...state.data.items];
      const product = action.payload;

      const productInCartIndex = tempProduct.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.coverage === action.payload.coverage
      );

      if (productInCartIndex >= 0) {
        state.data.items[productInCartIndex].qty++;
        state.data.items[productInCartIndex].price =
          state.data.items[productInCartIndex].unitPrice *
          state.data.items[productInCartIndex].qty;
      } else {
        state.data.items.push({
          ...product,
        });
      }
      return {
        errors: state.errors,
        loading: state.loading,
        data: {
          items: [...state.data.items],
        },
      };
    }

    case CartActionTypes.ADD_TO_CART_FAILURE: {
      return { ...state, loading: false, errors: action.payload };
    }

    case CartActionTypes.REMOVE_FROM_CART: {
      return {
        errors: state.errors,
        loading: state.loading,
        data: {
          ...state.data,

          items: state.data.items.filter(
            (item) =>
              item.id !== action.payload.id ||
              item.coverage !== action.payload.coverage
          ),
        },
      };
    }
    case CartActionTypes.REMOVE_FROM_CART_FAILURE: {
      return { ...state, loading: false, errors: action.payload };
    }

    default: {
      /**
       * If this reducer doesn't recognize the action type, or doesn't
       * care about this specific action, return the existing state unchanged
       */

      return state;
    }
  }
};

export { reducer as cartReducer };
