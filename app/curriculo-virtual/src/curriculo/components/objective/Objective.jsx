import React from 'react';
import './Objective.css';

function Objective({ text }) {
  return <>
    <section id="sessao-objetivo">
      <h2>Objetivo</h2>
      <p>{text}</p>
    </section>
  </>
}

export default Objective