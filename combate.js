/*

 S I M U L A D O R    D E    C O M B A T E

- simulador de combate de algum jogo
- o combate dois personagens
- os personagens podem ter armas e escudo
- o escudo dá um bonus de defesa
- a arma um bonus de ataque
- cada personagem tem sua propria defesa e ataque inicial
- calcular o dano que um personagem causa no outro

Exemplo:
> J1 ataque 10, defesa 2
> J2 ataque 8, defesa 4
> Arma do J1 ataque +2
> Arma do J2 ataque +3
> Escudo do J2 defesa +1
> Teste: J1 ataca J2
> 10 + 2 - 4 - 1 = 7!!!

const dano = calculaCombate(j1, j2)
dano === 7

---------------

 S I M U L A D O R    D E    C O M B A T E    --   F A S E  II

> Personagens podem ter n buffs
> Personagens podem ter n debuffs
> Um buff aplica um bônus no ataque e defesa do personagem
> Um debuff aplica uma penalidade no ataque e na defesa do personagem
> Buff e debuff são um fator que multiplica o ataque ou defesa
> Exemplo de Buff:
> J1 ataque 10
> J1 Buff de 0.2
> Ataque do J1 = 12

> Exemplo de Debuff:
> J1 ataque 10
> J1 Debuff de 0.2
> Ataque do J1 = 8

Lembrando que um personagem pode estar sob efeito de vários buffs e debuffs

personagem = {
  arma: {}
  buffs: []
  debuffs: []
}

---------------

 S I M U L A D O R    D E    C O M B A T E    --   F A S E  III

> Printar no console cada vez que um ataque for desferido com sucesso
> Printar no console cada vez que um ataque for ignorado
> Printar no console cada vez que um buff for aplicado
> Printar no console cada vez que um debuff for aplicado
> Regra única: não é possível utilizar console.log dentro da função de cálculo
> Regra adicional:  Printar primeiro todos os ataques com sucesso, depois ignorados, depois buffs e debuffs

*/

function combateAtaque(atacante, defensor) {
  let bonusArma = 0
  if (atacante.arma !== null) {
    bonusArma = atacante.arma.bonus
  }
  
  let bonusEscudo = 0
  if (defensor.escudo !== null) {
    bonusEscudo = defensor.escudo.bonus
  }

  let bonusAtaque = 0
  if (atacante.buffs && atacante.buffs.length > 0) {
    for (let i = 0; i < atacante.buffs.length; i++) {
      bonusAtaque += atacante.buffs[i].fator * atacante.ataque
    }
  }

  let penalidadeAtaque = 0
  if (atacante.debuffs && atacante.debuffs.length > 0) {
    for (let i = 0; i < atacante.debuffs.length; i++) {
      penalidadeAtaque += atacante.ataque * atacante.debuffs[i].fator
    }
  }

  let bonusDefesa = 0
  if (defensor.buffs && defensor.buffs.length > 0) {
    for (let i = 0; i < defensor.buffs.length; i++ ) {
      bonusDefesa += defensor.buffs[i].fator * defensor.defesa
    }
  }

  let penalidadeDefesa = 0
  if (defensor.debuffs && defensor.debuffs.length > 0) {
    for (let i = 0; i < defensor.debuffs.length; i++) {
      penalidadeDefesa += defensor.defesa * defensor.debuffs[i].fator
    }
  }

  const totalAtaque = atacante.ataque + bonusArma + bonusAtaque - penalidadeAtaque
  const totalDefesa = defensor.defesa + bonusEscudo + bonusDefesa - penalidadeDefesa

  const dano = totalAtaque - totalDefesa

  if (dano < 0) {
    return 0
  } else {
    return dano
  }
}

/* ------------------------------------------------------------------------------ */

const buff10 = { fator: 0.10 }
const buff25 = { fator: 0.25 }
const buff50 = { fator: 0.50 }
const debuff10 = { fator: 0.10 }
const debuff25 = { fator: 0.25 }
const debuff50 = { fator: 0.50 }

