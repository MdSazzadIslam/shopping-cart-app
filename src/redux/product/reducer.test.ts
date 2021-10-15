import { productReducer } from '../product/reducer';
import { initialState } from '../product/reducer';
import { ProductActionTypes } from './types';
describe('The product reducer', () => {
  it('returns the input state for an unknown action', () => {
    const state = productReducer(initialState, { type: undefined });
    expect(state).toEqual(initialState);
  });

  it('should handle CART_REQUEST', () => {
    expect(
      productReducer(initialState, {
        type: ProductActionTypes.GET_PRODUCT_SUCCESS,
      })
    ).toMatchSnapshot();
  });
});
