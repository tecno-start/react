import React from 'react';
import logo from './logo.svg';
import './App.css';

function loteria(nomeUsuario) {
  return Math.random() > 0.5 ? 
  <p>{nomeUsuario}, você venceu</p> : 
  <p>{nomeUsuario}, você perdeu</p>
}

function lutador(p) {
  return <div className="card">
    <h3>{p.nome}</h3>
    <p>{p.descricao}</p>
    <img src={p.imagem} alt="imagem do projeto" />
  </div>
}

function streetFighter(lutadores) {
  return <div className="street-fighter">
    { lutadores.map(l => lutador(l)) }
  </div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        
        { loteria('Robson') }

        { streetFighter([
          {
            nome: 'Ryu',
            descricao: 'Lutador do Street Fighter',
            imagem: 'https://www.fightersgeneration.com/np5/char/ssf2hd/ryu-hdstance.gif'
          },
          {
            nome: 'Ken',
            descricao: 'Outro lutador do Street Fighter',
            imagem: 'https://i.pinimg.com/originals/a4/e3/16/a4e3165030a3715c35a7ac38960c55fe.gif'
          }
        ]) }
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprenda React
        </a>
      </header>
    </div>
  );
}

export default App;
