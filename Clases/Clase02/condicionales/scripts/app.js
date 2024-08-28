const app = Vue.createApp({
    data() {
      return {
      mensajito: "Mi super App en Vue",
			mostrar:false,
			selected:"seleccionados",
			valor:8,
			edad: 40,
			resultado:1,
			saludo:'<h1>Hola</h1>',
			dato:false
      }

    },
});
app.mount('#contenedor');



