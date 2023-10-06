import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type CurrencyType = {
  code: string;
  name: string;
};

export type Expense = {
  id : number,
  value : string,
  description : string,
  currency : string,
  method : string,
  tag : string,
  exchangeRates: {
    [key: string]: {
      code: string,
      ask: string,
    }
  },
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
