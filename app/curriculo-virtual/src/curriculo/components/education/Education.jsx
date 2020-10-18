import React from 'react';
import './Education.css';

function Education({ courses }) {
  return <>
    <section id="sessao-formacao">
      <h2>Formação</h2>
      <ol>
        {courses.map((course, index) => (
          <li key={index}>{course.name} - {course.institution} - {course.date}</li>
        ))}
      </ol>
    </section>
  </>
}

export default Education