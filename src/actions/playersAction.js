import { getPlayers } from '../services/players';

export const GET_PLAYERS = 'GET_PLAYERS';
export const GET_PLAYERS_SUCCESS = 'GET_PLAYERS_SUCCESS';
export const GET_PLAYERS_FAILURE = 'GET_PLAYERS_FAILURE';

export function fetchGetPlayers() {
  return dispatch => {
    dispatch(getPlayersAction());
    return getPlayers()
    .then(success => dispatch(getPlayersSuccess(success)))
    .catch(err => dispatch(getPlayersFailure(err)));
  };
}

function getPlayersAction() {
  return {
    type: GET_PLAYERS
  };
}

function getPlayersSuccess(data) {
  return {
    type: GET_PLAYERS_SUCCESS,
    payload: data
  };
}

function getPlayersFailure(err) {
  return {
    type: GET_PLAYERS_FAILURE,
    payload: err
  };
}
