<template>
    <div id="nav">
      <div> <p>ALURAPIC</p> </div>
      <div class="links"> 
        <router-link to="/">Visualizar</router-link> |
        <router-link to="/cadastro">Cadastro</router-link> |
        <router-link to="/sobre">Sobre</router-link>
      </div> 
    </div>

    <!-- 

        É possível criar um menu dinâmico:

      import { routes } from 'router';

      ....

        <ul>
          <li v-for="route in routes" :key="route.index">
            //if ternário
            <router-link :to="route.path ? route.path : '/' ">{{route.titulo}}</router-link>
          </li>
        </ul>

    -->
</template>

<script>
export default {
    name:'rdnzNavbar'
}
</script>

<style scoped>

#nav {
    padding: 0 10px;
    background-color: #2c3e50;
    border-bottom: 2px solid #42b983;
    color: floralwhite;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}

#nav p {
    font-weight: bold;
}

#nav .links {
      display: flex;
      margin: 5px;
}

#nav a {
  font-weight: bold;
  color: floralwhite;
  padding: 0 5px 0;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>