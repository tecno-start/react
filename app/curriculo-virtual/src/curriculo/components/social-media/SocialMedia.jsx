import React from 'react';
import './SocialMedia.css';

function SocialMedia({ links }) {
  return <>
    <section id="sessao-redes-sociais">
      <h2>Redes Sociais</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index}><a href={link.url}>{link.text}</a></li>
        ))}
      </ul>
    </section>
  </>
}

export default SocialMedia