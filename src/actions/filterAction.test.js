import { applyFilterAction } from './filterAction';
import { APPLY_FILTER } from './filterAction';

describe('applyFilterAction', () => {
  let result;

  const filter = { name: 'Sergio Romero' };
  const expectedAction = {
    type: APPLY_FILTER,
    payload: filter
  }

  beforeEach(() => {
    result = applyFilterAction(filter);
  });

  it('should return an action with type APPLY_FILTER and filters as payload', () => {
    expect(result).toEqual(expectedAction);
  });
  
});
