import React, { useState } from 'react'

import Header from './components/header/Header'
import Personal from './components/personal/Personal'
import Objective from './components/objective/Objective'
import Biography from './components/biography/Biography'
import Projects from './components/projects/Projects'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import SocialMedia from './components/social-media/SocialMedia'
import Footer from './components/footer/Footer'

import './Curriculo.css'

function Curriculo() {

  const [curriculo, setCurriculo] = useState({
    name: 'Robson Rosa',
    title: 'Desenvolvedor & Treinador',

    birthdate: '10/04/1988',
    city: 'Porto Alegre',
    phone: '(51) 98193-8496',
    email: 'robsonrosa@outlook.com',

    objective: 'Ensinar toda a turma e ajudar a colocar todos no mercado de trabalho',

    biography: 'Apaixonado por jogos e tecnologia desde que me conheço por gente. Estou sempre lendo sobre o assunto, estudando, ou simplesmente aproveitando o tempo jogando, tanto jogos digitais quanto jogos de tabuleiro. Tenho 32 anos, formado em desenvolvimento de jogos, mas atuo no desenvolvimento de software desde 2010',

    projects: [
      {
        name: 'Wind-Up Racer',
        technology: 'Unity',
        description: 'Jogo no estilo Mario Kart com carrinhos de brinquedo à corda'
      }, {
        name: 'CHON',
        technology: 'Nenhuma',
        description: 'Jogo de tabuleiro para um evento da Nasa como o objetivo de ensinar Astrofísica em larga escala'
      },{
        name: 'Tecno Street Fighter',
        technology: 'React',
        description: 'Não sei o que escrever aqui então vou escrever um texto aleatório'
      }
    ],

    courses: [
      {
        name: 'Curso Técnico em Eletrônica',
        institution: 'Fundação Liberato',
        date: '2002 ~ 2005'
      },
      {
        name: 'Curso Superior em Tecnologia de Jogos Digitais',
        institution: 'UNISINOS',
        date: '2009 ~ 2012'
      }
    ],

    experiences: [
      {
        title: 'Líder Técnico',
        company: 'CWI Software',
        date: '2011 ~ 2020'
      },
      {
        title: 'Arquiteto de Software',
        company: 'AC Digital',
        date: '2020 ~ Atual'
      }
    ],

    socialMedia: [
      { url: 'https://www.facebook.com/robsonmrosa', text: 'Facebook' },
      { url: 'https://www.instagram.com/robsonmrosa', text: 'Instagram' },
      { url: 'https://www.linkedin.com/in/robsonmrosa', text: 'LinkedIn' }
    ],

    author: 'Robson Rosa',
    course: 'Curso de React',
    school: 'Tecno Start'
  })

  return (
    <>
      <Header name={curriculo.name} title={curriculo.title} />

      <main>
        <Personal birthdate={curriculo.birthdate} city={curriculo.city} phone={curriculo.phone} email={curriculo.email} />
        <Objective text={curriculo.objective} />
        <Biography text={curriculo.biography} />
        <Projects projects={curriculo.projects} />
        <Education courses={curriculo.courses} />
        <Experience experiences={curriculo.experiences} />
        <SocialMedia links={curriculo.socialMedia} />
      </main>

      <Footer author={curriculo.author} course={curriculo.course} school={curriculo.school} />
    </>
  )
}

export default Curriculo