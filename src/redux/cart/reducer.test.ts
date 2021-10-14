import { cartReducer } from './reducer';
import { initialState } from './reducer';
describe('The cart reducer', () => {
  it('returns the input state for an unknown action', () => {
    const state = cartReducer(initialState, { type: undefined });
    expect(state).toEqual(initialState);
  });
});
