import { CartActionTypes } from './types';
import { initialState } from './reducer';
import { cartReducer } from './reducer';

describe('The cart reducer', () => {
  it('returns the input state for an unknown action', () => {
    const state = cartReducer(initialState, { type: undefined });
    expect(state).toEqual(initialState);
  });

  /*   it('should return the initial state', () => {
    expect(cartReducer(undefined, {})).toMatchSnapshot();
  }); */

  it('should handle CART_REQUEST', () => {
    expect(
      cartReducer(initialState, {
        type: CartActionTypes.GET_CART_SUCCESS,
      })
    ).toMatchSnapshot();
  });
});
