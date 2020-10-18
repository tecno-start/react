import React from 'react';
import './Footer.css';

function Footer({ author, course, school }) {
  return <>
    <footer>
      <p>Desenvolvido por {author} no {course} da {school}</p>
    </footer>
  </>
}

export default Footer