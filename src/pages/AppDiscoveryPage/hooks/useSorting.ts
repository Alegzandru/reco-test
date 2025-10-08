import { useReducer } from 'react';

export type Sorting = {
  field: 'appName' | 'category';
  order: 'asc' | 'desc';
};

export type SortingAction =
  | { type: 'SET_FIELD'; field: 'appName' | 'category' }
  | { type: 'SET_ORDER'; order: 'asc' | 'desc' }
  | { type: 'TOGGLE_ORDER' };

const sortingReducer = (state: Sorting, action: SortingAction): Sorting => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        field: action.field,
        order: 'asc',
      };
    case 'TOGGLE_ORDER':
      return {
        ...state,
        order: state.order === 'asc' ? 'desc' : 'asc',
      };
    default:
      return state;
  }
};

export const useSorting = () =>
  useReducer(sortingReducer, {
    field: 'appName',
    order: 'asc',
  });
