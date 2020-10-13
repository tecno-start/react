/*
Criar um novo projeto no Github (juros-compostos) para
calcular o montante acumulado de um investimento financeiro. 
A função deverá receber por argumentos, qual o valor do capital investido, 
a taxa de juros aplicada e o período da aplicação. Juros Compostos
*/

function calculaJurosCompostos(capital, taxa, periodo) {
  const montante = capital * (1 + taxa / 100) ** periodo
  return parseFloat(montante.toFixed(2))
}

verificaSeDeuCerto('1', 3300.39, 1000, 1, 120)
verificaSeDeuCerto('2', 25602.95, 2500, 1.17, 200)
verificaSeDeuCerto('3', 49220.66, 5000, 1.15, 200)
verificaSeDeuCerto('4', 494.66, 5000, -1.15, 200)

function verificaSeDeuCerto(cenario, resultadoEsperado, capital, taxa, periodo) {
  const resultado = calculaJurosCompostos(capital, taxa, periodo)
  if (resultado === resultadoEsperado) {
    console.log(cenario + '. Acertô mizeravi')
  } else {
    console.log(cenario + '. Errroooouu!! Esperado: ' + resultadoEsperado + ', mas retornou: ' + resultado)
  }
}