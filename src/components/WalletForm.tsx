import React, { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { DispatchType, StateType } from '../types/type';
import { api, apiEncapsu } from '../redux/actions';

const initialFormData = {
  description: '',
  value: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

const expenseCategories = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

function WalletForm() {
  const dispatch: DispatchType = useDispatch();
  const currencies = useSelector((state: StateType) => state.wallet.currencies);
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddExpense = () => {
    dispatch(api(formData));
    setFormData(initialFormData);
  };

  useEffect(() => {
    dispatch(apiEncapsu());
  }, [dispatch]);

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="description-input">Descrição da despesa</label>
          <input
            type="text"
            id="description-input"
            name="description"
            value={ formData.description }
            onChange={ handleChange }
            data-testid="description-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="value-input">Valor</label>
          <input
            type="number"
            id="value-input"
            name="value"
            value={ formData.value }
            onChange={ handleChange }
            data-testid="value-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="currency-input">Moeda</label>
          <select
            id="currency-input"
            data-testid="currency-input"
            value={ formData.currency }
            name="currency"
            onChange={ handleChange }
          >
            {currencies.map((moeda, index) => (
              <option key={ index } value={ moeda }>
                {moeda}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="method-input">Método de pagamento</label>
          <select
            id="method-input"
            data-testid="method-input"
            name="method"
            value={ formData.method }
            onChange={ handleChange }
          >
            {paymentMethods.map((method, index) => (
              <option key={ index } value={ method }>
                {method}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="tag-input">Categoria da despesa</label>
          <select
            id="tag-input"
            data-testid="tag-input"
            name="tag"
            value={ formData.tag }
            onChange={ handleChange }
          >
            {expenseCategories.map((category, index) => (
              <option key={ index } value={ category }>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button type="button" onClick={ handleAddExpense }>
          Adicionar despesa
        </button>
      </form>
    </div>
  );
}

export default WalletForm;
