<template>
  <div class="home">

    <h1>Bem vindo ao alurapic web</h1>

    <div class="searchBar">
      <label>🔍 <input 
      name="filter" 
      type="text" 
      class="filtro" 
      v-on:input="filtro = $event.target.value" 
      placeholder="  Digite aqui para buscar..."></label>
    </div> 
    <br/>
    <p v-if="filtro">Todos os resultados com "{{ filtro }}" estão sendo mostrados:</p>
    <p v-else>As seguintes imagens estão atualmente cadastradas:</p>

    <ul>
      <li v-for="foto in fotosComFiltro" :key="foto.index">
        <al-panel :titulo="foto.titulo">
          <img :src="foto.url" :alt="foto.titulo" v-zoomable.animate.reverse="1">
        </al-panel>

          <div class="buttons-bar">
            <router-link :to="{ name: 'alterar', params: { id: foto._id }}" class="detailsButton"><al-button  v-if="showDetailsButton" tipo="default" rotulo="DETALHES" @click="detailPhoto()"></al-button>
            </router-link>
          </div>
     
      </li>
    </ul>
    <br/>
  <p class="heading">Você pode aproximar as imagens dando um duplo clique sobre elas, ou escondê-las clicando no título</p>

  </div>
</template>

<script>
// @ is an alias to /src
import PhotoPanel from '@/components/PhotoPanel.vue';
import Button from '@/components/Button.vue';
import PhotoResource from '@/utils/PhotoResource.js'


export default {
  name: 'home',

  components: {
    'al-panel' : PhotoPanel,
    'al-button': Button
  },

  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },

  data() {
    return {
      fotos:[{
        url:'https://media.wired.com/photos/5a5547032b3a7778f5ca06cb/master/pass/Doggo-FeatureArt2-104685145.jpg', 
        titulo:'doggo1'
      },{
        url:'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Cat-and-Dog.gif/220px-Cat-and-Dog.gif', 
        titulo:'doggo2'
      }],
      filtro: '',
      showDetailsButton: true,
    }
  },
  created() { 

    this.service = new PhotoResource(this.$resource)
    console.log(this.name + ' criado com sucesso. Populando...');

    this.service.list()
      .then(x => this.fotos = x, err => console.log(err))
  
  },
  methods: {
    detailPhoto() {

    }
  }

}
</script>

<style scoped>

p {
  margin: 0 0 10px;
}

.home {


}

.home ul{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;

}

.home li {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    margin: 5px 5px;
    width: 265px;
    border: 1px solid #2c3e50;
    padding: 5px;
    justify-content: space-between;
    align-content: center;
}

  .buttons-bar {
    display: flex;
    flex-direction: row;
    justify-content: center;
  
    padding: 0 0;
  }

.detailsButton {
  width: 80%
}

.searchBar{
  display: inline-flexbox;
  width: 95%
  }

.searchBar input {
    width: 60%;
    max-width: 500px;
    margin-bottom: 10px;
    color: #2c3e50;
  }

.heading {
  border: 1px solid #42b983;
  padding: 10px;
  display: inline-flexbox;
  width: fit-content; /* WOW, esse eu curti ##VERIFICAR */ 
  margin: 0 auto;
  text-align: center;
  }


</style>