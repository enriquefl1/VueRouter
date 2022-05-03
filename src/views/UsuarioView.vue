<template>
  <div>
    <h1>Pagina del Usuario</h1>
    <h2>usuario: {{ usuario }}</h2>
  </div>
</template>

<script>
export default {
  name: "UsuarioView",
  computed: {
    usuario() {
      return this.$route.params.usuario;
    },
  },
};
</script>

<style></style>
