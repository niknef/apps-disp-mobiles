const app = Vue.createApp({
  data(){
 return {
     datos:"",
     }

  },
  methods: {
    manejarFormularioEnviado(datos) {
      console.log('Datos del formulario:', datos);
      this.datos = datos;
   } 
  }
});

// Registrar el componente globalmente dentro de la aplicación
app.component('componente-formulario', ComponenteFormulario);

app.mount('#app');