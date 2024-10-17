<script>
import { RouterLink, RouterView } from 'vue-router'


  export default {
  name: 'App'
  
  
  
}
</script>
<template>
  <div id="appc" v-cloak>
    <h1>Enrutamiento con Parámetros </h1>
    <div id="nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/ingresar">Ingresar</router-link></li>
        <li><router-link to="/ver">Ver</router-link></li>
    </ul>
    </div>
    <router-view/>
    <footer>
      <details>2024
          <summary>Todos los derechos reservados &copy; Mabel García</summary>
    </details>
  </footer>
  </div>

</template>
<style>
#appc {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: grey;
  background: pink;
}

#nav a.router-link-exact-active {
  color: pink;
  color: white;
}

ul{
  list-style: none;
}
ul li{
  display: inline-block;
  padding: 10px; 
  margin-left: 10px;
  width: 120px; 
  font-size: 1em;
  width: 150px;
  color: blue
}

footer{
  margin-top: 50px;
  font-size: 0.7em;
  font-style: italic;
  color: lightseagreen;

}
</style>
