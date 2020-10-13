
/*
Criar um novo projeto no Github (recomendacao-jogos) para recomendação de jogos baseado em regras pré-definidas e interesses dos usuários. O interesse do usuário é representado por um objeto contendo as propriedades:

console => valore possíveis: 'xbox', 'play', 'pc'
estilo => valores possíveis: 'plataforma', 'estratégia', 'corrida', 'fps'
ambiente => valores possíveis: 'sci-fi', 'medieval', 'realista' 
intensidade => valores possíveis: 'casual', 'normal', 'hardcore'
Regras:

Quando o interesse for 'xbox' e estilo 'corrida', o retorno deve ser 'Forza Motorsport'
Quando o interesse for 'pc' e 'estratégia', o retorno deve ser 'Age of Empires
Quando o interesse for 'play', 'estratégia' e 'hardcore', o retorno deve ser 'Final Fantasy Tactics'
Quando o interesse for 'corrida' e 'sci-fi', o retorno deve ser 'F-Zero'
Quando o interesse for 'pc' e 'hardcore', o retorno deve ser 'Dark Souls'
Quando o interesse for 'pc' e 'casual', o retorno deve ser 'Angry Birds'
Quando o interesse for 'play' e 'plataforma', o retorno deve ser 'Crash Bandicoot'
Quando o interesse for 'corrida' e 'casual', o retorno deve ser 'Mario Kart'
Quando o interesse for 'fps' e 'pc', o retorno deve ser 'Counter Strike'
Quando o interesse for 'xbox' e 'sci-fi', o retorno deve ser 'Halo'
*/
function recomendarJogo(interesse) {

  let jogoRecomendado = ''

  if (interesse.console === 'xbox' && interesse.estilo === 'corrida') {
    jogoRecomendado = 'Forza Motorsport'
  }

  if (interesse.console === 'pc' && interesse.estilo === 'estratégia') {
    jogoRecomendado = 'Age of Empires'
  }

  if (interesse.console === 'play' && interesse.estilo === 'estratégia' && interesse.interesse === 'hardcore') {
    jogoRecomendado = 'Final Fantasy Tactics'
  }
  
  if (interesse.ambiente === 'sci-fi' && interesse.estilo === 'corrida') {
    jogoRecomendado = 'F-Zero'
  }
  
  if (interesse.console === 'pc' && interesse.intensidade === 'hardcore') {
    jogoRecomendado = 'Dark Souls'
  }
  
  if (interesse.console === 'pc' && interesse.intensidade === 'casual') {
    jogoRecomendado = 'Angry Birds'
  }
  
  if (interesse.console === 'pc' && interesse.intensidade === 'casual') {
    jogoRecomendado = 'Angry Birds'
  }
  
  if (interesse.console === 'play' && interesse.estilo === 'plataforma') {
    jogoRecomendado = 'Crash Bandicoot'
  }
  
  if (interesse.intensidade === 'casual' && interesse.estilo === 'corrida') {
    jogoRecomendado = 'Mario Kart'
  }
  
  if (interesse.console === 'pc' && interesse.estilo === 'fps') {
    jogoRecomendado = 'Counter Strike'
  }
  
  if (interesse.console === 'xbox' && interesse.ambiente === 'sci-fi') {
    jogoRecomendado = 'Halo'
  }

  if (interesse.console === 'pc' && interesse.estilo === 'estratégia' && interesse.intensidade === 'casual') {
    jogoRecomendado = 'League of Legends'
  }

  return jogoRecomendado
}

// ---------------------------------------
 
verificaSeDeuCerto('01', 'Forza Motorsport', {
  console: 'xbox',
  estilo: 'corrida'
})
 
// ---------------------------------------

verificaSeDeuCerto('02', 'Age of Empires', {
  console: 'pc',
  estilo: 'estratégia'
})

// ---------------------------------------
 
verificaSeDeuCerto('03', 'Final Fantasy Tactics', {
  console: 'play',
  estilo: 'estratégia',
  interesse: 'hardcore'
})

// ---------------------------------------
 
verificaSeDeuCerto('04', 'F-Zero', {
  estilo: 'corrida',
  ambiente: 'sci-fi'
})

// ---------------------------------------
 
verificaSeDeuCerto('05', 'Dark Souls', {
  console: 'pc',
  intensidade: 'hardcore'
})

// ---------------------------------------
 
verificaSeDeuCerto('06', 'Angry Birds', {
  console: 'pc',
  intensidade: 'casual'
})

// ---------------------------------------
 
verificaSeDeuCerto('07', 'Crash Bandicoot', {
  console: 'play',
  estilo: 'plataforma'
})

// ---------------------------------------
 
verificaSeDeuCerto('08', 'Mario Kart', {
  intensidade: 'casual',
  estilo: 'corrida'
})

// ---------------------------------------
 
verificaSeDeuCerto('09', 'Counter Strike', {
  console: 'pc',
  estilo: 'fps'
})

// ---------------------------------------
 
verificaSeDeuCerto('10', 'Halo', {
  console: 'xbox',
  ambiente: 'sci-fi'
})

// ---------------------------------------
 
verificaSeDeuCerto('11', 'League of Legends', {
  console: 'pc',
  estilo: 'estratégia',
  intensidade: 'casual'
})

// ---------------------------------------
 
function verificaSeDeuCerto(cenario, resultadoEsperado, interesse) {
  const jogo = recomendarJogo(interesse)
  
  if (jogo === resultadoEsperado) {
    console.log(cenario + '. Deu certo.')
  } else { 
    console.log(cenario + '. Errrroooou!!')
  }
}