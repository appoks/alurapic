<template>
  <div>
      <h1>ALURAPIC - CADASTRO DE IMAGENS</h1>
      <p> Você está cadastrando uma nova foto...</p>
      <div class="cadastro-wrapper">
        
        <div class="cadastro-form">

          <div class="controle">
            <label for="titulo">Título:</label>
            <input id="titulo" type="text" placeholder="Insira o título da imagem...">
          </div>

          <div class="controle">
            <label for="url">URL:</label>
            <input type="text" id="url" placeholder="Insira o endereço da imagem (ou o código base64)...">
          </div>
          
          <div class="controle">
            <label for="descricao">Descrição:</label>
            <input type="text" id="descricao" placeholder="Uma breve descrição sobre o conteúdo da imagem...">
          </div>

		<al-button tipo="default" rotulo="Adicionar" class="cadbutton"></al-button>
        
		</div>

        <div class="cadastro-preview">
			<p>Título da Imagem</p>
			<img src="#" alt="">
        </div>

      </div>
      
      <div class="container">
      <al-button v-show="false" tipo="default" rotulo="Editar"></al-button>
      <al-button v-show="false" tipo="danger" :confirmar="true" rotulo="Remover" @click="remover"></al-button>
      </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {

  components:  {
    'al-button' : Button 
  },

  methods: {

    remover() {
      alert('remover');
    }
  }

}
</script>

<style scoped>

.cadastro-wrapper {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: 0 auto;
	justify-content: center;
	margin-top: 10px;
}
.cadastro-form, .cadastro-preview {
	display: flex;
	flex-direction: column;
	padding: 10px 10px;

}

.cadastro-form {
		width: 25%;
}

.cadastro-form input {
	height: 30px;
	padding: 0 10px;
}

.cadbutton {
	display: inline-flexbox;
	width: 100%;
}

.cadastro-preview {
	width: 35%;
}
.cadastro-preview p {
  margin-bottom: 4px;
  text-align: left;
}

.cadastro-preview img {
	width: 450px;
	height: 300px;
	border: 0px;
}

.controle {

	display: flex;
	flex-direction: column;
	margin: 5px 0;
}

.controle label {
	margin-bottom: 4px;
	text-align: left;
}
</style>
