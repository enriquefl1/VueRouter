<template>
  <div class="home">
    <h1>Lista de usuario</h1>
    <ul>
      <li v-for="(usuario, i) in usuarios" :key="i">
        <router-link :to="`/user/${usuario.nombre}`">{{
          usuario.nombre
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "PortadaView",
  data() {
    return {
      usuarios: [
        {
          id: 1,
          nombre: "Enrique",
          apellido: "Garcia",
          edad: "30",
          email: "enrique.garcia@gmail.com",
        },
        {
          id: 2,
          nombre: "Juan",
          apellido: "Perez",
          edad: "25",
          email: "juanperez@gmail.com",
        },
        {
          id: 3,
          nombre: "Pedro",
          apellido: "Lopez",
          edad: "35",
          email: "pedrolopez@gmail.com",
        },
      ],
    };
  },
};
</script>
