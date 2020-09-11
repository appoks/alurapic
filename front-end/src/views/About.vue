<template>
  <div class="about">
    <h1>Sobre o AluraPIC<span class="version">v0.1.0</span></h1>
    <p class="heading"><strong>ALURAPIC</strong> é uma SPA desenvolvida em <em>Vue.js</em> como projeto de curso na Alura.</p>
    <br/>
    <br/>
    <p>O código base deste projeto foi desenvolvido seguindo a formação de Vue. Além de outros cursos na Alura:</p>
    <ul>
      <li v-for="tech in techStack" :key="tech.index">
        <strong><em>&#10003;</em></strong> {{tech.technology}}
        <strong>:</strong> {{tech.description}}
        <p></p>
      </li>
    </ul>
    <br/>
    <p>Ah, eu acho essas cores do Vue iradas. Como um 'não-designer', acho que foi uma boa ideia usá-las. </p>    
    <br/>
    <br/>
    <p class="heading">O código fonte está no <a href="http://github.com/appoks/alurapic">meu GitHub</a> (mas não me julgue).<br/> Caso você não tenha ideia do que é a Alura, dá uma olhada <a href="https://alura.com.br">aqui</a>. Os caras são daora!</p>
    <br/>
    <br/>
    <p>obs: alguns comportamentos de posicionamento não foram planejados mas em geral o resultado me agradou. <br/>Eu <em>realmente</em> preciso aprender melhor sobre posicionamento com CSS (mas em algum momento eu precisava 'entregar').</p>
    <br/>
    <br/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      techStack: [
        {technology: 'HTML/CSS',
        description:'Um conhecimento básico sobre marcação de texto, estilização e posicionamento para páginas web foi bastante útil; Também, aprender estas competências me pareceu fazer sentido no desenvolvimento d\'uma aplicação web.'},
        {technology: 'JavaScript',
        description:'Como não poderia faltar, a linguagem de programação entendida pelos navegadores também é um requisito para o desenvolvimento de uma SPA reativa. Alguns módulos adicionais dos cursos de JS foram estudados, embora todo o código em JavaScript necessário para o funcionamento da SPA foi demonstrado dentro do próprio curso de Vue.'},
        {technology: 'Flexbox',
        description:'Para tentar organizar melhor a disposição dos elementos na página - e pra que fosse possível criar uma página responsiva - eu consultei alguns conceitos básicos de Flexbox. Copiei alguns snippets do StackOverflow (lógico!) e refinei o resultado final com o curso de Flexbox, também disponível no repertório deles. '},
        {technology: 'REST',
        description:'Embora para o projeto do AluraPIC seja fornecida a API que contém as fotos, um pouco de "saber como funciona" uma REST-API provavelmente foi útil. Esta competência, porém, foi obtida consumindo conteúdo de diversos blogs, documentação da Microsoft e demais pesquisas que fiz quando precisei desenvolver uma API dessas em meu trabalho.'},
        ]
    }
  }
}
</script>

<style scoped>

.about {
  max-width: 900px;
  width: 95%;
  margin: 0 auto;
  text-align: center;
}

.version {
  font-size: 0.5em;
  text-transform: lowercase;
  margin-left: 5px;
}

.heading {
  border: 1px solid #42b983;
  padding: 10px;
}

p {
  margin: 10px 2px;
  line-height: 1.5em;
}

strong {
  font-weight: bold;
}

em {
  font-style: normal
}

li {
  line-height: 1.3em;
}

</style>
