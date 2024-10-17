<template>
  <div class="home">
    <h2>Top 3 Películas super taquilleras</h2>
     <PeliculasComponent/> <!--componente-->
  </div>
</template>

<script>
import PeliculasComponent from '../components/PeliculasComponent.vue'

export default {
  name: 'HomeView',
  components: {
    PeliculasComponent
  }
}
</script>