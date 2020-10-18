import React from 'react';
import Avatar from '../avatar/Avatar'
import './Header.css'

function Header({ name, title}) {
  return <>
    <header class="header">
      <span class="greetings">Olá! Eu sou</span>
      <h1 class="name">{ name }</h1>
      <h2 class="job-title">{ title }</h2>
    </header>
    
    <Avatar />
  </>
}

export default Header