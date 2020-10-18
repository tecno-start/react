import React, { useState } from 'react'
import Alerta from './components/Alerta'

function Conteudo() {

  const [frutas, setFrutas] = useState([])

  function clickFrutas() {
    setFrutas(['banana', 'morango', 'manga', 'melancia', 'banana'])
  }

  return <div>
    <button type="button" onClick={clickFrutas}>Atualiza frutas</button>

    {frutas.map((fruta, index) => (
      <p key={index}>{fruta}</p>
    ))}

    <hr />

    
    <Alerta texto="Deu tudo certo" tipo="sucesso" />
    <Alerta texto="Deu ruim" tipo="erro" />
    <Alerta texto="To processando ainda" tipo="info" />

  </div>
}

export default Conteudo