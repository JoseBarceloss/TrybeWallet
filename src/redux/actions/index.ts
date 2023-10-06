import { Dispatch } from 'redux';
import { ActionEmailType } from '../../types/type';
import { ApiCurrency } from '../../ApiFetch';

export const USER_EMAIL = 'USER_EMAIL';
export const CURRENCY_FETCH = 'CURRENCY_FETCH';

export function saveEmail(email: string): ActionEmailType {
  return {
    type: USER_EMAIL,
    payload: email,
  };
}

export const currencySuccess = (currencies: string[]) => ({
  type: 'CURRENCY_FETCH',
  payload: currencies,
});

export const addExpense = (expense: any) => ({
  type: 'ADD_EXPENSE',
  payload: expense,
});

export const updateTotal = () => ({
  type: 'UPDATE_TOTAL',
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
