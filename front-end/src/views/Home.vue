<template>
  <div class="home">

    <h1>Bem vindo ao alurapic web</h1>

    <div class="searchBar">
      <label>🔍 <input name="filter" type="text" class="filtro" v-on:input="filtro = $event.target.value" placeholder="  Digite aqui para buscar..."></label>
    </div> 
    <br/>
    <p v-if="filtro">Todos os resultados com "{{ filtro }}" estão sendo mostrados:</p>
    <p v-else>As seguintes imagens estão atualmente cadastradas:</p>

    <ul>
      <li v-for="foto in fotosComFiltro" :key="foto.index">
        <al-panel :titulo="foto.titulo">
          <img :src="foto.url" :alt="foto.titulo">
        </al-panel>
     
      </li>
    </ul>
    <br/>

  </div>
</template>

<script>
// @ is an alias to /src
import PhotoPanel from '@/components/PhotoPanel.vue';


export default {
  name: 'home',

  components: {
    'al-panel' : PhotoPanel
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
    }
  },
  created() { 

    console.log(this.name + ' criado com sucesso. Populando...');

    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(x => this.fotos = x, err => console.log(err))
  
  }

}
</script>

<style scoped>

p {
  margin: 0 0 10px;
} 

.home {
    flex: 1 0 auto;

}
.home ul{
  display: inline-flexbox;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;

}

.home li {
    flex: 1 0 auto;
    display: inline-flex;
    flex-direction: row;
    margin: 5px 5px;
    width: 250px;
    border: 1px solid #2c3e50;
    padding: 5px;
}

.searchBar{
  display: -ms-inline-flexbox;
  width: 95%
  }

  .searchBar input {
    width: 60%;
    max-width: 500px;
    margin-bottom: 10px;
    color: #2c3e50;
  }

</style>