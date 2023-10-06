import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type CurrencyType = {
  code: string;
  name: string;
};

export type Expense = {
  id: number;
  value: number;
  description: string;
  currency: string;
  method: string;
  tag: string;
  exchangeRates: any;
};

export type ActionEmailType = {
  type: string,
  payload: string
};

export type WalletStateType = {
  currencies: string[];
  expenses: Expense[],
};

export type StateType = {
  user: EmailStateType
  wallet: WalletStateType
};

export type EmailStateType = {
  email: string
};

export type DispatchType = ThunkDispatch<StateType, void, AnyAction>;
