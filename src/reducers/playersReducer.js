import { GET_PLAYERS, GET_PLAYERS_SUCCESS, GET_PLAYERS_FAILURE } from '../actions/playersAction';

const defaultState = {
  list: [],
  isLoading: false,
  err: null
};

export function playersReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_PLAYERS: 
      return { ...state, isLoading: true };

    case GET_PLAYERS_SUCCESS:
      return { ...state, list: action.payload, isLoading: false, err: null };

    case GET_PLAYERS_FAILURE:
      return { ...state, err: action.payload, isLoading: false };

    default:
      return state;
  }
}
