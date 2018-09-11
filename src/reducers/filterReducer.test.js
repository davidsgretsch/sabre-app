import { filterReducer } from './filterReducer';
import { APPLY_FILTER } from '../actions/filterAction';

describe('filterReducer', () => {
  describe('when an action with type APPLY_FILTER is passed', () => {
    let result;
    
    const state = { c: 2 };
    const inputAction = { type: APPLY_FILTER, payload: { a: 1, b: 2 } };
    const expected = { a: 1, b: 2 };

    beforeEach(() => {
      result = filterReducer(state, inputAction);
    });

    it('should return action payload', () => {
      expect(result).toEqual(expected);
    });
  });

  describe('when an action with another type is passed', () => {
    let result;

    const state = { c: 2 };
    const inputAction = { type: 'ANOTHER_ACTION', payload: { a: 1, b: 2 } };
    const expected = { c: 2 };

    beforeEach(() => {
      result = filterReducer(state, inputAction);
    });

    it('should return current state', () => {
      expect(result).toEqual(expected);
    });
  });
});
