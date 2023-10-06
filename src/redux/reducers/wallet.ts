import { AnyAction } from 'redux';
import { ADD_EXPENSE, UPDATE_TOTAL, CURRENCY_FETCH } from '../../types/names';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case CURRENCY_FETCH:
      return {
        ...state,
        currencies: action.payload,
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, { ...action.payload, id: state.expenses.length }],
      };
    case UPDATE_TOTAL:
      return state;
    default:
      return state;
  }
}

export default walletReducer;
