const app = Vue.createApp({
  data() {
    return {
      mensaje: "Ejemplo-la instancia root"
    }
  },

beforeCreate() {
    console.log("beforeCreate - Se ejecuta antes de crear la instancia y establecer las opciones de data y métodos.");
  },
  created() {
    console.log("created - Se ejecuta después de crear la instancia, pero antes de montarla en el DOM.");
  },
  beforeMount() {
    console.log("beforeMount - Se ejecuta antes de montar la instancia en el DOM.");
  },
  mounted() {
    console.log("mounted - Se ejecuta después de montar la instancia en el DOM.");
  },
  beforeUpdate() {
    console.log("beforeUpdate - Se ejecuta antes de actualizar la instancia cuando cambian los datos.");
  },
  updated() {
    console.log("updated - Se ejecuta después de actualizar la instancia cuando cambian los datos.");
  },
  beforeUnmount() {
    console.log("beforeUnmount - Se ejecuta antes de desmontar la instancia del DOM.");
  },
  unmounted() {
    console.log("unmounted - Se ejecuta después de desmontar la instancia del DOM.");
  }
})


app.component('componente-form', ComponenteForm);
app.component('componente-lista', ComponenteLista);
app.component('componente-navegacion', ComponenteNavegacion);

// Montar la aplicación en el elemento con la clase "contenedor"

app.mount('.contenedor');






