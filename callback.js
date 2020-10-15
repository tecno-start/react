function pesquisaGoogle(termo, callback) {

  console.log('1. iniciando pesquisa no google')
  setTimeout(() => {
    if (callback) {
      callback('resulado da busca por ' + termo)
    }
  }, 5000)

}

function teste(retorno) {
  console.log('3. resultado da pesquisa')
  console.log(retorno)
}

pesquisaGoogle('robson', teste)
console.log('2. fim do código')