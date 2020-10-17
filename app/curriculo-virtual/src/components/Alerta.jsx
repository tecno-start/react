import React from 'react';
import './Alerta.css';

function Alerta({ texto, tipo }) {
  return <p className={"alerta " + tipo}>{texto}</p>
}

export default Alerta