verificaSeDeuCerto('01', 0, { ataque: 0, arma: null }, { defesa: 0, escudo: null })
verificaSeDeuCerto('02', 8, { ataque: 9, arma: null }, { defesa: 1, escudo: null })
verificaSeDeuCerto('03', 0, { ataque: 1, arma: null }, { defesa: 9, escudo: null })
verificaSeDeuCerto('04', 2, { ataque: 0, arma: { bonus: 2 } }, { defesa: 0, escudo: null })
verificaSeDeuCerto('05', 5, { ataque: 3, arma: { bonus: 2 } }, { defesa: 0, escudo: null })
verificaSeDeuCerto('06', 4, { ataque: 3, arma: { bonus: 2 } }, { defesa: 1, escudo: null })
verificaSeDeuCerto('07', 3, { ataque: 3, arma: { bonus: 2 } }, { defesa: 1, escudo: { bonus: 1 } })
verificaSeDeuCerto('08', 2, { ataque: 3, arma: { bonus: 2 } }, { defesa: 1, escudo: { bonus: 2 } })
verificaSeDeuCerto('09', 0, { ataque: 3, arma: { bonus: 2 } }, { defesa: 1, escudo: { bonus: 5 } })
verificaSeDeuCerto('10', 9, { ataque: 9, arma: { bonus: 9 } }, { defesa: 5, escudo: { bonus: 4 } })

verificaSeDeuCerto('11', 9.5, { ataque: 10, arma: null, buffs: [buff25]}, { defesa: 3, escudo: null })
verificaSeDeuCerto('12', 3.5, { ataque: 10, arma: null, buffs: [buff10, buff25]}, { defesa: 10, escudo: null })
verificaSeDeuCerto('12', 5.5, { ataque: 10, arma: { bonus: 2 }, buffs: [buff10, buff25]}, { defesa: 10, escudo: null })
verificaSeDeuCerto('13', 2.5, { ataque: 10, arma: null }, { defesa: 5, escudo: null, buffs: [buff50] })
verificaSeDeuCerto('14', 3.25, { ataque: 10, arma: null }, { defesa: 5, escudo: null, buffs: [buff10, buff25] })
verificaSeDeuCerto('15', 2.25, { ataque: 10, arma: null }, { defesa: 5, escudo: { bonus: 1 }, buffs: [buff10, buff25] })

verificaSeDeuCerto('16', 4.5, { ataque: 10, arma: null, debuffs: [debuff25]}, { defesa: 3, escudo: null })
verificaSeDeuCerto('17', 3.5, { ataque: 10, arma: null, debuffs: [debuff10, debuff25]}, { defesa: 3, escudo: null })
verificaSeDeuCerto('18', 5.5, { ataque: 10, arma: { bonus: 2 }, debuffs: [debuff10, debuff25]}, { defesa: 3, escudo: null })
verificaSeDeuCerto('19', 2.5, { ataque: 5, arma: null }, { defesa: 5, escudo: null, debuffs: [debuff50] })
verificaSeDeuCerto('20', 1.75, { ataque: 5, arma: null }, { defesa: 5, escudo: null, debuffs: [debuff10, debuff25] })
verificaSeDeuCerto('21', 0.75, { ataque: 5, arma: null }, { defesa: 5, escudo: { bonus: 1 }, debuffs: [debuff10, debuff25] })

/* ------------------------------------------------------------------------------ */

function verificaSeDeuCerto(cenario, resultadoEsperado, atacante, defensor) {
  const resultado = combateAtaque(atacante, defensor)
  if (resultado === resultadoEsperado) {
    console.log(cenario + '. Acertô mizeravi')
  } else {
    console.log(cenario + '. Errroooouu!! Esperado: ' + resultadoEsperado + ', mas retornou: ' + resultado)
  }
}