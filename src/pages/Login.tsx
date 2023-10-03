import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveEmail } from '../redux/actions'; // Importe a ação apropriada

// Vou comenta bastante no codigo para ficar mais facil de entender.

function Login() {
  // Estado para armazenar o email e a senha
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Obtém a função de despacho do Redux
  const dispatch = useDispatch();

  // Obtém a função de navegação do React Router
  const navigate = useNavigate();

  // Verifica se o email é válido usando uma expressão regular
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);

  // Verifica se a senha tem pelo menos 6 caracteres
  const isPasswordValid = password.length >= 6;

  // Verifica se tanto o email quanto a senha são válidos
  const InvalidoEmailPassword = !isEmailValid || !isPasswordValid;

  // Manipulador para o envio do formulário
  function handleSubmitLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Despacha uma ação para salvar o email no Redux
    dispatch(saveEmail(email));

    // Navega para a rota '/carteira'
    navigate('/carteira');
  }

  return (
    <form onSubmit={ handleSubmitLogin }>
      <h1>TrybeWallet</h1>
      <input
        type="email"
        name="email"
        value={ email }
        placeholder="Email"
        onChange={ (event) => setEmail(event.target.value) }
        data-testid="email-input"
      />
      <input
        type="password"
        name="password"
        placeholder="Senha"
        value={ password }
        onChange={ (event) => setPassword(event.target.value) }
        data-testid="password-input"
      />
      <button
        type="submit"
        disabled={ InvalidoEmailPassword }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
