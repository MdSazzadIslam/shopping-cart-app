import { productReducer } from '../product/reducer';
import { initialState } from '../product/reducer';
import { ProductActionTypes } from '../product/types';
describe('The product reducer', () => {
  it('returns the input state for an unknown action', () => {
    const state = productReducer(initialState, { type: undefined });
    expect(state).toEqual(initialState);
  });
});
