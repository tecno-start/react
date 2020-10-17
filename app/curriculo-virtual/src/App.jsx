import React from 'react';
import Alerta from './components/Alerta.jsx';
import './App.css';

function App() {
  return (
    <div className="App">

      <Alerta texto="Deu tudo certo" tipo="sucesso" />
      <Alerta texto="Deu ruim" tipo="erro" />
      <Alerta texto="To processando ainda" tipo="info" />

    </div>
  );
}

export default App;
