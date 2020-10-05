# 21-09 - Aula 01 - Tecnosinos

Bate-papo sobre várias coisas


# 22-09 - Aula 02 - Boas vindas

Bate-papo sobre várias coisas


# 23-09 - Aula 03 - Uma rede social pra chamar de minha

## Apresentação

- Apresentação da proposta
- Apresentação do cronograma de aulas
- Alinhamento de expectativas sobre o curso
- Temas de casa e projetos de final de semana
- O Projeto Final

## Ferramentas e Processo

- Quem tem computador em casa
- Vamos usar o discord - [invite](https://discord.gg/Hybuj4u)
- Só haverá espaço para dúvidas enviadas até às 11h59

## Git e Github

- O Github
- Criação de conta
- Criação de repositório
- O Git
- Comandos
  - git clone
  - git status
  - git add
  - git commit
  - git push
  - git pull

## Tema de Casa de Brinde

- Entrar no discord
- Colocar seu github no canal de boas vindas*
- Seguir todos os colegas no Github

> \* é imprescindível seguir o seguinte padrão (inclusive traços e espaços): email - nome completo - link do github
>
> Ex: fulano@email.com - Fulano da Silva - https://www.github.com/fulanosilva


# 24-09 - Aula 04 - Começando pelo começo

## Conceitos

- Desenvolvimento Web
- Frontend e Backend
- Linguagens de Programação
- HTML + CSS + Javascript
- React + Angular + Vue
- React Native + Flutter

## HTML

- Objetivo: estruturar
- Ignorar aparência
- As tags básicas
  - html
  - head
  - body
  - title
  - p
  - h1 até h6
  - span
- As tags estruturais
  - div
  - nav
  - header
  - footer
  - main
  - section
  - aside
- As tags de listas
  - ul
  - ol
  - li

## Projeto #01

**Escopo**: Criar um projeto no Github que consiste em uma página HTML com seus dados profissionais, como uma espécie de currículo virtual. Deverá constar uma seção com nome, data de nascimento, cidade, telefone e email. Outra seção com objetivo profissional e pequena biografia. Deverá ter uma seção com formação, cursos e afins. Inlcuir os links de suas redes sociais (não esquecer do github).

**Data de Entrega**: 27/09 às 23h59

**Forma de Entrega**: Branch `projeto-01` no repositório `curriculo-virtual` (exatamente assim)

# 28-09 - Aula 05 - É preciso ter estrutura

O início do desenvolvimento web se dá pelo HTML, que é o código utilizado para estruturar as informações do nosso site de forma semântica, dando sentido para as coisas e facilitando a compreensão do conteúdo, tanto para os leitores quanto para os robôs de indexação. Quanto melhor for a estrutura do seu site, melhor pontuado ele será pelos mecanismos de buscas e maior será a relevância do conteúdo. Um código HTML mais básico começa com a seguinte estrutura:

```html
<html>
  <head>
    <title>título</title>
  </head>

  <body>
  </body>
</html>
```

Todo e qualquer texto ou conteúdo sempre estará entre duas `tags`, que é como chamamos os elementos de marcação do HTML. Cada tag tem uma função e indica algo sobre o conteúdo que está dentro dela. A primeia tag sempre será `<html>` e delimita o conteúdo total do site e não pode se repetir. Repare que todas as tags sempre são "fechadas" com o mesmo nome, porém acrescidos de uma barra: `<\html>`. Outras tags que não se repetem são a `<head>`, que delimita o trecho de cabeçalho de metadados do site, e a `<body>` que delimita o conteúdo do site. Os metadados consistem em dados auxiliares que não serão visíveis para o usuário, mas que concedem informações técnicas sobre o site para ser usado em análise de robôs de indexação, entre outras funcionalidades. Uma dessas informações é o `<title>` que também só aparece uma vez e indica o título do site, aquele que aparece na aba do navegador.

Além dessas tags, temos algumas tags estruturais do conteúdo, logo, são usadas dentro da tag `body`:

* [\<aside\>\<\/aside\>](https://www.w3schools.com/tags/tag_aside.asp) - define uma seção auxiliar do site, geralmente nas laterais que não são o foco de atenção do usuário \*
* [\<main\>\<\/main\>](https://www.w3schools.com/tags/tag_main.asp) - define o conteúdo principal do site, tudo que for de fato mais relevante para o usuário \*
* [\<h1\>\<\/h1\>](https://www.w3schools.com/tags/tag_h1.asp) - título de maior importância dentro do site. Pode se repetir, mas não é aconselhado. Varia de 1 a 6. \*
* [\<h6\>\<\/h6\>](https://www.w3schools.com/tags/tag_h6.asp) - título de menor importância dentro do site. Podem ter vários, assim como os outros de 2 a 6.
* [\<p\>\<\/p\>](https://www.w3schools.com/tags/tag_p.asp) - trecho que delimita um texto ou parágrafo.
* [\<span\>\<\/span\>](https://www.w3schools.com/tags/tag_span.asp) - não tem uma função semântica, serve basicamente para separar textos para aplicar configurações em uma parte específica
* [\<section\>\<\/section\>](https://www.w3schools.com/tags/tag_section.asp) - uma seção ou parte do site. Pode se repetir várias vez, repartindo o site e organizando-o
* [\<nav\>\<\/nav\>](https://www.w3schools.com/tags/tag_nav.asp) - seção do site destinada a navegação do usuário, ou seja, um bloco de menu e/ou links \*
* [\<header\>\<\/header\>](https://www.w3schools.com/tags/tag_header.asp) - é o título de uma seção ou artigo e serve para agrupar elementos que juntos representam um título
* [\<article\>\<\/article\>](https://www.w3schools.com/tags/tag_article.asp) - um artigo de uma seção (post de um blog), ou seja, possui um contexto independente do restando do conteúdo
* [\<footer\>\<\/footer\>](https://www.w3schools.com/tags/tag_footer.asp) - rodapé do site ou de uma seção agrupando os elementos que fazem parte dessa finalização de conteúdo
* [\<ul\>\<\/ul\>](https://www.w3schools.com/tags/tag_ul.asp) - uma lista não ordenada, ou seja, não numerada
* [\<ol\>\<\/ol\>](https://www.w3schools.com/tags/tag_ol.asp) - uma lista ordenada, ou seja, os itens listados têm um sentido de estarem na ordem em que estão
* [\<li\>\<\/li\>](https://www.w3schools.com/tags/tag_li.asp) - um item de uma lista ordenada ou não. Dentro de uma lista, o primeiro nível de elemento precisa ser um `li`
* [\<dl\>\<\/dl\>](https://www.w3schools.com/tags/tag_dl.asp) - lista descritiva. Uma lista em que cada item é composto por um título e uma descrição
* [\<dt\>\<\/dt\>](https://www.w3schools.com/tags/tag_dt.asp) - título de uma lista descritiva
* [\<dd\>\<\/dd\>](https://www.w3schools.com/tags/tag_dd.asp) - descrição de uma lista descritiva
* [\<div\>\<\/div\>](https://www.w3schools.com/tags/tag_div.asp) - divisão não semântica de um bloco de conteúdo. Serve para agrupar blocos de conteúdo sem uma função semântica
* [\<a\>\<\/a\>](https://www.w3schools.com/tags/tag_a.asp) - link para outra página, seja ela interna, do mesmo site, ou qualquer outro site da internet. \*\*

> \* Geralmente essas tags só aparecem uma única vez no site, pois representam algo muito importante.
> \*\* Para linkar um site externo, utilizar o caminho absoluto ou completo (com `https://` no início). Caso contrário será tratado como um link relativo, para outra página do mesmo site (como `/contato.html`). Se utilizado com `#` na frente, apontará para um elemento na mesma página atual (como `#codigo-do-elemento`).

Veja um [exemplo de utilização dessas tags]("aulas/aula-04/exemplo-estrutura.html").

Mas não para por aqui. Existem diversas outras tags, para diversas outras funções, como criar formulários com campos de texto, seleções, botões, enfim. Formulários são utilizados quando queremos interagir com o usuário e onter algumas informações dele, como nome, e-mail, senha... Vamos a alguns exemplos:

* [\<form\>\<\/form\>](https://www.w3schools.com/tags/tag_form.asp) - define uma seção de formulário com tags para interagir com o usuário
* [\<input\>\<\/input\>](https://www.w3schools.com/tags/tag_input.asp) - define um campo para o usuário inserir alguma informação. Pode ser um texto, data, cor, arquivo, telefone, enfim. \*
* [\<textarea\>\<\/textarea\>](https://www.w3schools.com/tags/tag_textarea.asp) - define um campo de texto multilinhas, ou seja, para digitar um texto estenso. \* \*\*
* [\<button\>\<\/button\>](https://www.w3schools.com/tags/tag_button.asp) - define um botão que executa alguma função no site, como enviar os dados do formulário para o backend.
* [\<select\>\<\/select\>](https://www.w3schools.com/tags/tag_select.asp) - define um campo de seleção com várias opções pré-definidas para o usuário escolher.
* [\<option\>\<\/option\>](https://www.w3schools.com/tags/tag_option.asp) - define cada uma das opções de um select.
* [\<label\>\<\/label\>](https://www.w3schools.com/tags/tag_label.asp) - define o texto explicativo sobre um campo do formulário, exemplo `<label>nome:</label>`.
* [\<fieldset\>\<\/fieldset\>](https://www.w3schools.com/tags/tag_fieldset.asp) - agrupa um conjunto de elementos de um form que fazem sentido isolados.
* [\<legend\>\<\/legend\>](https://www.w3schools.com/tags/tag_legend.asp) - define uma descrição para o fieldset, ou seja, um título para uma seção de um form.

> \* input, textarea e qualquer outra tag que não tenha conteúdo dentro, deve ser utilizada assim: `<tag />`, `<input />`, `<textarea />`, enfim.
> \*\* existem vários tipos de input como pode ser visto na documentação. O tipo é definido assim `<input type="password" />`. [Teste](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_input_test) algumas opções.

Veja um [exemplo de utilização dessas tags]("aulas/aula-04/exemplo-formulario.html").

Como deve ter observado, tanto os links e os inputs nos obrigam a informar alguns detalhes sobre o uso deles. O link precisa de uma url e o input precisa de um tipo. Essas definições são feitas dentro da `tag de abertura` do elemento e são chamados de `atributos`. Existem muitos atributos diferentes que podem ser usados para customizar o funcionamento dos elementos e/ou customizá-los. Ao longo das aulas vamos descobrindo muitos outros.

Alguns atributos importantes agora são o `id` e o `for`. O `id` serve para dar um código **único** para esse elemento na tela para que ele possa ser referenciado em outro elemento. Um id nunca pode se repetir dentro de um mesmo site, então é preciso ter muita atenção (e padrão) para defini-los. Por exemplo, em um formulário, um campo de texto pode ter um id "nome" e no mesmo formulário, um `label` indicar que se refere a esse campo através do atributo `for`. Exemplo:

```html
<form>
  <label for="nome">Nome:</label>
  <input type="text" id="nome" />
</form>
```

> Repare que, em código, diferenciamos maiúsculas e minúsculas, ou seja, "Nome" não é o mesmo que "nome". Chamamos isso de _"case sensitive"_.

## Tema de Casa

Achar pelo menos três exemplos na internet de formulários html e apresentar no canal `tecno-research` com os elementos encontrados. Não pode repetir o dos colegas.

# 29-09 - Aula 06 - Mais um pouco de tags

Para ver todas as tags disponíveis no HTML basta visitar a documentação, então não vamos listar todas. No entanto ainda existem alguns elementos que merecem a nossa atenção: as tabelas, imagens, vídeos e como isso funciona tudo junto.

As tabelas são muito simples e consitem em 3 seções: cabeçalho, corpo e rodapé. Existem tags específicas para trabalhar com tabelas que não devem ser utilizadas fora delas. Vejamos:

## Tabelas

* [\<table\>\<\/table\>](https://www.w3schools.com/tags/tag_table.asp) - define uma nova tabela no site. Podem existir quantas quiser, inclusive uma dentro da outra.
* [\<thead\>\<\/thead\>](https://www.w3schools.com/tags/tag_thead.asp) - define o trecho referente ao cabeçalho de uma tabela, ou seja, o indetificador dos dados.
* [\<tbody\>\<\/tbody\>](https://www.w3schools.com/tags/tag_tbody.asp) - define o trecho referente ao corpo de uma tabela, ou seja, seu conteúdo.
* [\<tfoot\>\<\/tfoot\>](https://www.w3schools.com/tags/tag_tfoot.asp) - define o trecho referente ao rodapé de uma tabela, ou seja, um conteúdo auxiliar.
* [\<tr\>\<\/tr\>](https://www.w3schools.com/tags/tag_tr.asp) - uma linha de uma tabela, ou de um cabeçalho, ou de um corpo, ou de um rodapé.
* [\<th\>\<\/th\>](https://www.w3schools.com/tags/tag_th.asp) - define uma célula (ou coluna) de uma tabela representando um identificador de dados.
* [\<td\>\<\/td\>](https://www.w3schools.com/tags/tag_td.asp) - define uma célula (ou coluna) de uma tabela representando o dado a ser apresentado.

> Não é obrigatório que uma tabela tenha `thead`, `tbody`, `tfoot` ou `th`. Essas são tags semânticas. Mas a tabela precisa de linhas e colunas.

Exemplo tabela simples:

```html
<table>
  <tr>
    <th>Nome</th>
    <th>Email</th>
    <th>Github</th>
  </tr>
  
  <tr>
    <td>robsonrosa@outlook.com</td>
    <td>Robson Rosa</td>
    <td><a href="https://github.com/robsonrosa" target="_blank">https://github.com/robsonrosa</a></td>
  </tr>
  <tr>
    <td>juangarciadelima884@gmail.com</td>
    <td>Juan Garcia</td>
    <td><a href="https://github.com/juangarciadelima" target="_blank">https://github.com/juangarciadelima</a></td>
  </tr>
  <tr>
    <td>swordk664@gmail.com</td>
    <td>Nicolas bica</td>
    <td><a href="https://github.com/nicolasbica" target="_blank">https://github.com/nicolasbica</a></td>
  </tr>
  <tr>
    <td>guicn1963@gmail.com</td>
    <td>Guilherme Collet Navossat</td>
    <td><a href="https://github.com/ColletNavossat" target="_blank">https://github.com/ColletNavossat</a></td>
  </tr>
  <tr>
    <td>edsonrgdc18@gmail.com</td>
    <td>Édson Ruan Goulart da Costa</td>
    <td><a href="https://github.com/edsonrgdc" target="_blank">https://github.com/edsonrgdc</a></td>
  </tr>
  <tr>
    <td>viniciusaraujo.vinicius@gmail.com</td>
    <td>Vinicius Felipe de Araujo</td>
    <td><a href="https://github.com/ViniFelip" target="_blank">https://github.com/ViniFelip</a></td>
  </tr>
</table>
```

Exemplo de uma tabela completa:

```html
<table>
  <thead>
    <tr>
      <th>Nome</th>
      <th>Email</th>
      <th>Github</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td>robsonrosa@outlook.com</td>
      <td>Robson Rosa</td>
      <td><a href="https://github.com/robsonrosa" target="_blank">https://github.com/robsonrosa</a></td>
    </tr>
    <tr>
      <td>juangarciadelima884@gmail.com</td>
      <td>Juan Garcia</td>
      <td><a href="https://github.com/juangarciadelima" target="_blank">https://github.com/juangarciadelima</a></td>
    </tr>
    <tr>
      <td>swordk664@gmail.com</td>
      <td>Nicolas bica</td>
      <td><a href="https://github.com/nicolasbica" target="_blank">https://github.com/nicolasbica</a></td>
    </tr>
    <tr>
      <td>guicn1963@gmail.com</td>
      <td>Guilherme Collet Navossat</td>
      <td><a href="https://github.com/ColletNavossat" target="_blank">https://github.com/ColletNavossat</a></td>
    </tr>
    <tr>
      <td>edsonrgdc18@gmail.com</td>
      <td>Édson Ruan Goulart da Costa</td>
      <td><a href="https://github.com/edsonrgdc" target="_blank">https://github.com/edsonrgdc</a></td>
    </tr>
    <tr>
      <td>viniciusaraujo.vinicius@gmail.com</td>
      <td>Vinicius Felipe de Araujo</td>
      <td><a href="https://github.com/ViniFelip" target="_blank">https://github.com/ViniFelip</a></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Essa lista deveria ter 8 nomes.</td>
    </tr>
  </tfoot>
</table>
```

> Repare que existe um `atributo` novo, o `colspan` que pode ser usado em `td` ou `th` e define a quantidade de colunas que essa célula irá utilizar (como um mesclar).

## Imagens

Nosso site ainda está muito preto e branco. Podemos colocar um pouco mais de cor e movimento com imagens, vídeos e áudios. Como deve ter percebido, existem imagens em praticamente todos os sites da internet, então é um elemento muito utilizado.

```html
<img
  src="https://avatars3.githubusercontent.com/u/71736356?s=400&u=d3e9d5052a31754b13ccdd98a2961a2cdcb26eb0&v=4"
  alt="Logotipo da escola Tecno Start" width="500" height="500">
```

![Imagem](https://avatars3.githubusercontent.com/u/71736356?s=400&u=d3e9d5052a31754b13ccdd98a2961a2cdcb26eb0&v=4)

* [\<img\>](https://www.w3schools.com/tags/tag_img.asp) - define uma imagem. Repare que essa tag não possui fechamento. Ela exige que informemos ao menos `src` que é o caminho para o arquivo da imagem. Como nos links, podemos usar caminho absoluto ou relativo. O atributo `alt`, apesar de não ser obrigatório, é altamente recomendado, pois é o texto que será utilizado para identificar do que se trata essa imagem (ajudando na pesquisa de imagem dos buscadores) além de ser o texto utilizado nos leitores de tela (softwares utilizados por pessoas com deficiência visual). Os atributos `width` e `height` definem a largura e altura da imagem, respectivamente.

## Vídeos

Os vídeos são cada vez mais comum em sites. Um vídeo pode ser adicionado a partir de uma fonte de outro site, como o Youtube, usando a função `embedded` (incorporado), como pode ser visto [nesse tutorial](https://support.google.com/youtube/answer/57741?hl=pt-BR&ref_topic=9257102). Além dessa forma, é possível incorporar seu próprio vídeo se ele estiver disponível no servidor onde o site se encontra (ou na sua máquina se estiver executando na própria máquina). Nesse caso utilizamos a tag `video`.

* [\<video\>\<\/video\>](https://www.w3schools.com/tags/tag_video.asp) - elemento que define um conteúdo de vídeo do seu site
* [\<source\>](https://www.w3schools.com/tags/tag_source.asp) - elemento que define o caminho de origem da mídia utilizada. Um vídeo pode ter vários `source`.

```html
<video width="500" height="500" controls>
  <source src="meu-video.mp4" type="video/mp4">
  <source src="meu-video.ogg" type="video/ogg">
  Texto exibido se o navegador não conseguir reproduzir nenhum dos vídeos
</video>
```

> Novo atributo encontrados: `controls` define se será exibido o painel de controle do vídeo (volume e afins).

## Áudio

* [\<video\>\<\/video\>](https://www.w3schools.com/tags/tag_video.asp) - elemento que define um conteúdo de vídeo do seu site
* [\<source\>](https://www.w3schools.com/tags/tag_source.asp) - elemento que define o caminho de origem da mídia utilizada. Um vídeo pode ter vários `source`.

```html
<audio width="500" height="500" controls>
  <source src="meu-audio.mp3" type="audio/mpeg">
  <source src="meu-audio.ogg" type="audio/ogg">
  Texto exibido se o navegador não conseguir reproduzir nenhum dos vídeos
</audio>
```

> Assim como no vídeo, o atributo `controls` define se será exibido o painel de controle do áudio.

## Developer Tools

F12 - DevTools - Ferramentas para desenvolvedores.

* Elements: Estrutura do HTML - visão dos elementos da página atual (usaremos muito essa durante todo o curso)
* Console: Mensagens de erros, avisos, informações para desenvolvedores e painel para testes (essa usaremos muito a partir da aula 10)
* Sources: Acesso a todo o código utilizado na página atual (usaremos pouco, é mais útil em projetos grandes)
* Network: Tráfego de rede, análises estatísticas de rede, simulação de velocidade, tempo de carregamento (usaremos muito essa no final do curso)
* Performance: análise de performance, tempo de renderização, animações e recursos mais avançados (não usaremos - muito avançado)
* Memory: análise de uso de memória e problemas de desempenho (não usaremos - muito avançado)
* Application: dados da aplicação armazenados na máquina do usuário (usaremos a partir da aula 24)
* Security: análise de certificados de segurança (não usaremos - muito avançado)
* Lighthouse: análise de uso correto de boas práticas de desenvolvimento, gerando uma nota de qualidade para o site (usaremos apenas nas primeiras aulas)

# 30-09 - Aula 07 - Colocando um pouco de cor

É possível customizar os elementos para parecerem como a gente quiser. Sério. Qualquer coisa. Basta adicionar estilo. Então podemos mudar o tamanho do texto, a fonte, a cor, o espaçamento, a posição, a altura, a largura, a borda, a margem, a animação, o ícone, enfim, mudar a aparência de qualquer coisa no nosso site.

## Estilo inline

Todo elemento HTML pode receber o atributo `style` que permite customizar esse elemento adicionando propriedades de estilo, sendo assim, cada elemento pode parecer diferente um do outro. Essas propriedades são definidas em um padrão chamado `css`. E existem inúmeras propriedades disponíveis para customização, mas nem todas se aplicam a todos os elementos, por exemplo, não podemos mudar a cor de uma `div` pois ela é "invisível", mas podemos mudar a cor de fundo dessa div. Podemos começar com algumas para brincar:

* color - altera a cor do elemento
* background-color - altera a cor de fundo do elemento
* border - define como se comporta a borda do elemento
* padding - define o espaçamento entre a borda e o elemento
* margin - define o espaçamento entre a borda e os elementos adjacentes
* display - define a forma de exibição desse elemento
* position - define a forma de posicionamento desse elemento
* width - define a largura do elemento
* height - define a altura do elemento
* font-size - define o tamanho de fonte de um texto
* font-family - define os tipos de fonte de um texto
* font-weight - define a espessura da fonte de um texto

Exemplo:

```html
<div style="background-color: #F4C3A2;">
  <div style="background-color: #A2C3F4; margin: 30px; padding: 10px; border: 2px solid #000000">
    <h1 style="color: black; font-size: 12px">Título</h1>
  </div>

  <div style="background-color: #A2C3F4; margin: 30px; padding: 10px; border: 2px solid #000000">
    <p style="color: red; font-size: 34px">texto normal</p>
  </div>
</div>
```

Enfim, existe uma infinidade de opções e todas podem ser consultadas na [documentação](https://developer.mozilla.org/pt-br/docs/web/css) ou no [w3schools](https://www.w3schools.com/css/default.asp).


## Classes

Na grande maioria dos casos, queremos que nosso site siga um certo padrão visual, ou seja, todos os título têm a mesma aparência, todas as imagens têm a mesma borda, todas as seções com os mesmos espaçamentos, enfim, tudo para criar um aspecto organizado e fluído para o usuário. Por isso, para não precisar aplicar um `style` e repeti-lo em todos os elementos semelhantes, podemos usar um outro atributo, o `class` que define uma classe de elementos. As classes de elementos servem para aplicar estilos iguais para um grupo de elementos quaisquer a fim de criar um padrão visual. Exemplo:

```html
<div class="bloco-principal">
  <div class="bloco-auxiliar">
    <h1 class="titulo">Título</h1>
  </div>

  <div class="bloco-auxiliar">
    <p class="texto-padrao">texto normal</p>
  </div>
</div>
```

## Aplicando Estilos

Para criar estilos para serem aplicados em vários elementos precisamos adicionar uma nova tag na seção `head` do nosso html. Dentro da tag `style` iremos definir o CSS aplicado aos elementos, classes de elemetos e afins.

```html
<html>
  <head>
    <title>Título</title>

    <style>
      ...
    </style>
  </head>

  <body>
    ...
  </body>
</html>
```

Nessa seção de style podemos criar nossas classes de estilos, estilos individuais ou ainda estilos por tags. Todo o estilo aplicado a um elemento será considerado para ele e para seus elementos filhos até que outro estilo mais específico o substitua, ou seja, se alguma outra regra CSS for mais importante. Calma! Com exemplos fica mais fácil entender. Mas antes vamos entender a anatomia de um comando CSS:

```
SELETOR {
  PROPRIEDADE: VALOR;
}
```

Ou seja, eu uso um `seletor` para determinar quais elementos serão afetados, então escolho quais `propriedades` alterar e qual o `valor` de cada uma delas. Entendido isso, vamos a alguns exemplos.

### Seletor por tag

Quando o seletor é uma tag (sem nenhum caractere antes ou depois), o estilo será aplicados a todos os elementos daquela tag. No caso a seguir, todos os parágrafos do site ficarão vermlhos:

```css
<style>
  p {
    color: red;
  }
</style>
```

### Seletor por id

Quando o seletor é precedido de um `#` significa que estamos aplicando esse estilo a um elemento específico que tenha esse id. No exemplo a seguir, o estilo será aplicado a todos os elementos do site que possuam o atributo id igual a _"secao-dados-pessoais"_ (exemplo `<div id="secao-dados-pessoais"`). É esperado que não exista mais de um elemento com o mesmo id, mas se ocorrer, será aplicado a todos.

```css
<style>
  #secao-dados-pessoais {
    margin-top: 10px;
  }
</style>
```

### Seletor por classe

Quando o seletor é precedido de um `.` significa que estamos aplicando esse estilo a uma classe de elementos que possuam esse valor no atributo `class`. No exemplo a seguir, o estilo será aplicado a todos os elementos do site que possuam o atributo class igual a _"bloco-auxiliar"_ (exemplo `<div class="bloco-auxiliar"`).

```css
<style>
  .bloco-auxiliar {
    padding: 15px;
  }
</style>
```

### Seletor por atributo

Quando o seletor utilizado está entre colchetes significa que estamos aplicando esse estilo a todos os elementos que possuam o atributo utilizado entre colchetes. No exemplo a seguir, o estilo será aplicado a todos os elementos do site que possuam o atributo type igual a _"text"_ (exemplo `<input type="text"`).

```css
<style>
  [type="text"] {
    font-size: 11px;
  }
</style>
```

### Combinações de seletores

As vezes apenas um seletor não é o suficiente quando nosso site começa a ficar maior e precisamos aplicar regras específicas a pequenas porções do mesmo. Nesses casos precisamos agrupar ou combinar alguns seletores a fim de aplicar uma regra somente a um ponto específico do site. Vejamos o exemplo:

```html
<body>
  <section class="secao-principal">
    <header>Título Principal</header>
    <p>Parágrafo principal</p>
  </section>

  <section class="secao-auxiliar">
    <header>Título Auxiliar 1</header>
    <p>Parágrafo auxiliar 1</p>
  </section>
  
  <section class="secao-auxiliar">
    <header>Título Auxiliar 2</header>
    <p>Parágrafo auxiliar 2</p>
  </section>
</body>
```

Como podemos, nesse exemplo, aplicar um estilo específico para todos os parágrafos da seção auxiliar sem afetar os parágrafos da seção principal? Poderíamos colocar uma classe em todos os parágrados de dentro da seção auxiliar, mas isso seria bem trabalhoso dependendo do tamanho do site, além disso, ficaria redundante afirmar que um parágrafo dentro da seção auxiliar é auxiliar. Nesse caso, aplicamos uma regra apenas para os elementos dentro de outro elemento identificado (em cascata):

```css
<style>
  .secao-auxiliar p {
    font-size: 10px;
  }
</style>
```

Quando separamos um seletor de outro com um **espaço**, estamos indicando que a regra será aplicada aos elementos se eles aparecerem nessa ordem na organização do seu HTML. No exemplo, todos os parágrafos que estiverem dentro de um elemento com class *"secao-auxiliar"* serão considerados, independentes do nível interno que estejam. Mas e se quiséssemos ser ainda mais específicos? Aplicar uma cor diferente apenas nos parágrafos com classe *"destaque"* que estejam dentro de um elemento com classe *"secao-auxiliar"*? 

```html
<html>
  <head>
    <style>
        .secao-principal p.destaque {
          color: red;
        }
        .secao-auxiliar p.destaque {
          color: orange;
        }
    </style>
  </head>
  <body>
    <section class="secao-principal">
      <header>Título Principal</header>
      <p>Parágrafo principal</p>
      <p class="destaque">Parágrafo principal destacado</p>
    </section>

    <section class="secao-auxiliar">
      <header>Título Auxiliar 1</header>
      <p>Parágrafo auxiliar 1</p>
    </section>
    
    <section class="secao-auxiliar">
      <header>Título Auxiliar 2</header>
      <p>Parágrafo auxiliar 2</p>
      <p>Parágrafo auxiliar 3</p>
      <p class="destaque">Parágrafo auxiliar destacado</p>
    </section>
  </body>
</html>
```

Nesse cenário, o "Parágrafo principal destacado" será vermelho e o "Parágrafo auxiliar destacado" será laranja. Isso por que ao juntarmos dois seletores **sem** espaço, estamos tornando-o mais específico, ou seja, exigindo que os dois seletores sejam aplicados ao mesmo elemento. Podemos fazer isso com classes também. No exemplo a seguir, a regra será aplicada somente aos elementos que possuírem as classes "secao", "artigo" e "noticia" ao mesmo tempo. 

```css
<style>
  .secao.artigo.noticia {
    margin: 10px;
  }
</style>
```

> Para aplicar mais de uma classe no mesmo elemento, basta separá-las com espaço: `<div class="secao artigo noticia">...</div>`

### Combinando tudo

No exemplo a seguir, estamos aplicando um estilo somente aos campos do tipo telefone que possuam a classe "destaque" e que estejam dentro de um formulário com a classe "contato".

```html
<html>
  <head>
    <style>
        form.contato input[type="phone"].destaque {
          padding: 15px;
        }
    </style>
  </head>
  <body>
    <form class="contato">
      <label for="telefone">Telefone</label>
      <input id="telefone" type="phone" class="destaque" />
    </form>
  </body>
</html>
```

## Prioridade

O que acontece se um mesmo elemento recebe regras CSS de dois seletores e essas regras divergem entre si? Use como exemplo o seguinte cenário:

```html
<html>
  <head>
    <title>Título</title>

    <style>
      p { 
        font-size: 11px;
        color: blue;
      }

      #destaque {
        color: red;
      }
    </style>
  </head>

  <body>
    <p>Parágrafo 1</p>
    <p>Parágrafo 2</p>
    <p id="destaque">Parágrafo 3</p>
  </body>
</html>
```

Nesse cenário, qual será a cor do "Parágrafo 3"? Azul ou Vermelho? Para entender esse comportamento precisamos saber que o CSS possui uma regra de precedência de importância das regras CSS aplicadas pelos seletores. Por isso chamamos de CSS (Cascading Style Sheet). Essas regras de prioridade de estilo não são muito simples, mas podemos resumir da seguinte maneira:

1. Declarações com `!important`
1. Estilos inline (utilizando o atributo style no próprio elemento)
1. Seletor por id
1. Seletor por classe e atributo
1. Seletor por tag
1. Estilo padrão do navegador

Com isso em mente podemos deduzir que no exemplo anterior, o terceiro parágrafo terá a cor **vermelha**. Mas e o que é esse `!important`? Seria melhor não saber, mas precisamos falar dele. Esse código serve justamente para marcar uma regra como super importante e ignorar as regras de precedência do CSS. Geralmente usamos isso quando perdemos completamente o controle de como estilizar o site, portanto é um mal sinal e não devemos utilizá-lo. Mas se quiser utilizar, basta adicioná-lo após o valor da propriedade:

```css
<style>
  #secao-principal {
    font-weight: bold !important;
  }
</style>
```

## Especificidade

Mas se não devemos usar o `!important`, como devemos proceder quando as regras são conflitantes e as regras de prioridade não me ajudam? Para isso podemos usar a regra de especificidade do CSS, ou seja, quanto mais específica for uma regra, mais valor ela terá.

1. Estilo inline: 1000 pontos
1. Seletor por id: 100 pontos
1. Seletor por classe ou atributo: 10 pontos
1. Seletor por tag: 1 ponto

Com essa regra em mente, fica fácil perceber que o seletor `.secao.artigo` tem menos importância que o seletor `#auxiliar`. Da mesma forma, o seletor `#auxiliar.secao.artigo` tem mais prioridade que os dois anteriores. Com isso, podemos aplicar mais regras nos nossos seletores para ficarem mais específicos e, portanto, ganharem prioridade da ordem de precedência do CSS.

## Tema de Casa

Aplicar algum estilo no projeto `curriculo-virtual`. Precisa aplicar pelo menos 1 seletor de cada tipo e aplicar o estilo de forma consistente.

# 01-10 - Aula 08 - Hora de brincar de Lego

Ok! Tudo colorido, tudo com espaçamentos, estilo. Mas como eu posiciono as coisas na tela como eu quiser? Para isso vamos precisar entender duas propriedades muito importantes no CSS: `display` e `position`.

##  Position

Primeiramente... o [link de referência](https://www.w3schools.com/css/css_positioning.asp). Existem 5 formas de posicionar os elementos na página e veremos um pouco de cada uma.

* static - é a básica, como funciona normalmente. Cada elemento funciona como uma caixa que vai encaixando do lado direito do elemento anterior até não caber mais horizontalmente e "cair" para a próxima linha. Alguns elementos, como a `div` ocupam toda extensão horizontal, logo sempre causam essa "quebra de linha".
* relative - define que o elemento irá ocupar uma posição diferente da normal, mas relativa a ela. Nesse caso, será necessário definir uma ou mais propriedades de referência de posicionamento: `top`, `right`, `bottom` e `left`. O valor será a distância que o elemento ficará de acordo com a propriedade escolhida.
* fixed - posição relativa ao viewport, ou seja, a porção visível da tela. Também depende das propriedades de referência de posicionamento.
* absolute - define que o elemento será deslocado como o "relative" porém em relação ao próximo elemento antecessor que possua algum posicionamento, ou seja, o próximo elemento que não seja "static".
* sticky - elementos com position sticky são posicionados dependendo da posição do scroll da página, alternando entre relative e fixed. Ou seja, funcionarão como relative até que um gatilho seja ativado, esse gatilho é a distância entre o elemento e o viewport e pode ser configurado com as propriedades de referência de posicionamento.

## Display

Aqui complica. O [link de referência](https://www.w3schools.com/css/css_display_visibility.asp) mais uma vez será nosso guia. Existem alguns elementos que são naturalmente "block-level elements", ou seja, ocupam toda extensão horizontal da página, como a `div` e o `p`. Existem também os "inline elements" que ocupam apenas o espaço que o seu conteúdo precisa e vão crescendo conforme o conteúdo cresce, é o caso do `span` e do `a`.

* block - ocupam toda extensão horizontal da página
* inline - ocupam apenas o espaço que o seu conteúdo precisa - ignora width e height
* inline-block - ocupam apenas o espaço que o seu conteúdo precisa - considera width e height
* none - não são exibidos e não ocupam espaço na página
* flex - funciona como o block, mas nos permite flexibilizar o posicionamento dos elementos filhos
* grid - funciona como o block, mas nos permite posicionar os elementos filhos como uma grade
* inline-flex - funciona como o inline, mas nos permite flexibilizar o posicionamento dos elementos filhos
* inline-grid - funciona como o inline, mas nos permite posicionar os elementos filhos como uma grade

### Flexbox

[Guia completo de flexbox](https://origamid.com/projetos/flexbox-guia-completo/)

#### Flex Container

##### display: flex
Define o elemento como um flex container, tornando os seus filhos flex-itens.

##### flex-direction
Define a direção dos flex itens. Por padrão ele é `row` (linha), ou seja, cada elemento filho um ao lado do outro. Utilizamos `column` quando queremos que todos os elementos filhos ocupem toda extensão horizontal, mas queremos controlar a altura que cada um ocupa.

##### flex-wrap
Define se os itens devem quebrar ou não a linha. Por padrão eles não quebram linha, isso faz com que os flex itens sejam compactados além do limite do conteúdo.

##### justify-content
Alinha os itens flex no container de acordo com a direção. A propriedade só funciona se os itens atuais não ocuparem todo o container.

##### align-items
O align-items alinha os flex itens de acordo com o eixo do container (alinhamento vertical com row ou horizontal com column). O alinhamento é diferente para quando os itens estão em colunas ou linhas.

##### align-content
Alinha as linhas do container em relação ao eixo vertical. A propriedade só funciona se existir mais de uma linha de flex-itens. Para isso o flex-wrap precisa ser wrap.

#### Flex Item

##### flex-grow
Define a habilidade de um flex item crescer. Por padrão o valor é zero, assim os flex itens ocupam um tamanho máximo relacionado o conteúdo interno deles ou ao width definido.

##### flex-basis
Indica o tamanho inicial do flex item antes da distribuição do espaço restante.

##### flex-shrink
Define a capacidade de redução de tamanho do item.

##### flex
Atalho para as propriedades flex-grow, flex-shrink e flex-basis. Geralmente você verá a propriedade flex nos flex itens ao invés de cada um dos valores separados.

#### order
Modifica a ordem dos flex itens. Sempre do menor para o maior, assim order: 1, aparece na frente de order: 5.

## Projeto #02

**Escopo**: Adicionar, no projeto `curriculo-virtual`, uma foto e um vídeo de apresentação (use a criatividade). Estilizar o projeto para ficar bem apresentável (pesquise referências). Adicionar uma seção com cards de projetos desenvolvidos (pode ser qualquer coisa, inclusive fictício). Deve aplicar os conceitos de flexbox. Criar um espaço com um formulário de contato contendo nome, data de nascimento, assunto (opções) e uma mensagem com botão para enviar (o botão não precisa ter função agora).

**Data de Entrega**: 04/10 às 23h59

**Forma de Entrega**: Branch `projeto-02` no repositório `curriculo-virtual` (exatamente assim)

# 05-10 - Aula 09 - Respira e vamo de novo

- `git clone` - baixa o código do servidor e cria um link entre a máquina (local) e o servidor (remoto). Uso quando quero baixar pra minha máquina, um projeto que eu nunca baixei antes.
- `git pull` - baixa o código do servidor para um repositório existente na minha máquina. É preciso ter feito clone uma vez. Atualizar a versão local.
- `git push` - envia as atualizações locais para o servidor remoto. Salvar na nuvem. Publicar as alterações.
- `git status` - verifica se tem alterações locais. **Não** verifica se tem alterações no servidor. Mostra quais alterações e que estágios elas estão.
- `git add .` - reservar as alterações para adicionar em um commit (é um conjunto de alterações).
- `git commit -m "Alteração"` - crio uma nova versão do código com todas as alterações adicionadas com o comando `add`. É necessário dar um nome pra essa alteração, por isso passamos o parâmetro `-m`

# 06-10 - Aula 10 - Luz, camera, ação

## Shut up and show me the code!!

JAVASCRIPT

É uma linguagem de script criada originalmente para ser utilizada junto com HTML e CSS nos navegadores para permitir maior interação entre o site e o usuário, criando mais dinamismo para as páginas. Por um lado, quando utilizamos HTML e CSS nós apenas definimos como os elementos são apresentados em questões semânticas e de estilo, com o javascript podemos adicionar um pouco mais de ação e movimento, afinal, jasvascript é uma linguagem de programação, e como tal, nos permite programar qualquer coisa, criando infinitas possibilidades de interação com o usuário. Podemos, por exemplo, criar popups, efeitos visuais avançados, cálculos, validações, jogos, enfim.

Apesar de ter sido criada inicialmente para ser utilizada apenas no navegador para melhorar a experiência do usuário, atualmente ela também é utilizada em servidores para servir páginas, ou seja, com javascript podemos criar um sistema em um servidor que realiza vários cálculos e devolve uma página com HTML, CSS e javascript para ser renderizado no navegador do usuário. Por isso, dizemos que é uma linguagem de programção client-side e server-side, ou, se preferir, frontend e backend.

> Não confundir com Java, que é uma linguagem de programação backend que não tem nada a ver com javascript e é totalmente diferente.

## Variável

Por ora, variável significa apenas um espaço em memória que guarda alguma informação, para o qual damos um nome para facilitar nosso entendimento e acompanhemento do código, ou seja, damos um nome fácil de lembrar e utilizar para um endereço físico de memória que normalmente seria representado por um endereço hexadecimal de difícil entendimento. Nos próximos capítulos, voltamos nesse assunto com mais detalhes.

## Operadores

### Operador de atribuição
O operador mais básico e que vamos utilizar na maioria das linguagens de programção, é o operador de **atribuição**. Apesar de ser muito simples, ele pode gerar confusão com os operadores de comparação que veremos no capítulo seguinte. Basicamente, uso o operador `=` para atribuir um valor a uma variável. Então eu estou dizendo com esse operador que determinado endereço de memória, representado por uma variável deverá ser preenchido com determinado valor:

```javascript
variavel = valor
```

### Operadores arítméticos

Assim como na matemática, precisamos de [operadores](https://www.w3schools.com/js/js_operators.asp) para realizar diversas operações entre diferentes dados. Os operadores sempre são utilizandos entre os dois operandos (assim como na matemática), com exceção do incremento e decremento.

| Operador | Descrição | Exemplo
|---|---|---|
| + | Soma | 2 + 3 = 5 |
| - | Subtração | 2 - 3 = -1 |
| * | Multiplicação | 2 * 3 = 6 |
| ** | Exponenciação | 2 ** 3 = 8 |
| / | Divisão | 2 / 3 = 0.666666 |
| % | Módulo (Resto da Divisão) | 2 % 3 = 2 |
| ++ | Incremento | 2++ = 3 |
| -- | Decremento | 2-- = 1 |

As regras da aritmética também se aplicam aqui, logo, a ordem de execução dos operadores também. Podemos usar parênteses para dar mais prioridade a uma operação:
```javascript
hipotenusa = (catetoAdjacente ** 2 + catetoOposto ** 2) ** (1 / 2)
```

### Outros operadores de atribuição

Em muitos casos precisamos atribuir um valor a uma variável baseado no valor que ela já tem. Podemos, por exemplo, pegar a variável "idade" (que já possui um valor), adicionar mais 1 e atribuir o resultado de volta à variável "idade":

```javascript
idade = idade + 1
```

E isso acontece muitas vezes para muitos operadores diferentes, por isso foram criados operadores de atribuição associados a um operador aritmético que faz exatamente isso:

```javascript
idade += 1
```

Nesse exemplo, o resultado é o mesmo e pode ser usado para os outros operadores também, sempre acompanhados do operador de atribuição `=`.

| Operador | Exemplo | Igual a |
|---|---|---|
| += |	x += y |	x = x + y |
| -= |	x -= y |	x = x - y |
| *= |	x *= y |	x = x * y |
| /= |	x /= y |	x = x / y |
| %= |	x %= y |	x = x % y |
| **= |	x **= y |	x = x ** y |


> Os operadores funcionam de forma diferente de acordo com os diferentes tipos de dados, mas pra falar sobre isso precisamos entender um pouco sobre esses tipos.

## Tipos de Dados

Javascript é uma linguagem fracamente tipada. O que isso quer dizer? Isso quer dizer que os dados que são armazenados em memória podem ser separados em [tipo de dados](https://www.w3schools.com/js/js_datatypes.asp), mas esses tipos podem ser alterados a qualquer momento (dinâmicos) da execução do código convertendo de um tipo para outro sem quaisquer validações. Isso fica mais claro quando entendermos quais são os tipos de dados existentes em javascript.

### string

Representa uma sequência de caracteres, ou seja, um texto. Podemos representar um string em javascript utilizando aspas simples ou duplas. Exemplo:
```javascript
texto = 'isso é uma string'
mensagem = "isso também é uma string"
```

### number

Representa um número, e pode ser tanto um número inteiro quanto um número real. Utilizamos os próprios algarimos sem aspas para representá-los. Exemplo:
```javascript
numero = 42
outroNumero = 15
```

### boolean
Representa um valor [booleano](https://www.w3schools.com/js/js_booleans.asp) e por isso só pode assumir dois valores possíveis: falso ou verdadeiro, sendo representado pelo texto em inglês sem aspas. Exemplo:
```javascript
gremioCampeao = true
robsonComeCarne = false
```

### function
Representa uma função. Assim como na matemática (`y=f(x)`), uma função possui entradas e saídas (parâmetros e retorno) e executam algum processamento. Para definir uma função precisamos usar uma notação específica informando o nome dela e os parâmetros separados por vírgula:
```javascript
function soma(parametroA, parametroB) { 
  return parametroA + parametroB
}
```

E para executar uma função, basta usar o nome dela seguido de parênteses (`()`), onde entre os parênteses são informados os parâmetros para a execução da mesma separados por vírgula:
```javascript
resultadoSoma = soma(2, 6)
```

### object
Representa um objeto, ou um tipo complexo formado por outros tipos primitivos ou outros objetos, usando a notação de chave e valor para definir o valor de cada propriedade que compreende esse objeto, sempre entre chaves. Podemos entender um objeto como um agrupador de informações, criando uma informação mais complexa. Por exemplo, uma pessoa pode ser identificada pelo seu nome, mas ela possui outras características que podem ser relevantes durante a programação, então agrupamos elas em um objeto que faça sentido no contexto aplicado:
```javascript
pessoa = { 
  nome: 'Robson', 
  idade: 32, 
  vivo: true,
  falar: function (texto) {
    alert(texto)
  }
}
objetoVazio = { }
```

Repare que na definição da função de um objeto não é necessário informar o nome da função após o `function`, pois o nome da propriedade já é o suficiente; e para usar a função, usamos o nome da propriedade:
```javascript
pessoa.falar('Falando alguma coisa!')
```

Da mesma forma, podemos acessar os atributos (ou propriedades) dos objetos, usando o nome do objeto seguido do nome da propriedade separados por ponto (`objeto.propriedade`):
```javascript
pessoa.nome = pessoa.nome + ' Machado Rosa'
novaIdade = pessoa.idade + 1
pessoa.vivo = true
```

### array

É uma coleção de tipos de dados agrupados em forma de lista ("array") e é representado por colchetes (`[]`). Por ser uma linguagem fracamente tipada, um array pode guardar informações de vários tipos diferentes sendo separados por vírgula:
```javascript
array = [
  'banama',
  14,
  'maçã',
  'carregador',
  'celular',
  7,
  21,
  true,
  pessoa
]
```

O tamanho, ou comprimento de um array pode ser obtido pela sua propriedade `lenght`, sendo 9 no exemplo anterior. Para acessar um dado do array, podemos fazê-lo através do índice do dado que queremos acessar, sendo esse índice o número da ordem de inserção no array, começando de zero.
```javascript
fruta1 = array[0]
idade1 = array[1]
fruta2 = array[2]
item1 = array[3]
item2 = array[4]
idade2 = array[5]
idade3 = array[6]
condicao = array[7]
pessoa = array[8]
quantidadeTotal = array.lenght
```

Para adicionar itens a um array existente, utilizamos a função `push`:
```javascript
array.push(outroDado)
```

Existem diversas outras funções disponíveis para trabalhar com [arrays](https://www.w3schools.com/js/js_arrays.asp).

### null e undefined e vazio

Existem ainda dois tipos especiais de dados em javascript que são o `undefined` e o `null`. O `null` indica **explicitamente** que uma variável não possui um valor associado a ela. Já o `undefined` indica **implicitamente** que uma variável não possui valor associado a ela. Já um valor vazio é aquele associado a alguns tipos (number, string, array, object) que indicam que possui um valor válido, mas esse valor representa a ausência de dados. Ora, então qual a diferença real entre os três???? Semântica.

![ilustração da diferença entre valor diferente de vazio, valor vazio, nulo e indefinido utilizando 4 imagens de rolo de papel higiênico, onde no primeiro caso temos um suporte com rolo com papel, no segundo caso temos um suporte com um rolo sem papel, no terceiro caso temos o suporte sem rolo algum e no último caso não existe sequer o suporte, é só a parede.](https://i.stack.imgur.com/T9M2J.png)

Programaticamente isso acaba tendo algumas diferenças, pois ora queremos saber se um valor foi informado, se não foi ou ainda se for informado sem dados. Exemplo:

```javascript
// isso é um comentário

let nomeUsuario 
// nesse momento, "nomeUsuario" é "undefined" pois nada foi definido pra ela

nomeUsuario = null 
// usuário não quis responder, logo, é nulo. Nesse caso null e undefined signifacam coisas diferentes.
// no primeiro caso, eu nem sabia o que o usuário responderia, agora sei que ele preferiu não dar a informação (e isso ainda é uma informação)

nomeUsuario = ''
// usuário optou por responder, mas preencheu um campo vazio, sem caracteres. Nesse caso, sei que o usuário deu uma resposta
// é diferente dos casos anteriores que havia ausência de valor. Nesse caso temos o valor vazio representado por uma string vazia: ''

nomeusuario = 'Robson'
// por último, o usuário escreveu seu nome então temos um caso de "non-zero value", ou seja, não há ausência de valor e o valor não é vazio
// nesse fluxo, esse é o único exemplo de "non-zero value"
```

Por que isso é importante? Em muitos casos vamos fazer conversões de tipos automáticas e precisamos entender que `null` e `undefined`, quando convertidos para `boolean` sempre terão o valor `false`, enquanto os outros dois casos serão convertidos para `true`, ou seja, uma string vazia ainda é uma string, mesmo sem dados, ela possui valor.


## Tipo dinâmico

Podemos usar operadores com vários tipos de dados diferentes, mas precisamos estar atentos ao resultado de acordo com a combinação de tipos de dados. O que acontece se eu usar o operador `+` entre duas `string`? Simples. Elas serão combinadas (`'isso' + 'isso' + 'isso'= 'issoissoisso'`). Mas, por outro lado... `'isso' - 'isso' = NaN`. Como assim? O que é `NaN`? É uma abreviação para *Not a Number*. O que aconteceu é que no javascript não existe nada definido para uma operação de substração entre duas *string*, sendo assim, automaticamente tentou-se uma conversão para *number*, pois com number podemos fazer subtração. Mas ao tentar converter para *number* não foi possível pois `'issoi'` não é um número. Assim sendo, podemos fazer operações de subtração com *string* desde que o texto da string seja possível converter para *number*:
```javascript
'isso' - 'isso' => NaN
'3' - '2' => 1
```

Então, uma operação entre duas *string* pode resultar em um *number* por conta do dinamismo com que o javascript opera os diferentes tipos de dados, portanto, tenha muita **ATENÇÃO** com os operadores e operandos. Vejamos outro exemplo:

```javascript
4 - 4 => 0
4 + 4 => 8
'4' - 4 => 0
'4' + 4 = '44' 
```

**WTF??!!**

Nos exemplos das duas primeiras linhas é muito simples. Operando com dois números apenas funciona como operadores matemáticos. Na terceira linha, como não existe operação de subtração entre *string*, o primeiro `'4'` é automaticamente convertido para um *number* `4`, logo, `4 - 4 = 0`. Mas na quarta linha temos uma adição de *string*, e adição é possível de fazer com texto, chamamos isso de **concatenação**. Nesse caso, como o primeiro operando é uma *string* e é possível fazer uma concatenação, é o segundo operando `4` que é automaticamente convertido para *string* `'4'`, ficando `'4' + '4' = '44'`. Se estamos concatenando textos, apenas colocamos os caracteres um após o outro, formando `'44'`. Da mesma forma... `'texto' + true` resulta em `'textotrue'`. Outras "bizarrices" também podem acontecer, por exemplo, qual é o resultado de `4 + true`? Como que somamos um número com um *booleano*? Se o primeiro operando é capaz de usar o operador, os demais operandos serão convertidos para o mesmo tipo do primeiro operando. Ou seja, `true` será convertido para *number*. E como convertemos um *boolean* pra *number*? Simples, como em binário: `false = 0` e `true = 1`. Assim temos que:

```javascript
4 + true = 5
6 * false = 0
```

## Variáveis

Vimos em um exemplo anterior o uso de `let`. Mas afinal o que é isso? Essa é a forma com que declaramos (ou criamos) variáveis em javascript. Na verdade existem 3 formas de criar uma variável em javascript:

### let
O [let](https://www.w3schools.com/js/js_let.asp) permmite que eu crie uma variável que pode mudar de valor ao longo do tempo. Permite que eu faça atribuições a ela em qualquer parte do código.
```javascript
let valor // valor é undefined
valor = null // valor é null
valor = 0 // valor é zero
valor = 1 // valor é um
```

### const
É igualzinho ao `let`, exceto quando é diferente. Eu uso exatamente da mesma forma para criar variáveis, mas uma vez que eu define um valor para essa "variável", ela não pode mais mudar, ou seja, ela é [constante](https://www.w3schools.com/js/js_const.asp) e não "variável".
```javascript
const valor = 1 // valor é um
valor = 2 // ocorre um erro no javascript pois não posso alterar o valor de uma constante
```

### var (deprecated)
É a forma antiga de criar variáveis. Só existe ainda por questões de retrocompatibilidade. O uso de `var` pode nos causar diversos problemas que só vamos entender quando falarmos de escopo. Por ora, o `var` funciona exatamente como o `let`. Vamos ver diversos exemplos na internet utilizando `var`, mas sempre que formos criar coisas novas, usamos o `let`.

# 07-10 - Aula 11 - E `se` eu precisar de um `laço`?

## Operadores de Comparação

Muitas vezes se faz necessário comparar dois ou mais valores para tomar uma decisão, por exemplo, dar um alerta para o usuário de o valor do carrinho de compras for superior ao saldo atua dele. Para isso precisamos comparar dois dados: o valor total do carrinho e o saldo atual da conta do usuário. O resultado de uma comparação entre dois valores sempre será um resultado booleando, ou seja, true ou false. Existem diversas [comparações](https://www.w3schools.com/js/js_comparisons.asp) que podemos fazer, entre elas:

| Operador | Descrição | Exemplo | Resultado
|---|---|---|---|
| == | igual a | 5 == '5' | true |
| === | valor e tipo são iguas | 5 === '5' | false |
| != | diferente | 5 != '5' | false |
| !== | valor ou tipo diferentes | 5 !== '5' | true
| > | maior que | 5 > 5 | false
| < | less than | 5 < 5 | false
| >= | maior ou igual | 5 >= 5 | true 
| <= | menor ou igual | 5 <= 5 | true

```javascript
condicaoAlerta = valorCarrinho > saldoConta 
```

## Operadores lógicos

Apenas uma comparação de valores às vezes não nos traz o resultado que esperamos, pois as vezes uma regra é mais complexa que apenas uma comparação e passa por uma sequência de comparações. No nosso exemplo do carrinho de compras, podemos adicionar mais uma regra para dar o alerta ao usuário: só vamos alertar o usuário se o valor do carrinho for superior ao saldo e se, também, a data da compra for igual a data de hoje. Como podemos, então, agrupar essas regras para ter um resultado único booleano informando se exibimos o alerta ou não? Operadores lógicos. Esses operadores são baseados na [álgebra booleana](https://brasilescola.uol.com.br/informatica/algebra-booleana.htm#:~:text=Para%20descrever%20os%20circuitos%20que,Boole%20(1815%20%2D%201864).). Vamos simplificar usando apenas 3 operados (com apenas esses três podemos formar qualquer outro - e isso é incrível).

| Operador | Descrição | Exemplo 1 | Resultado 1 | Exemplo 2 | Resultado 2 |
|---|---|---|---|---|---|
| && | Lógica AND (E) | true && true | true | true && false | false | 
| || | Lógica OR (OU) | true || false | true | false || false | false |
| ! | Lógica NOT (NÃO) | !true | false | !false | true |

```javascript
condicaoAlerta = valorCarrinho > saldoConta && dataCompra === hoje
```

> Com o AND, deixamos a regra mais específica, adicionando mais uma condição que PRECISA ser atingida para ser verdadeiro

> Com o OR, deixamos a regra menos específica, adicionando uma outra opção para o atingimento da regra.

## Codicionais

Ok! E o que fazemos com esse resultado booleano obtido e como usamos isso pra realmente exibir ou não o alerta? Precisamos criar condicionais no nosso código que poderão alterar o fluxo de execução do mesmo. O código sempre executa linha a linha, mas pode encontrar desvios que chamamos de condicionais, para executar ou não um trecho do código. O principal deles e o mais utilizado é o [if e o else](https://www.w3schools.com/js/js_if_else.asp). Ele funciona criando um novo escopo ou fluxo de código recebendo por parâmetro uma condição booleana que identifica se aquele escopo deve ou não ser considerado naquele momento:

```javascript
condicaoAlerta = valorCarrinho > saldoConta && dataCompra === hoje

if (condicaoAlerta) {
  alert('Ops! Tu não tem saldo hoje para efetuar essa compra!')
}
```

O `else` (senão), por sua vez, é opcional e cria um trecho de código que deverá ser executado se a condição não for atendida:

```javascript
condicaoAlerta = valorCarrinho > saldoConta && dataCompra === hoje

if (condicaoAlerta) {
  alert('Ops! Tu não tem saldo hoje para efetuar essa compra!')
} else {
  saldoConta -= valorCarrinho
}
```

Outra opção de desvio de código é o [switch](https://www.w3schools.com/js/js_switch.asp). Ele funciona como uma agregação de vários if para uma mesma variável verificando qual é o valor dela (essa comparação é feita um única vez internamente utilizando o operador `====`). Utilizamos o comando `case` para identificar cada possível valor da variável e o comando `default` caso a variável não possua nenhum dos valores dos cases. Dentro de cada bloco de case ou default, podemos utilizar o comando `break`, para identificar que queremos encerrar o processamento dentro do switch e continuar a execução do código.

```javascript
const codigoPagamento = getFormaPagamentoClliente()

switch(codigoPagamento) {
  case 1:
    alert('Pagamento com boleto!')
    break
  case 2:
    alert('Pagamento com cartão de crédito!')
    break
  case 3:
    alert('Pagamento com saldo da conta!')
    break
  default:
    alert('Forma de pagamento desconhecida!')
}
```

## Laços de Repetição

Basicamente existe o [lop for](https://www.w3schools.com/js/js_loop_for.asp) e o [lopp while](https://www.w3schools.com/js/js_loop_while.asp). O *for* utilizamos quando queremos executar o mesmo trecho de código durante um número definido de vezes: nesse caso, é possível ter um controle de quantas vezes o código será executado. No caso do *while*, o trecho de código especificado será executado um número indefinido de vezes enquanto uma condição informada seja verdadeira.

Anatomia do loop for: `for (inicialização; condição de fim; executar a cada iteraçãa)`. Exemplo:

```javascript
let texto = ''
for (let i = 0; i < 10 ; i++) {
  texto += i
}
// texto aqui vale '0123456789'
// i é inicializado com 0
// a cada iteração i é incrementado em 1
// o for é executado enquanto i for menor do que 10
// logo, o último valor de i é 9, pois quando chega a 10, o trecho não será executado
```

O while é bem simples e pode ser representado da seguinte forma:

```javascript
let texto = ''
let i = 0
let respostaUsuario = null
while (respostaUsuario != null) {
  texto += i++ 
  respostaUsuario = lerRespostaUsuario()
}
```

# 08-10 - Aula 12 - Minha função é cuidar do escopo

Tudo em javascript ocorre dentro de funções então é importante darmos uma atenção especial a elas. Podemos criar várias funcões em várias partes do código com muitos condicionais e laços de repetição. Mas é importante salientar como isso acontece e como acontece a formação de [escopo](https://www.w3schools.com/js/js_scope.asp), haja visto que uma função pode ter outra função internamente com outros trechos de código. Basicamente, podemos resumir que toda vez que criamos um bloco com chaves (`{}`) estamos criando um novo escopo. E o que isso significa? Significa que tudo o que for criado ali dentro só existirá e poderá ser acessado ali dentro. Dessa forma, uma variável criada dentro de um bloco de if só poderá ser usada dentro daquele bloco. Quando a execução do programa encontra o caractere de final de bloco (`}`), o programa será responsável por remover os apontamentos para aqueles endereços de memórias que criamos, deixando aquele trecho de memória livre para outro dado ser armazenado, logo, aquela variável não existe mais.

```javascript
let valor = 1
let texto = ''

alert(valor)

if (valor === 1) {
  let valor = 2
  alert(valor)

  if (valor === 2) {
    texto = 'novo texto'
  }
}

alert(texto)
alert(valor)
```

Isso acontece o mesmo quando criamos funções. As variáveis que criamos dentro de uma função podems ser criadas com os mesmos nomes de variáveis de outra função, pois estão em escopos diferentes.

```javascript
function a() {
  let valor = 1
  alert(valor)
}

function b() {
  let valor = 2
  alert(valor)
}

a()
b()
alert(valor)
```

Lembra que falamos do `var` anteriormente e dos problemas que ele poderia nos causar quando falamos de escopo? Então, basicamente o que é declarado com `var` possui escopo global, ou seja, pode ser alterado dentro de outro escopo. Assim é como o javascript funcionava anteriormente, mas causa diversos problemas quando utilizávamos um mesmo nome de variável em escopos diferentes. Isso foi resolvido substituindo-a pelo `let`, que faz o controle de escopo local como nos exemplos anteriores. Portanto não utilize `var`.

## Arrow Function

Outra forma de abreviar a declaração de uma função é utilizando a notação de [arrow function](https://www.w3schools.com/js/js_arrow_function.asp). Existem algumas pequenas diferenças sobre a declaração nominal de funções e as arrow function, mas veremos isso em capítulos adiante. Por ora, vejamos elas como um atalho para descrever uma função utilizando a sintaxe `nomeDaFuncao = (parametros) => retorno`. O retorno da função pode estar entre chaves se possuir mais de uma linha e os parâmetros podem estar separados, por vírgula. Se nenhum parâmetro for necessário, pode-se usar apenas os parênteses vazio (`()`). Se houver apenas um parâmetro, pode-se usar o nome do parâmetro sem os parênteses:

```javascript
soma = (operandoA, operandoB) => operandoA + operandoB
exibir = texto => alert(texto)
obterValor = () => prompt('Digite um número')

somarExibindo = () => {
  operandoA = obterValor()
  operandoB = obterValor()
  resultado = soma(operandoA, operandoB)
  exibir(resultado)
}
```


## Projeto #03

**Escopo 1**: Criar um novo projeto no Github (`recomendacao-jogos`) para recomendação de jogos baseado em regras pré-definidas e interesses dos usuários. O interesse do usuário é representado por um objeto contendo as propriedades:
```
console => valore possíveis: 'xbox', 'play', 'pc'
estilo => valores possíveis: 'plataforma', 'estratégia', 'corrida', 'fps'
ambiente => valores possíveis: 'sci-fi', 'medieval', 'realista' 
intensidade => valores possíveis: 'casual', 'normal', 'hardcore'
```

Regras:
- Quando o interesse for 'xbox' e estilo 'corrida', o retorno deve ser 'Forza Motorsport'
- Quando o interesse for 'pc' e 'estratégia', o retorno deve ser 'Age of Empires
- Quando o interesse for 'play', 'estratégia' e 'hardcore', o retorno deve ser 'Final Fantasy Tactics'
- Quando o interesse for 'corrida' e 'sci-fi', o retorno deve ser 'F-Zero'
- Quando o interesse for 'pc' e 'hardcore', o retorno deve ser 'Dark Souls'
- Quando o interesse for 'pc' e 'casual', o retorno deve ser 'Angry Birds'
- Quando o interesse for 'play' e 'plataforma', o retorno deve ser 'Crash Bandicoot'
- Quando o interesse for 'corrida' e 'casual', o retorno deve ser 'Mario Kart'
- Quando o interesse for 'fps' e 'pc', o retorno deve ser 'Counter Strike'
- Quando o interesse for 'xbox' e 'sci-fi', o retorno deve ser 'Halo'


**Escopo 2**: Criar um novo projeto no Github (`juros-compostos`) para calcular o montante acumulado de um investimento financeiro. A função deverá receber por argumentos, qual o valor do capital investido, a taxa de juros aplicada e o período da aplicação. [Juros Compostos](https://mepoupenaweb.uol.com.br/dicas-de-riqueza/o-que-sao-juros-compostos-e-como-usa-los-para-enriquecer/)

**Data de Entrega**: 11/10 às 23h59

**Forma de Entrega Escopo 1**: Branch `projeto-03` no repositório `recomendacao-jogos` (exatamente assim)

**Forma de Entrega Escopo 2**: Branch `projeto-03` no repositório `juros-compostos` (exatamente assim)

# 12-10 - Aula 13 - Espera aí
# 13-10 - Aula 14 - Chama a mãe de volta que o pai ta loco
# 14-10 - Aula 15 - Finalmente é  hora de reagir
# 15-10 - Aula 16 - Agora ficou interessante

## Projeto #04

**Escopo**: Adicione uma interface gráfica utilizando React para os dois projetos (`recomendacao-jogos` e `juros-compostos`) criados na semana anterior. Nesses dois projetos, deverá ser possível interagir com a interface mudando valores, ou seja, o usuário poderá testar quantas vezes quiser com diferentes entradas. Os projetos devem permanecer separados e atualizados no Github. Aproveite para adicionar os dois projetos no seu currículo virtual.

**Data de Entrega**: 18/10 às 23h59

**Forma de Entrega 1**: Branch `projeto-04` no repositório `curriculo-virtual` (exatamente assim)

**Forma de Entrega 2**: Branch `projeto-04` no repositório `recomendacao-jogos` (exatamente assim)

**Forma de Entrega 3**: Branch `projeto-04` no repositório `juros-compostos` (exatamente assim)

# 19-10 - Aula 17 - Precisamos de um mapa pra não se perder
# 20-10 - Aula 18 - Falando em se perder, escolhe uma rota
# 21-10 - Aula 19 - São muitas memórias pra guardar
# 22-10 - Aula 20 - Eu vejo pacotes por toda parte

## Projeto #05

**Escopo**: Transforme seu currículo virtual deixando-o interativo com React. Crie uma tela nova para cada projeto listado no currículo e permita que o usuário acesse-as individualmente (rotas diferentes). Cada projeto listado no currículo deverá ter um link para o Github, uma ou mais imagens, uma descrição e as tecnologias utilizadas. Capriche no estilo, afinal, é seu currículo virtual.

**Data de Entrega**: 25/10 às 23h59

**Forma de Entrega**: Branch `projeto-05` no repositório `curriculo-virtual` (exatamente assim)

# 26-10 - Aula 21 - Precisamos de um carteiro
# 27-10 - Aula 22 - A incrível TenoStart API
# 28-10 - Aula 23 - Muito serviço pela frente
# 29-10 - Aula 24 - Quem sou eu?

## Projeto #06

**Escopo**: Conecte seu currículo virtual à **TecnoStart API**. Crie uma tela de login para seu curriculo virtual. Na área logada poderá adicionar mais projetos e alterar seus dados comunicando com a TecnoStart API. Os dados listados, incluindo os projetos, deverão ser obtidos através da nossa API de currículos virtuais. Pessoas não logadas poderão acessar seu currículo para visualização.

**Data de Entrega**: 04/11 às 23h59

**Forma de Entrega**: Branch `projeto-06` no repositório `curriculo-virtual` (exatamente assim)

# 02-11 - Aula 25 - Vamos limpar essa sujeira
# 03-11 - Aula 26 - Surge uma revolução
# 04-11 - Aula 27 - Ao infinito e além
# 05-11 - Aula 28 - Brace yourselves

-------

Base

  - git / guthub
  - html
    - estrutura 
    - formulários
    - link
    - script
    - assets
  - css
    - inline
    - folha de estilos
    - hierarquia de prioridades
    - flexbox
  - javascript
    - npm
    - declaração de variáveis
    - declaração de funções
    - callback
    - arrow functions
    - escopo
    - this
    - classes
    - json
  - react
    - create-react-app
    - class component
    - function component
    - state
    - props
    - react hooks
    - presentation component
    - container component
    - services
    - integração com backend
  - axios
    - chamadas http
    - verbos http
    - rest api
    - funções axios
  - arquitetura
    - estrutura de diretórios
    - manutenebilidade
    - packages
    - atualização de pacotes
  - clean code
    - solid
  - devops
    - ambientes
    - conceito ci / cd
    - exemplos (github action, gitlab ci, bitbucket pipelines, jenkins)
