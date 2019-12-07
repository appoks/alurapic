<template>

  <div>

    <h1>ALURAPIC - CADASTRO DE IMAGENS</h1>
    <p v-if="photo"> Você está alterando a  foto de id "{{photo._id}}".</p>
    <p v-if="!photo"> Você está cadastrando uma nova foto...</p>
    <p v-if="message"> {{ message }}</p>
    <br/>

    <div class="cadastro-wrapper">

<section class="cadastro-form">
      <form @submit.prevent="save()"> 

          <div class="controle">
            <label for="titulo">Título:</label>
            <input id="titulo" 
              type="text" 
              placeholder="Insira o título da imagem..." 
              autocomplete="off"
              v-model.lazy="photo.titulo">
          </div>

          <div class="controle">
            <label for="url">URL:</label>
            <input id="url" 
              type="text" 
              placeholder="Insira o endereço da imagem (ou o código base64)..."
              autocomplete = "off"
              v-model.lazy="photo.url">
          </div>
          
          <div class="controle">
            <label for="descricao">Descrição:</label>
            <input id="descricao" 
              type="text"
              placeholder="Uma breve descrição sobre o conteúdo da imagem..."
              autocomplete="off"
              v-model.lazy="photo.descricao">
          </div>
          
            <al-button v-if="!photo._id" tipo="default" rotulo="Adicionar" class="cadbutton"></al-button>

      </form>

          <div class="button-group">
            <al-button v-if="photo._id" tipo="default" rotulo="Alterar" class="edit-buttons"></al-button>
            <al-button v-if="photo._id" tipo="danger" :confirmar="true" rotulo="Remover" @click="remove()" class="edit-buttons"></al-button>
          </div>

</section>   

      <div class="cadastro-preview" v-if="photo.titulo || photo.url">
        <p>_ {{ photo.titulo }} _</p>
        <img :src="photo.url" :alt="photo.titulo" v-zoomable:argument.animate.reverse="0.5">
      </div>

    </div>

  </div>

</template>

<script>
import Button from '@/components/Button.vue';
import Photo from '@/models/Photo.js';
import PhotoResource from '@/utils/PhotoResource.js';

export default {

  components:  {
    'al-button' : Button 
  },

  methods: {

    remove() {

      this.service.remove( this.photo._id )
        .then( () => {
          this.message =  "foto removida com sucesso";
          this.photo = new Photo(); //deveria retornar ao home?
        }, err => {1
          console.log(err);
          this.message = 'não foi possível remover a foto';
        }
      );
      /*
      .delete(`v1/fotos/${photo._id}`)
      .then(
        () => {
          this.message =  "foto removida com sucesso";
          this.photo = new Photo(); //deveria retornar ao home?
        }, err => {1
        console.log(err);
        this.message = 'não foi possível remover a foto';
        }
      );
      */

      /*
      
        let index = this.fotos.indexOf(photo);
        this.photos.splice(index,1);
    

        */
    

    },
    save(){

      if (this.photo.title || this.photo.url){
          this.service.add()
          .then( 
            () => this.photo = new Photo(),
            err => console.log(err)
          );
    
          this.photo =  new Photo();
        }

      }
  },

  data() {
    return {
      photo: new Photo(),
      message: '',
      id: this.$route.params.id
    }
  },

  created() {

    this.service = new PhotoResource(this.$resource)
    this.resource = this.$resource('v1/fotos');

    if(this.id){
      this.service.get(this.id)
      .then (photo => this.photo = photo)
    } 
  }

}
</script>

<style scoped>

.cadastro-wrapper {
	display: flex;
  flex-flow: row;
  flex-wrap: wrap;
	margin: 0 auto;
	justify-content: space-around;
	margin-top: 10px;
  max-width: 900px;
}
.cadastro-form, .cadastro-preview {
	display: flex;
	flex-direction: column;
	padding: 10px 10px;
  width: 45%;
  min-width: 350px;
  margin: 0 5px;
}


.cadastro-form input {
	height: 30px;
	padding: 0 10px;
}


.cadbutton {
margin-top:15px;
width: 100%;
}


.button-group{

 margin: 0 auto;
 display: flex;
 flex-direction: row;
 flex: 1 0 auto;
 justify-content: center;
 width: 100%;
 justify-content: space-between;
 margin-top:15px;
}

.edit-buttons {
  flex-basis: 49%;
}

.cadastro-preview {
  border: 1px solid #2c3e50;
  align-content: center;
  overflow: hidden;
}
.cadastro-preview p {
  margin-bottom: 4px;
  text-align: center;
}

.cadastro-preview img {
	border: 0px;
  margin: 0 auto;
  width: 100%;
}

.controle {
	display: flex;
	flex-direction: column;
	margin: 5px 0;
  width: 100%;
}

.controle label {
	margin-bottom: 4px;
	text-align: left;
}


</style>
