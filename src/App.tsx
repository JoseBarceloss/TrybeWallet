import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <>
      <h1>Ola</h1>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/carteira" element={ <Wallet /> } />
      </Routes>
    </>
  );
}

export default App;
