import React from 'react';
import Card from '../../../components/card/Card';
import './Projects.css';

function Projects({ projects }) {
  return <>
    <section id="sessao-projetos">
      <div class="projetos">
        {projects.map((project, index) => (
          <Card key={index}>
            <a href={project.url}>
              <h3>{project.name}</h3>
              <span>Tecnologia: {project.technology}</span>
              <p>{project.description}</p>
            </a>
          </Card>
        ))}
      </div>
    </section>
  </>
}

export default Projects