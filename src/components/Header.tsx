import { useSelector } from 'react-redux';
import { StateType } from '../types/type';

function Header() {
  const { email } = useSelector((state: StateType) => state.user);
  const { expenses } = useSelector((state: StateType) => state.wallet);

  const sum = expenses.reduce((acc, expense) => {
    const cotacao = parseFloat(expense.exchangeRates[expense.currency].ask);
    return acc + parseFloat(expense.value) * cotacao;
  }, 0);

  return (
    <div>
      <h3>TrybeWallet</h3>
      <p data-testid="email-field">{email}</p>
      <p data-testid="total-field">{sum.toFixed(2)}</p>
      <p data-testid="header-currency-field">BRL</p>
    </div>
  );
}

export default Header;
