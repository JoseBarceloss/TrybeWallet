import { useSelector, useDispatch } from 'react-redux';
import { StateType, Expense } from '../types/type';
import { deleteExpense } from '../redux/actions';

const tableHeaders = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

function renderExpenseDetails(expense: Expense) {
  const { description, tag, method, value, currency, exchangeRates } = expense;

  return (
    <>
      <td>{description}</td>
      <td>{tag}</td>
      <td>{method}</td>
      <td>{Number(value).toFixed(2)}</td>
      <td>{exchangeRates[currency].name}</td>
      <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
      <td>{(value * exchangeRates[currency].ask).toFixed(2)}</td>
      <td>Real</td>
    </>
  );
}

function Table() {
  const { expenses } = useSelector((state: StateType) => state.wallet);
  const dispatch = useDispatch();

  return (
    <div>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th key={ header }>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={ expense.id }>
              {renderExpenseDetails(expense)}
              <td>
                <button type="button">Editar</button>
                <button
                  type="button"
                  onClick={ () => dispatch(deleteExpense(expense.id)) }
                  data-testid="delete-btn"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
