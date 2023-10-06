import { AnyAction } from 'redux';
import { ADD_EXPENSE, CURRENCY_FETCH, DELETE_EXPENSE } from '../../types/names';

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
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((expense: any) => expense.id !== action.payload),
      };
    default:
      return state;
  }
}

export default walletReducer;
