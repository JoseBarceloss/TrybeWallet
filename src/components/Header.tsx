import { useSelector } from 'react-redux';
import { StateType } from '../types/type';

function Header() {
  const { email } = useSelector((state: StateType) => state.user);
  const { expenses } = useSelector((state: StateType) => state.wallet);

  function totalExpenses() {
    return expenses.reduce((acc, curr) => {
      return acc + Number(curr.value) * Number(curr.exchangeRates[curr.currency].ask);
    }, 0).toFixed(2);
  }

  return (
    <div>
      <h3>TrybeWallet</h3>
      <p data-testid="email-field">{email}</p>
      <p data-testid="total-field">{totalExpenses()}</p>
      <p data-testid="header-currency-field">BRL</p>
    </div>
  );
}

export default Header;
