import { 
  fetchGetPlayers, 
  GET_PLAYERS, 
  GET_PLAYERS_SUCCESS,
  GET_PLAYERS_FAILURE  
} from './playersAction';
import { getPlayers } from '../services/players';

jest.mock('../services/players', () => ({
  getPlayers: jest.fn()
}));

describe('players actions', () => {

  describe('fetchGetPlayers', () => {
    let innerFunction;

    beforeEach(() => {
      innerFunction = fetchGetPlayers();
    });

    it('should return a function', () => {
      expect(innerFunction).toBeInstanceOf(Function);
    });

    describe('innerFunction', () => {
      const dispatchMock = jest.fn();
      
      afterEach(() => {
        dispatchMock.mockClear();
        getPlayers.mockClear();
      });

      describe('initial path', () => {
        beforeEach(() => {
          getPlayers.mockReturnValue(Promise.resolve());
          innerFunction(dispatchMock);
        });

        it('should call dispatch with an action with type GET_PLAYERS', () => {
          expect(dispatchMock).toHaveBeenCalledWith({ type: GET_PLAYERS });
        });
  
        it('should call getPlayers service', () => {
          expect(getPlayers).toHaveBeenCalledTimes(1);
        });
      });

      describe('when getPlayers resolves correctly', () => {
        beforeEach(() => {
          getPlayers.mockReturnValue(Promise.resolve('success_response'));
          innerFunction(dispatchMock);
        });
  
        const expected = {
          type: GET_PLAYERS_SUCCESS,
          payload: 'success_response'
        };
        
        it('should call dispatch with an action with type GET_PLAYERS_SUCCESS and the service response as payload', () => {
          expect(dispatchMock).toHaveBeenCalledWith(expected);
        });
      });

      describe('when getPlayers fails', () => {
        beforeEach(() => {
          getPlayers.mockReturnValue(Promise.reject('error'));
          innerFunction(dispatchMock);
        });

        const expected = {
          type: GET_PLAYERS_FAILURE,
          payload: 'error'
        };

        it('should call dispatch with an action with type GET_PLAYERS_FAILURE and the server error as payload', () => {
          expect(dispatchMock).toHaveBeenCalledWith(expected);
        });
      });
    });
  });
});
