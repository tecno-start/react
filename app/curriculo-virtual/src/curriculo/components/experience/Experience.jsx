import React from 'react';
import './Experience.css';

function Experience({ experiences }) {
  return <>
    <section id="sessao-experiencia">
      <h2>Experiência</h2>
      <ol>
        {experiences.map((experience, index) => (
          <li key={index}>{experience.title} - {experience.company} - {experience.date}</li>
        ))}
      </ol>
    </section>
  </>
}

export default Experience