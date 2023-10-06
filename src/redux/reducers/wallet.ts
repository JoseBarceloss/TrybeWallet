import { AnyAction } from 'redux';
import { CURRENCY_FETCH } from '../actions';
import { ADD_EXPENSE, UPDATE_TOTAL } from '../../types/wallet';

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
