<template>
  <div id="app">
    <header>
      <rdnzNavbar class="navbar"></rdnzNavbar>
    </header>

    <main>
      <transition name="pagina">
        <router-view class="content"/>
      </transition>
    </main>

    <footer>
      <rdnzFooter class="footer"></rdnzFooter>
    </footer>


  </div>
</template>

<script>
import rdnzNavbar from '@/components/Navbar.vue';
import rdnzFooter from '@/components/Footer.vue';

export default {
    components: {
    rdnzNavbar,
    rdnzFooter
  }

}

</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
	flex-direction: column;
	height: 100vh;
  background-color:floralwhite;
}

h1 {
  font-size: 22px;
  text-transform: uppercase;
  margin: 10px 0 20px;
  }

strong {
  font-weight: bold;
}

em {
  font-style: italic;
  color: #42b983;
}

main {
	flex: 1 0 auto;
  display : inline-flex;
  flex-direction: column;
}

main a {
  color: #42b983
}

header {
  flex-shrink: 0;
	height: 60px;
  line-height: 50px;
  text-align: center;
  margin-bottom: 25px;
}

.content {

}

.pagina-enter, .pagina-leave-active {
  opacity: 0
}

.pagina-enter-active, .pagina-leave-active {
  transition: opacity 0.1s
}


footer {
  flex-shrink: 0;
  padding: 0 auto;
	height: 50px;
  margin: 25px 0 0;
	line-height: 50px;
  text-align: center;
}

</style>
