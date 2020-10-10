
// 1. Escreva uma função que calcule a posição de um corpo em um movimento retilíneo uniforme
function mru(so, v, t) {
  return so + v * t
}

// 2. Escreva uma função que calcule a posição de um corpo em um movimento retilíneo uniformemente variado
function mruv(vo, a, t) {
  return vo + (a**2) * t 
}

// 3. Escreva uma função que calcule a média aritmética
function mediaAritmetica(numeros) {
  let total = 0
  for (let i = 0; i < numeros.length; i++) {
    total += numeros[i]
  }
  return total / numeros.length
}

// 4. Escreva uma função que receba um objeto pessoa e escreva na tela suas propriedades e o resultado da função falar.
function descrevePessoa(pessoa) {
  console.log(pessoa.nome)
  console.log(pessoa.idade)
  console.log(pessoa.vivo)
  console.log(pessoa.falar())
}

// 5. Escreva uma função que calcule a área de uma circunferência
function areaCirculo(r) { 
  return 3.14159 * r ** 2 
} 
// 6. Escreva uma função que calcule a área de um triângulo a partir da medida de cada lado
function areaTriangulo(b, h) { 
  return (b * h) / 2
}


// Exemplo de uso de condicionais e operadores lógicos e relacionais

const computador1 = {
  nome: 'SuperMax',
  preco: 2000,
  processador: 'Intel',
  placaDeVideo: 'AMD',
  memoria: 'Corsair',
  hdd: 1500000000000,
  ssd: 150000000000,
  motherboard: 'Asus'
}

const computador2 = {
  nome: 'SuperMaxBlaster',
  preco: 8000,
  processador: 'Intel',
  placaDeVideo: 'NVidia',
  memoria: 'Corsair',
  hdd: 1500000000000,
  ssd: 150000000000,
  motherboard: 'Asus'
}

const computador3 = {
  nome: 'SuperTop',
  preco: 5000,
  processador: 'Intel',
  placaDeVideo: 'NVidia',
  memoria: 'Corsair',
  hdd: 100000000000,
  ssd: 150000000000,
  motherboard: 'Gigabyte'
}

const computador4 = {
  nome: 'SuperUltraBlaster',
  preco: 5500,
  processador: 'Intel',
  placaDeVideo: 'NVidia',
  memoria: 'Corsair',
  hdd: 1200000000000,
  ssd: 150000000000,
  motherboard: 'Asus'
}

function aplicarDesconto(valorOriginal, formaPagamento) {
  let desconto = 0
  switch(formaPagamento) {
    case 'Crédito':
      desconto = 0.05
      break
    case 'Débito':
      desconto = 0.10
      break
    case 'Boleto':
      desconto = 0.25
      break
    default:
      desconto = 0
  }
  return valorOriginal - (valorOriginal * desconto)
}

function comprarPc(restricoes) {
  const loja = [computador1, computador2, computador3, computador4]

  for (let i = 0; i < loja.length; i++) {
    const computadorAtual = loja[i]
    const precoComDesconto = aplicarDesconto(computadorAtual.preco, restricoes.pagamento)
    const precoAtende = precoComDesconto <= restricoes.dinheiro
    const processadorAtende = computadorAtual.processador === restricoes.processador
    const placaDeVideoAtende = computadorAtual.placaDeVideo === restricoes.placaDeVideo
    const memoriaAtende = computadorAtual.memoria === restricoes.memoria
    const hddAtende = computadorAtual.hdd >= restricoes.hdd
    const ssdAtende = computadorAtual.ssd >= restricoes.ssd
    const mbAtende = computadorAtual.motherboard === restricoes.motherboard
    const atende = !mbAtende && precoAtende && processadorAtende && placaDeVideoAtende && memoriaAtende && (hddAtende || ssdAtende)
    
    if (atende) {
      return computadorAtual
    }
  }

  return null
}

const restricoesJuan = {
  dinheiro: 6000,
  processador: 'Intel',
  placaDeVideo: 'NVidia',
  memoria: 'Corsair',
  hdd: 1000000000000,
  ssd: 100000000000,
  motherboard: 'Gigabyte',
  pagamento: 'Boleto'
}

let compra = null
const pc = comprarPc(restricoesJuan)
if (pc === null) {
  compra = 'Não encontrei nada com essas restrições'
} else {
  compra = pc.nome
}

// console.log(compra)

// arrow function

// const mruv = (vo, a, t) => vo + (a**2) * t
// const alerta = texto => console.log(texto)
// const obtemNomeUsuario = () => prompt('Teu nome')
// const mediaAritmetica = numeros => {
//   let total = 0
//   for (let i = 0; i < numeros.length; i++) {
//     total += numeros[i]
//   }
//   return total / numeros.length
// }


const array = [1,2,3,4,5,6,7,8,9]
const pares = array.filter(n => n % 2 === 0)
const impares = array.filter(n => n % 2 !== 0)
console.log(pares)
console.log(impares)