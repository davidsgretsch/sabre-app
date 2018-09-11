import { APPLY_FILTER } from '../actions/filterAction';

export function filterReducer(state = {}, action) {
  switch (action.type) {
    case APPLY_FILTER:
      return { ...action.payload };

    default:
      return state;
  }
}
