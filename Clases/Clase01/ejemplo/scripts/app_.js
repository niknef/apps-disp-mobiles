const app = Vue.createApp({
    data() {
      return {
        mensaje:"Aprendiendo Vue",
        bienvenida:"Primer clase de Vue",
        visible:true,
        imagen: "img/gato.jpg",
        descripcion:"Gato jugando con una mariposa",
        booleano:true,
        colorEncabezado: 'green',
        tamanioFuente: 43,
        italica: 'italic',
        backgroundColor:'orange',
        dato:'<span>Soy un texto dentro de un span</span>'

      }

    },
});
app.mount('#app');


