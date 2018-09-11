import { playersReducer } from './playersReducer';
import { GET_PLAYERS_SUCCESS, GET_PLAYERS_FAILURE } from '../actions/playersAction'; 

describe('playersReducer', () => {
  
  describe('when an action with type GET_PLAYERS_SUCCESS is passed', () => {
    let result;
  
    const currentState = { list: [{ name: 'Messi' }], isLoading: false, err: 'Error'};
    const actionDispatched = { 
      type: GET_PLAYERS_SUCCESS, 
      payload: [{ name: 'Messi' }, { name: 'Kun' }] ,
    };
    const expected = { list: [{ name: 'Messi' }, { name: 'Kun' }], isLoading: false, err: null};
  
    beforeEach(() => {
      result = playersReducer(currentState, actionDispatched);
    });
  
    it('should update list and remove error', () => {
      expect(result).toEqual(expected);
    });
  }); 

  describe('when an action with type GET_PLAYERS_FAILURE is passed', () => {
    let result;
  
    const currentState = { list: [{ name: 'Messi' }], isLoading: true, err: null};
    const actionDispatched = { 
      type: GET_PLAYERS_FAILURE, 
      payload: 'Error',
    };
    const expected = { list: [{ name: 'Messi' }], isLoading: false, err: 'Error'};
  
    beforeEach(() => {
      result = playersReducer(currentState, actionDispatched);
    });
  
    it('should update error', () => {
      expect(result).toEqual(expected);
    });
  }); 

  describe('when an action with another type is passed', () => {
    let result;

    const state = { list: [], isLoading: false, err: null };
    const action = { type: 'ADD_POSITION', payload: [{ name: 'Messi' }, { name: 'Kun' }]  }
    const expected = { list: [], isLoading: false, err: null };

    beforeEach(() => {
      result = playersReducer(state, action);
    });

    it('should return current state', () => {
      expect(result).toEqual(expected);
    });

  });

});

