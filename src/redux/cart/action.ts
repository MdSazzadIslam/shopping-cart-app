import { CartActionTypes } from './types';
import { ProductProps } from '../../types/product';
import { ActionCreator, Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { ApplicationState } from '../createRootReducer';

export type AppThunk = ThunkAction<
  void,
  ApplicationState,
  null,
  Action<string>
>;

export const getCarts: AppThunk = () => {
  return (dispatch: Dispatch, state: ApplicationState): Action => {
    try {
      return dispatch({
        type: CartActionTypes.GET_CART_SUCCESS,
        payload: state.cart,
      });
    } catch (e) {
      return dispatch({
        type: CartActionTypes.GET_CART_ERROR,
      });
    }
  };
};

export const addToCart: ActionCreator<
  ThunkAction<void, ApplicationState, ProductProps, Action<string>>
> = (item) => {
  return (dispatch: Dispatch): Action => {
    try {
      return dispatch({
        type: CartActionTypes.ADD_TO_CART,
        payload: item,
      });
    } catch (e) {
      return dispatch({
        type: CartActionTypes.ADD_TO_CART_FAILURE,
        payload: null,
      });
    }
  };
};

export const removeFromCart: ActionCreator<
  ThunkAction<void, ApplicationState, ProductProps, Action<string>>
> = (id) => {
  return (dispatch: Dispatch): Action => {
    try {
      return dispatch({
        type: CartActionTypes.REMOVE_FROM_CART,
        payload: id,
      });
    } catch (e) {
      return dispatch({
        type: CartActionTypes.REMOVE_FROM_CART_FAILURE,
        payload: null,
      });
    }
  };
};
