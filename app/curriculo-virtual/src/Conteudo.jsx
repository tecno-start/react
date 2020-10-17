import React, { useState } from 'react'
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
  </div>
}

export default Conteudo