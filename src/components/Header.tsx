import { useSelector } from 'react-redux';
import { StateType } from '../types/type';

function Header() {
  // Obtém o e-mail do estado global usando useSelector
  const { email } = useSelector(
    (state: StateType) => state.user,
  );

  return (
    <div>
      <h3>TrybeWallet</h3>
      {/* Exibe o e-mail da pessoa usuária */}
      <p data-testid="email-field">{email}</p>
      {/* Exibe a despesa total (ainda fixa em 0, precisa ser calculada) */}
      <p data-testid="total-field">0</p>
      {/* Exibe a moeda (câmbio) que está sendo utilizada */}
      <p data-testid="header-currency-field">BRL</p>
    </div>
  );
}

export default Header;
