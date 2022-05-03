<template>
  <div id="app">
    <nav>
      <router-link to="/">Portada</router-link> |
      <router-link to="/sobremi">Sobre Mi</router-link> |
      <router-link to="/contacto">Contacto</router-link> |
      <router-link to="/ultimopost/1">Ultimo Post</router-link>
    </nav>

    <router-view />

    <footer>
      <a href="verpaginainexistente">Comodin para ver la pagina inexistente</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
