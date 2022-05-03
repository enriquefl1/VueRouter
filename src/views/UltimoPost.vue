<template>
  <div class="about">
    <h1>Ultimo post</h1>
    <h2>valor: {{ ultimoPost }}</h2>
  </div>
</template>

<script>
export default {
  name: "UltimoPost",
  computed: {
    ultimoPost() {
      return this.$route.params.id;
    },
  },
};
</script>
