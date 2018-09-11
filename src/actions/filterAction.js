export const APPLY_FILTER = 'APPLY_FILTER';

export function applyFilterAction(filter) {
  return {
    type: APPLY_FILTER,
    payload: filter
  }
}
