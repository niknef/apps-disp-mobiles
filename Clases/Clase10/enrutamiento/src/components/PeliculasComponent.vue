<template>
  <div class="detalles">
    <ol reversed>
      <li v-for="item in pelis" :key="item.id">
        {{ item.titulo }}

        <router-link :to="'/peliculas/' + item.id + '/' + item.estreno"> Ver Detalle </router-link>
        <!--<router-link :to="`/peliculas/${item.id}/${item.estreno}`"> Ver Detalle</router-link>
        <router-link :to="{ name: 'peliculas', params: { id: item.id, estreno: item.estreno } }"
          >Ver Detalle</router-link>-->
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'PeliculasComponent',
  data: function () {
    return {
      pelis: [
        { id: 1, titulo: 'The Avengers', estreno: 2012 },
        { id: 2, titulo: 'Los juegos del hambre', estreno: 2012 },
        { id: 3, titulo: 'Avatar', estreno: 2009 }
      ]
    }
  }
}
</script>
<style>
.detalles {
  text-align: left;
}

ol li {
  padding: 15px;
  list-style: upper-roman;
}
ol li a {
  border: none;
  text-decoration: underline;
}

[v-cloak] > * {
  display: none;
}
</style>
