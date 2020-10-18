import React from 'react';
import './Personal.css';

function Personal({ birthdate, city, phone, email }) {
  return <>
    <section id="sessao-dados-basicos">
      <h2>Informações Pessoais</h2>
      <dl>
        <dt>Data de Nascimento</dt>
        <dd>{birthdate}</dd>

        <dt>Cidade</dt>
        <dd>{city}</dd>

        <dt>Telefone</dt>
        <dd>{phone}</dd>

        <dt>E-mail</dt>
        <dd>{email}</dd>
      </dl>
    </section>
  </>
}

export default Personal