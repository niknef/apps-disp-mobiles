const app = Vue.createApp({
  data() {
    return {
      mensaje: "pepe",
      lista:[]
     }
  },
  methods:{
    agregar:function(){
      this.lista.push(this.mensaje);
      this.mensaje="";
    },
    borrar:function(index){
      this.lista.splice(index,1)
    }
  }
});
app.mount('.contenedor');


