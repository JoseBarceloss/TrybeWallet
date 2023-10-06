import { Dispatch } from 'redux';
import { ActionEmailType } from '../../types/type';
import { ApiCurrency } from '../../ApiFetch';

import { ADD_EXPENSE, UPDATE_TOTAL, DELETE_EXPENSE, USER_EMAIL,
  CURRENCY_FETCH } from '../../types/names';

export function saveEmail(email: string): ActionEmailType {
  return {
    type: USER_EMAIL,
    payload: email,
  };
}

export const currencySuccess = (currencies: string[]) => ({
  type: CURRENCY_FETCH,
  payload: currencies,
});

export const addExpense = (expense: any) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

export const deleteExpense = (id: number) => ({
  type: DELETE_EXPENSE,
  payload: id,
});

export const updateTotal = () => ({
  type: UPDATE_TOTAL,
});

export const api = (form: any) => {
  return async (dispatch: Dispatch) => {
    const response = await ApiCurrency();
    const newEspense = { ...form, exchangeRates: response };
    dispatch(addExpense(newEspense));
  };
};

export const apiEncapsu = () => async (dispatch: Dispatch) => {
  const response = await ApiCurrency();
  const currencies = Object.keys(response);
  dispatch(currencySuccess(currencies));
};
