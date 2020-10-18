import React from 'react';
import './Biography.css';

function Biography({ text }) {
  return <>
    <section id="sessao-biografia">
      <h2>Biografia</h2>
      <p>{text}</p>
    </section>
  </>
}

export default Biography